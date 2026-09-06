import urllib.request
url = 'https://herambve.github.io/personal0website/projects/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print("Downloaded HTML length:", len(html))
        if "github.com/HerambVE/sdme" in html:
            print("FOUND GITHUB LINK FOR SDME!")
        else:
            print("NO GITHUB LINK FOR SDME!")
            if "semantic-drift" in html:
                print("Found semantic-drift text, but no github link.")
except Exception as e:
    print("Error:", e)
