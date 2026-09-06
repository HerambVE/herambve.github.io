import urllib.request
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            attrs_dict = dict(attrs)
            if 'href' in attrs_dict:
                href = attrs_dict['href']
                if "projects" in href.lower():
                    print("Found anchor:", href)

url = 'https://herambve.github.io/personal0website/about/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        parser = MyHTMLParser()
        parser.feed(html)
except Exception as e:
    print("Error:", e)
