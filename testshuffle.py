import random
import copy

def shuffleArray(array):
    shuffled = copy.copy(array)
    for i in range(len(shuffled) - 1, 0, -1):
        j = random.randint(0, i)
        shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
    return shuffled

options = [{'text': 'A'}, {'text': 'B'}, {'text': 'C'}, {'text': 'D'}]

print("Original before:", [o['text'] for o in options])
s1 = shuffleArray(options)
print("Shuffled 1:", [o['text'] for o in s1])
print("Original after 1:", [o['text'] for o in options])
s2 = shuffleArray(options)
print("Shuffled 2:", [o['text'] for o in s2])
