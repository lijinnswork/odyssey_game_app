import json
import os

db_path = "processed_questions.json"

if os.path.exists(db_path):
    with open(db_path, "r", encoding="utf-8") as f:
        data = json.load(f)
else:
    data = []

# Check if it already exists
if any(q.get("original_id") == "chapter2-L1-INTRO" for q in data):
    print("M2 Introduction already exists.")
else:
    intro_nodes = [
        {
            "original_id": "chapter2-L1-INTRO",
            "type": "info_card",
            "title": "Module 2: Use Cases",
            "subtitle": "Real-world Applications",
            "text": "Welcome to Chapter 2! In this module, we will explore how AI is being applied in education and other sectors. Let's watch an introduction.",
            "buttonText": "Watch Video",
            "xp": 0,
            "published": True
        },
        {
            "original_id": "chapter2-L1-INTRO-video",
            "type": "video",
            "title": "M2: Introduction",
            "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",  # Placeholder
            "text": "Watch this introduction to Module 2.",
            "xp": 15,
            "published": True
        }
    ]
    data = intro_nodes + data
    
    with open(db_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    print("Successfully added M2 Introduction nodes.")
