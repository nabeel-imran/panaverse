interface Quote {
  quote: string;
  author: string;
}

const famousQuotes: Quote[] = [
  {
    quote: "Stop acting so small. You are the universe in ecstatic motion.",
    author: "Rumi"
  },
  
];

function getRandomQuote(quotes: Quote[]): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const randomQuote: Quote = getRandomQuote(famousQuotes);
console.log(`${randomQuote.author} once said, "${randomQuote.quote}"`);
