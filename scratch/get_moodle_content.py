import requests
from bs4 import BeautifulSoup
import re

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

course_links = {}
for a in dash_soup.find_all('a', href=True):
    if '/course/view.php?id=' in a['href']:
        course_links[a.text.strip()] = a['href']

for name, url in course_links.items():
    if name == 'Fundamentals of AI for Educators':
        print(f"\nFetching detailed content for course: {name}")
        course_response = session.get(url)
        c_soup = BeautifulSoup(course_response.text, 'html.parser')
        
        # Look for section wrappers
        sections = c_soup.find_all(['li', 'div'], class_=re.compile(r'(section\s+main|content)'))
        for sec in sections:
            sec_title = sec.find(['h3', 'h4', 'h2'])
            title_text = sec_title.text.strip() if sec_title else None
            
            # Skip empty or nav sections
            if not title_text or title_text == "Unnamed Section":
                continue
                
            print(f"\n  Section: {title_text}")
            
            # Find all links that look like activities
            for a in sec.find_all('a', href=True):
                # We want links to actual module resources
                if '/mod/' in a['href']:
                    text = a.text.strip()
                    # clean up excessive whitespace
                    text = re.sub(r'\s+', ' ', text)
                    if text:
                        print(f"    - {text}")
        break
