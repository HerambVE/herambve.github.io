import re

files = {
    'src/content/projects/semantic-drift-media-engine.mdx': 'https://github.com/HerambVE/sdme',
    'src/content/projects/mental-health-chatbot.mdx': 'https://github.com/HerambVE/chat-bot',
    'src/content/projects/hospital-patient-footfall-prediction.mdx': 'https://github.com/HerambVE/hospital0ftfal'
}

for fpath, url in files.items():
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert codeUrl into frontmatter
    if 'codeUrl:' not in content:
        content = re.sub(r'(date:.*?\n)', rf'\1codeUrl: "{url}"\n', content, count=1)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
print('Done!')
