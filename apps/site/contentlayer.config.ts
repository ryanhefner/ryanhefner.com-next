import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { format } from 'date-fns'
import remarkGfm from 'remark-gfm'

export const Newsletter = defineDocumentType(() => ({
  name: 'Newsletter',
  filePathPattern: 'newsletters/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    preview: { type: 'boolean', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/newsletters/${post.slug}`,
    },
  },
}))

export const Now = defineDocumentType(() => ({
  name: 'Now',
  filePathPattern: 'now/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    location: { type: 'string', required: false, defaultValue: 'Atlanta, GA' },
    preview: { type: 'boolean', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/now/${format(post.date, 'yyyy-MM-dd')}`,
    },
  },
}))

export const Thought = defineDocumentType(() => ({
  name: 'Thought',
  filePathPattern: 'thoughts/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    preview: { type: 'boolean', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/thoughts/${post.slug}`,
    },
  },
}))

export const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: 'updates/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    preview: { type: 'boolean', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/updates/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'apps/site/src/docs',
  disableImportAliasWarning: true,
  documentTypes: [Now, Thought, Update],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})
