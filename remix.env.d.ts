/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare-workers/globals" />
/// <reference types="@cloudflare/workers-types" />

declare var DATA: KVNamespace
declare var NOTION_TOKEN: string
declare var NOTION_POSTS_DB_ID: string

type PostMetadata = {
  title: string
  lede: string
  dateWritten: string
}
