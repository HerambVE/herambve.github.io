/**
 * Generates optimized WebP thumbnails for the photography gallery.
 * Run with: node scripts/optimize-photos.mjs
 *
 * - Reads all images from public/photography/
 * - Writes resized WebP versions to public/photography/thumb/
 * - Gallery cards use these small thumbs (~800px wide, quality 75)
 * - Lightbox still loads the original full-res file
 */

import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const SRC_DIR = "public/photography";
const OUT_DIR = "public/photography/thumb";
const MAX_WIDTH = 800;
const QUALITY = 75;
const ALLOWED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function run() {
	await mkdir(OUT_DIR, { recursive: true });

	const files = (await readdir(SRC_DIR)).filter((f) =>
		ALLOWED_EXTS.has(extname(f).toLowerCase()),
	);

	console.log(`Optimizing ${files.length} photos → ${OUT_DIR}/`);

	for (const file of files) {
		const input = join(SRC_DIR, file);
		const name = basename(file, extname(file));
		const output = join(OUT_DIR, `${name}.webp`);

		try {
			const meta = await sharp(input).metadata();
			const width =
				meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

			await sharp(input)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: QUALITY })
				.toFile(output);

			const origKB = Math.round(
				(await sharp(input).metadata()).size / 1024,
			);
			const { size: outSize } = await sharp(output).metadata();
			const outKB = Math.round(outSize / 1024);
			console.log(`  ✓ ${file} (${origKB || "?"}KB) → ${name}.webp (${outKB || "?"}KB)`);
		} catch (err) {
			console.error(`  ✗ ${file}: ${err.message}`);
		}
	}

	console.log("Done!");
}

run();
