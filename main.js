const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote:
        "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde "
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "So many books, so little time",
      author: "Frank Zappa"
    },
    {
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
      author: "Bernard M. Baruch"
    },
    {
      quote: "A room without books is like a body without a soul",
      author: "Marcus Tullius Cicero"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
  ];


  const button = document.querySelector('button');
  button.addEventListener('click', quoteGenerator);

  function quoteGenerator() {
    let index = Math.floor(Math.random() * quotes.length);

    document.querySelector('h3').textContent = quotes[index].quote;
    document.querySelector('p').textContent = quotes[index].author;
  }
