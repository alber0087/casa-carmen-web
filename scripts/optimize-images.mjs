import { readdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const PUBLIC_DIR = new URL('../public/', import.meta.url).pathname
const QUALITY = 80
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg'])

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

const entries = await readdir(PUBLIC_DIR, { withFileTypes: true })
const sources = entries
  .filter((e) => e.isFile() && SOURCE_EXT.has(parse(e.name).ext.toLowerCase()))
  .map((e) => e.name)

if (sources.length === 0) {
  console.log('No PNG/JPG images found in /public')
  process.exit(0)
}

let totalIn = 0
let totalOut = 0
let processed = 0
let skipped = 0

for (const name of sources) {
  const { name: base } = parse(name)
  const srcPath = join(PUBLIC_DIR, name)
  const outPath = join(PUBLIC_DIR, `${base}.webp`)

  const srcStat = await stat(srcPath)

  try {
    const outStat = await stat(outPath)
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`  skip   ${name} (webp up to date)`)
      skipped++
      continue
    }
  } catch {
    // .webp doesn't exist yet — proceed
  }

  await sharp(srcPath).webp({ quality: QUALITY }).toFile(outPath)
  const outStat = await stat(outPath)

  totalIn += srcStat.size
  totalOut += outStat.size
  processed++

  const savings = ((1 - outStat.size / srcStat.size) * 100).toFixed(0)
  console.log(
    `  ok     ${name} → ${base}.webp  (${formatBytes(srcStat.size)} → ${formatBytes(outStat.size)}, -${savings}%)`
  )
}

if (processed > 0) {
  const totalSavings = ((1 - totalOut / totalIn) * 100).toFixed(0)
  console.log(
    `\n${processed} image(s) processed, ${skipped} skipped. ${formatBytes(totalIn)} → ${formatBytes(totalOut)} (-${totalSavings}%)`
  )
} else {
  console.log(`\nNothing to do. ${skipped} image(s) already up to date.`)
}
