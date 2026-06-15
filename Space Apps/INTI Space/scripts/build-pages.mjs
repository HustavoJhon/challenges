import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync, rmSync } from 'fs'
import { resolve, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const partialsDir = resolve(rootDir, 'partials')

function loadPartial(name) {
  const path = resolve(partialsDir, name)
  if (!existsSync(path)) {
    console.warn(`  ⚠ Partial not found: ${name}`)
    return `<!-- MISSING PARTIAL: ${name} -->`
  }
  return readFileSync(path, 'utf-8')
}

function buildPage(html, filename) {
  const pageName = basename(filename, '.html')
  let result = html
  while (/<!--#include file=".+?"\s*-->/.test(result)) {
    result = result.replace(/<!--#include file="(.+?)"\s*-->/g, (_, file) => {
      return loadPartial(file)
    })
  }
  result = result
    .replace(/\{\{ACTIVE_INDEX\}\}/g, pageName === 'index' ? 'active' : '')
    .replace(/\{\{ACTIVE_BROWSE\}\}/g, pageName === 'browse' ? 'active' : '')
    .replace(/\{\{ACTIVE_STREAMS\}\}/g, pageName === 'streams' ? 'active' : '')
    .replace(/\{\{ACTIVE_PROFILE\}\}/g, pageName === 'profile' ? 'active' : '')
  return result
}

const pages = ['index', 'browse', 'streams', 'profile', 'details', 'detail_1', 'detail_2', 'detail_3', 'detail_4']

const outDir = resolve(rootDir, 'dist')
const assetDirs = ['assets', 'vendor', 'pages', 'doc']

if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true })
}
mkdirSync(outDir, { recursive: true })

console.log('Building pages...')
for (const page of pages) {
  const srcPath = resolve(rootDir, `${page}.html`)
  if (!existsSync(srcPath)) {
    console.warn(`  ⚠ Source not found: ${page}.html, skipping`)
    continue
  }
  const raw = readFileSync(srcPath, 'utf-8')
  const built = buildPage(raw, srcPath)
  writeFileSync(resolve(outDir, `${page}.html`), built)
  console.log(`  ✓ ${page}.html`)
}

console.log('\nCopying assets...')
for (const dir of assetDirs) {
  const srcDir = resolve(rootDir, dir)
  const destDir = resolve(outDir, dir)
  if (existsSync(srcDir)) {
    cpSync(srcDir, destDir, { recursive: true, force: true })
    console.log(`  ✓ ${dir}/`)
  }
}

console.log('\nDone! Site ready in dist/')
