import random
import time

question = input("Please ask me a Yes/No style question ")

# randomize the thinking time
print("Thinking...")
time.sleep(random.randint(0, 5))


# neutral responses
one = random.choice([
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again,"
    ])

# positive responses
two = random.choice([
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely,"
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    ])

# negative responses
three = random.choice([
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    ])
# fun responses
four = random.choice([
    "I dropped the ball.  Try again",
    "Say that again?",
    "Huh?",
    "Why are you asking a computer program?",
    ])

# print all this hard work
print(random.choice([one, two, three, four]))
