import urllib.request
url = 'https://herambve.github.io/personal0website/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        if "/research" in html:
            print("FOUND /research in HTML!")
            import re
            for m in re.finditer(r'.{0,50}/research.{0,50}', html):
                print(m.group(0).strip())
        else:
            print("NO /research IN HTML!")
except Exception as e:
    print("Error:", e)
