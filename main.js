//array of quotes
const movieQuotes = [
    "May the Force be with you.",
    "I'll be back.",
    "Here's looking at you, kid.",
    "There's no place like home.",
    "Elementary, my dear Watson.",
    "A martini. Shaken, not stirred.",
    "Keep your friends close, but your enemies closer.",
    "My precious",
    "It's alive! It's alive!",
];

//array of characters whom quote is from
const characters = [
    "Obi-Wan Kenobi",
    "The Terminator",
    "Rick Blaine",
    "Dorothy", 
    "Sherlock Holmes",
    "James Bond",
    "Michael Corleone",
    "Gollum",
    "Dr. Frankenstein",
];

//array of movies where quotes & characters are from
const movies = [
    "Star Wars",
    "The Terminator",
    "Casablanca",
    "The Wizard of Oz",
    "Sherlock Holmes",
    "James Bond",
    "The Godfather",
    "The Lord of the Rings",
    "Frankenstein",
];

//function that picks random index and pairs movie, quote and characters together
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * movieQuotes.length);
    const quote = movieQuotes[randomIndex];
    const character = characters[randomIndex];
    const movie = movies[randomIndex];
    return `${quote} - ${character} from ${movie}`;
}

console.log(generateQuote());    
