import { getCollection } from 'astro:content';
const projects = await getCollection('projects');
console.log(projects.map(p => p.id + ': ' + p.data.codeUrl));
