# Movie Quote Generator

This project is a simple JavaScript program that generates a random movie quote each time it is run. The quote is accompanied by the character who said it and the movie it is from.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)

## Features

- Generates a random movie quote.
- Displays the character who said the quote.
- Displays the movie the quote is from.

## Installation

No installation is required for this project. Simply copy the code into a JavaScript file and run it in a JavaScript environment.

## Usage

1. Copy the code into a file - ex: `quoteGenerator.js` 
2. Run the file in a JavaScript environment, such as Node.js or a browser console.

```sh
node quoteGenerator.js
```

## Code Explanation
The program consists of three main parts:

1. Arrays containing movie quotes, characters, and movie titles.
2. A function to generate a random quote.
3. A call to the function to display the generated quote.

### Arrays
- movieQuotes: Contains a list of famous movie quotes.
- characters: Contains the names of characters who said the corresponding quotes.
- movies: Contains the names of movies the corresponding quotes are from.

### Function: generateQuote
This function generates a random quote by:
- Generating a random index.
- Using the random index to select a quote, character, and movie from the arrays.
- Returning a string that combines the quote, character, and movie.
