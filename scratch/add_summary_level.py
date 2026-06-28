import requests
import json
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def main():
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Content-Type": "application/json"
    }
    
    # 1. Fetch current live database content
    print("Fetching current live database content...")
    get_url = "https://game-iimbx.netlify.app/.netlify/functions/get-course-content"
    r_get = requests.get(get_url, headers=headers, timeout=15)
    if r_get.status_code != 200:
        print(f"Error fetching: {r_get.status_code}")
        return
        
    payload = r_get.json()
    print("Successfully fetched live database content.")
    
    chapters = payload.get("chapters", [])
    if len(chapters) == 0:
        print("Error: chapters list is empty.")
        return
        
    chapter1 = chapters[0]
    print(f"Modifying chapter: {chapter1.get('title')}")
    
    levels = chapter1.get("levels", [])
    
    # Check if c1-l8 is already added
    has_l8 = any(lvl.get("id") == "c1-l8" for lvl in levels)
    if has_l8:
        print("Level c1-l8 (M1 Summary) is already present in the chapters array. We will overwrite/update it.")
        levels = [lvl for lvl in levels if lvl.get("id") != "c1-l8"]
    
    # Define level 8 pool
    level8_pool = [
        {
            "xp": 50,
            "text": "",
            "type": "video",
            "title": "M1 Summary",
            "topic": "Recap",
            "duration": "2 mins",
            "question": "",
            "subtitle": "Watch the recap of Module 1",
            "videoUrl": "https://player.vimeo.com/video/1174724080?h=c29f063c72",
            "hideTopic": False,
            "published": True,
            "takeaways": [
                "Reflect on what we've covered in Module 1: Getting started with AI.",
                "Trace key milestones and the evolution of technology.",
                "Recognize the relevance of AI for educators.",
                "Understand the requirements for responsible and ethical use of AI."
            ],
            "difficulty": "Beginner",
            "description": "As we come to the end of module one, let's take a moment to reflect on what we've covered, including AI foundations, history, the future of AI, relevance for educators, and ethics.",
            "original_id": "chapter1-L8-INTRO-1",
            "hideDuration": False,
            "hideTakeaways": False,
            "hideDifficulty": False,
            "hideDescription": False
        }
    ]
    
    # Construct questions list in levels array format:
    level8_questions = [
        {
            "id": "chapter1-L8-INTRO-1",
            "title": "M1 Summary",
            "activities": [level8_pool[0]]
        }
    ]
    
    # Define level 8 object
    level8_obj = {
        "id": "c1-l8",
        "title": "M1 Summary",
        "description": "Reflect and recap on Module 1: Getting started with AI.",
        "questions": level8_questions
    }
    
    # Append to levels array
    levels.append(level8_obj)
    chapter1["levels"] = levels
    
    # Modify pools
    pools = payload.get("pools", {})
    pools["chapter1Level8Questions"] = level8_pool
    
    # Update adminUser name to admin.iimbx or keeping the one from DB
    payload["adminUser"] = "lijinns"
    
    # 2. Save payload back to Netlify/Neon DB
    print("Saving updated course content...")
    save_url = "https://game-iimbx.netlify.app/.netlify/functions/save-course-content"
    
    r_save = requests.post(save_url, json=payload, headers=headers, timeout=20)
    print("Save Response Status:", r_save.status_code)
    try:
        res_json = r_save.json()
        print("Save Response JSON:", res_json)
    except Exception as e:
        print("Save Response Text:", r_save.text)

if __name__ == "__main__":
    main()
