import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    { file: 'sliderbg.png', quality: 85, type: 'png' },
    { file: 'painting1.png', quality: 85, type: 'png' },
    { file: 'tiger.png', quality: 85, type: 'png' },
    { file: 'gitag.png', quality: 85, type: 'png' },
    { file: '12.jpg', quality: 85, type: 'jpg' },
    { file: 'logo.jpg', quality: 85, type: 'jpg' },
    { file: 'medha-ai.png', quality: 85, type: 'png' },
    { file: 'cosmic-background.png', quality: 85, type: 'png' },
];

async function optimizeImage(filename, quality, type) {
    const inputPath = path.join(__dirname, 'public', filename);
    const tempPath = path.join(__dirname, 'public', `temp_${filename}`);

    if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${filename} - file not found`);
        return;
    }

    const statsBefore = fs.statSync(inputPath);
    const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2);

    try {
        console.log(`🔄 Optimizing ${filename} (${sizeBefore} MB)...`);

        if (type === 'png') {
            await sharp(inputPath)
                .png({ quality, compressionLevel: 9, effort: 10 })
                .toFile(tempPath);
        } else {
            await sharp(inputPath)
                .jpeg({ quality, mozjpeg: true })
                .toFile(tempPath);
        }

        const statsAfter = fs.statSync(tempPath);
        const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
        const savings = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

        // Replace original with optimized
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);

        console.log(`✅ ${filename}: ${sizeBefore} MB → ${sizeAfter} MB (${savings}% smaller)`);
    } catch (error) {
        console.error(`❌ Error optimizing ${filename}:`, error.message);
        // Clean up temp file if it exists
        if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
        }
    }
}

async function main() {
    console.log('🚀 Starting image optimization...\n');

    for (const img of images) {
        await optimizeImage(img.file, img.quality, img.type);
    }

    console.log('\n✅ Image optimization complete!');
    console.log('📊 Refresh your browser to see the results.');
    console.log('🔄 If any image looks bad, restore from public/originals/');
}

main().catch(console.error);
