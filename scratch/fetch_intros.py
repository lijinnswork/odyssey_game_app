import requests
from bs4 import BeautifulSoup
import re
import json

session = requests.Session()
login_url = "https://community.sangamdlc.org/login/index.php"

response = session.get(login_url)
soup = BeautifulSoup(response.text, 'html.parser')
token_input = soup.find('input', {'name': 'logintoken'})
if not token_input:
    print("Could not find login token!")
    exit(1)
logintoken = token_input['value']

payload = {
    'username': 'student01',
    'password': 'Learning@2025',
    'logintoken': logintoken
}
session.post(login_url, data=payload)

dashboard_url = "https://community.sangamdlc.org/my/"
dash_response = session.get(dashboard_url)
dash_soup = BeautifulSoup(dash_response.text, 'html.parser')

course_url = None
for a in dash_soup.find_all('a', href=True):
    if '/course/view.php?id=' in a['href'] and 'Fundamentals of AI for Educators' in a.text:
        course_url = a['href']
        break

if not course_url:
    print("Course not found!")
    exit(1)

course_response = session.get(course_url)
c_soup = BeautifulSoup(course_response.text, 'html.parser')

intro_links = {}
for a in c_soup.find_all('a', href=True):
    if '/mod/' in a['href']:
        text = re.sub(r'\s+', ' ', a.text.strip())
        if 'M1: Introduction' in text:
            intro_links['M1'] = a['href']
        elif 'M2: Introduction' in text:
            intro_links['M2'] = a['href']

print("Found links:", intro_links)

for mod, link in intro_links.items():
    print(f"\nFetching {mod} Introduction...")
    res = session.get(link)
    mod_soup = BeautifulSoup(res.text, 'html.parser')
    
    # Try to find an iframe (often used for videos like YouTube or Vimeo)
    iframe = mod_soup.find('iframe')
    if iframe:
        print(f"  {mod} Video URL:", iframe.get('src'))
    else:
        # Try finding video tag
        video = mod_soup.find('video')
        if video and video.find('source'):
            print(f"  {mod} Video URL:", video.find('source').get('src'))
        else:
            print(f"  No iframe or video tag found for {mod}. Checking content text...")
            content_div = mod_soup.find('div', role='main') or mod_soup.find('div', class_='box py-3 generalbox center clearfix')
            if content_div:
                print("  Content snippet:", content_div.text.strip()[:200])

