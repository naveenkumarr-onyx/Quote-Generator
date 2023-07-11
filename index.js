function generate() {
  const quotes = 
    {
      "-Thomas Edison":
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "-Yogi Berra": "You can observe a lot just by watching.",
      "-Abraham Lincoln": "A house divided against itself cannot stand.",
      "-Johann Wolfgangvon Goethe":
        "Difficulties increase the nearer we get to the goal.",
      "-Byron Pulsifer": "Fate is in your hands and no one elses",
      "-Lao Tzu": "Be the chief but never the lord.",
      "-Carl Sandburg": "Nothing happens unless first we dream.",
    }

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author]
  document.getElementById("quote").innerHTML=quote;
  document.getElementById("author").innerHTML=author;
}

