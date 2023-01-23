function generateQuote() {
    var quotes = [
    "You didn't come this far to only come this far",
    "Stop dreaming about your goals go and start working on them right now",
    "Never forget where you came from so that once you to see your goal you can look back and see how far you've come",
    'Everyday is a chance is it gonna be "one day" or "day one"',
    "Every step you take is one step closer to your dreams take it one step at a time don't focus on the whole staircase",
    "Time is limited so go out and live it to the fullest, live with no regrets",
    "Don't judge someone off their mistakes judge them off how they correct them",
    "Keep going bro I believe in you",
    "We are all broken, but that's how the light gets in",
    "Losing today is just another reason to win tomorrow",
    "A negative mind will never create a positive life",
    "Sometimes all you have is yourself. Love yourself, don't stop shining",
    "When it hurts observe life is trying to teach you something",
    "Life is not a problem to be solved, but a reality to be experienced",
    "You win some, you lose some, but you live to fight another day",
    "Life is about moments. Don't wait for them. create them",
    "Life isn't about waiting for the storm to pass, but learning to dance in the rain",
    "Life isn't a matter of holding good cards, but playing a poor hand well",
    "Everyone has a chapter they don't read out loud",
    "don't even do them like they do you, just disappear and do better",
    "People are going to doubt your potential. Don't let that person be you",
    "When we hit our lowest points we are open to the greatest changes",
    "A smooth sea has never made a skilled sailor",
    "Welcome what comes. Let go what goes",
    "Life is tough, but so are you",
    "Sacrifice what you are now for what you can become tomorrow",
    "The only person you are destined to become is the person you decide to be",
    "In order to love who your are, you cannot hate the experiences that shaped you",
    "You have to know where you've been to know where you're going",
    "You must learn to proceed without certainty",
    "If you want to fly, give up everything that's weighing you down",
    "Don't let the unknown stop you from making progress",
    "You got this keep going"
];
  
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
  
    var quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quote;
};