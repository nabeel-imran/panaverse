var famousQuotes = [
    {
        quote: "Stop acting so small. You are the universe in ecstatic motion.",
        author: "Rumi"
    },
];
function getRandomQuote(quotes) {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
var randomQuote = getRandomQuote(famousQuotes);
console.log("".concat(randomQuote.author, " once said, \"").concat(randomQuote.quote, "\""));
