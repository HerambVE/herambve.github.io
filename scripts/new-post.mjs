import fs from 'fs';
import path from 'path';

const type = process.argv[2];
const title = process.argv[3];

if (!type || !['blog', 'weekly', 'project'].includes(type)) {
  console.log("Usage: node scripts/new-post.mjs [blog|weekly|project] \"Your Title\"");
  process.exit(1);
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

let filepath, content;

if (type === 'blog') {
  if (!title) {
    console.log("Error: Blog needs a title. e.g. node scripts/new-post.mjs blog \"My New Post\"");
    process.exit(1);
  }
  const slug = slugify(title);
  filepath = path.join('src', 'content', 'blog', `${slug}.mdx`);
  content = `---
title: "${title}"
description: "A short description of this post..."
pubDate: ${today}
draft: true
---

Write your blog post here...
`;
} else if (type === 'weekly') {
  // calculate current week number
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  var currentWeek = Math.ceil(days / 7);
  
  const yearDir = path.join('src', 'content', 'weekly', currentDate.getFullYear().toString());
  if (!fs.existsSync(yearDir)) {
    fs.mkdirSync(yearDir, { recursive: true });
  }
  
  filepath = path.join(yearDir, `week-${currentWeek}.mdx`);
  content = `---
description: "Brief summary of the week"
date: ${today}
week: ${currentWeek}
dateRange: "Monday - Sunday"
draft: true
---

Write your weekly update here...
`;
} else if (type === 'project') {
  if (!title) {
    console.log("Error: Project needs a title.");
    process.exit(1);
  }
  const slug = slugify(title);
  filepath = path.join('src', 'content', 'projects', `${slug}.mdx`);
  content = `---
title: "${title}"
description: "A short description of this project."
date: ${today}
draft: true
# Optional fields:
# codeUrl: "https://github.com/HerambVE/..."
# keywords: ["AI", "React"]
---

Write your project description here...
`;
}

if (fs.existsSync(filepath)) {
  console.log(`Error: File already exists at ${filepath}`);
  process.exit(1);
}

fs.writeFileSync(filepath, content, 'utf8');
console.log(`\x1b[32mSuccess! Created new ${type} post at:\x1b[0m ${filepath}`);
console.log(`Open the file in your editor, change draft to 'false' when ready, and start writing!`);
