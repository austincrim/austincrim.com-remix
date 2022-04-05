/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare-workers/globals" />
/// <reference types="@cloudflare/workers-types" />

declare var DATA: KVNamespace

type PostMetadata = {
  title: string
  lede: string
  dateWritten: string
}
