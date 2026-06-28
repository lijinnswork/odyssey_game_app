import json

db_path = "processed_questions.json"
with open(db_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Update M2
m2_video = next((q for q in data if q.get('original_id') == 'chapter2-L1-INTRO-video'), None)
if m2_video:
    m2_video['videoUrl'] = "https://player.vimeo.com/video/1174760843"
else:
    print("M2 video node not found!")

# Update or Create M1
m1_video = next((q for q in data if q.get('original_id') == 'chapter1-L1-INTRO-video'), None)
if m1_video:
    m1_video['videoUrl'] = "https://player.vimeo.com/video/1174728387?h=7f16d9f753"
else:
    # Check if we need to create M1 intro nodes entirely
    print("M1 video node not found, creating it...")
    intro_nodes = [
        {
            "original_id": "chapter1-L1-INTRO",
            "type": "info_card",
            "title": "Module 1: Getting Started with AI",
            "subtitle": "AI Foundations",
            "text": "Welcome to Chapter 1! In this module, we will explore the foundations of AI and its potential in education. Let's start with an introduction.",
            "buttonText": "Watch Video",
            "xp": 0,
            "published": True
        },
        {
            "original_id": "chapter1-L1-INTRO-video",
            "type": "video",
            "title": "M1: Introduction",
            "videoUrl": "https://player.vimeo.com/video/1174728387?h=7f16d9f753",
            "text": "Watch this introduction to Module 1.",
            "xp": 15,
            "published": True
        }
    ]
    # Remove any old auto-generated intro if it exists
    data = [q for q in data if q.get('original_id') != 'chapter1-L1-INTRO']
    data = intro_nodes + data

with open(db_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)
print("Successfully updated M1 and M2 Introduction videos.")
