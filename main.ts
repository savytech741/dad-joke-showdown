const joke =
  "Why did the scarecrow win an award? Because he was outstanding in his field.";

// A dad joke is one line and lands fast: at most 200 characters, no line breaks.
if (joke.length > 200 || joke.includes("\n")) {
  throw new Error("Joke must be a single line of at most 200 characters.");
}

console.log(joke);
