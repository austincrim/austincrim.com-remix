// @ts-nocheck
import { Client, LogLevel } from '@notionhq/client'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionToMarkdown } from 'notion-to-md'
import { marked } from 'marked'
import hl from 'highlight.js'

export type PostProperties = {
  title: string
  lede: string
  slug: string
  published: boolean
  datePublished: string
}

let notion = new Client({
  auth: NOTION_TOKEN,
  fetch,
  logLevel: LogLevel.DEBUG
})
let n2m = new NotionToMarkdown({ notionClient: notion })

export async function getAllPostProperties() {
  let result = await notion.databases.query({
    database_id: NOTION_POSTS_DB_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    },
    sorts: [{ direction: 'descending', property: 'Date Published' }]
  })
  return parseDatabaseProperties(result)
}

export async function getPostProperties(slug: string) {
  let result = await notion.databases.query({
    database_id: NOTION_POSTS_DB_ID,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug
      }
    }
  })
  let [parsed] = parseDatabaseProperties(result)
  let markdown = await getPostMarkdown(result.results[0].id)
  marked.setOptions({
    highlight: (code, lang) => {
      try {
        return hl.highlight(code, { language: lang, ignoreIllegals: true })
          .value
      } catch (e) {
        return code
      }
    }
  })
  let html = marked.parse(markdown)

  parsed = { html, ...parsed }
  return parsed
}

export async function getPostMarkdown(pageId: string) {
  let blocks = await n2m.pageToMarkdown(pageId)
  return n2m.toMarkdownString(blocks)
}

function parseDatabaseProperties(database: QueryDatabaseResponse) {
  let postProperties: PostProperties[] = []
  for (const [, value] of Object.entries(database.results)) {
    let properties: PostProperties = {}
    for (const [k, v] of Object.entries(value.properties)) {
      if (k === 'Published') {
        properties.published = v.checkbox
      } else if (k === 'Date Published') {
        properties.datePublished = v.date.start
      } else if (k === 'Lede') {
        properties.lede = v.rich_text[0].plain_text
      } else if (k === 'Title') {
        properties.title = v.title[0].plain_text
      } else if (k === 'Slug') {
        properties.slug = v.formula.string
      }
    }

    postProperties.push(properties)
  }
  return postProperties
}
