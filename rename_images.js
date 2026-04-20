const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');

const renames = [
    { old: 'Gemini_Generated_Image_85iftx85iftx85if.png', new: 'hero-home.png' },
    { old: 'Gemini_Generated_Image_85iftx85iftx85if (1).png', new: 'support-hands.png' },
    { old: 'Gemini_Generated_Image_85iftx85iftx85if (2).png', new: 'moving-van.png' },
    { old: 'Gemini_Generated_Image_85iftx85iftx85if (3).png', new: 'donations.png' },
    { old: 'Gemini_Generated_Image_85iftx85iftx85if (4).png', new: 'painting.png' },
    { old: 'Gemini_Generated_Image_85iftx85iftx85if (5).png', new: 'history-silhouette.png' }
];

renames.forEach(r => {
    const oldPath = path.join(publicDir, r.old);
    const newPath = path.join(publicDir, r.new);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${r.old} to ${r.new}`);
    } else {
        console.log(`File not found: ${r.old}`);
    }
});
