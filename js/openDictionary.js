const fs = require("fs").promises;
const { exec } = require("child_process");
const path = require("path");

const word = process.argv[2];
const logDir = path.join(
  "C:",
  "Github",
  "CLI",
  "logs",
  "dictionary"
);
const logFile = path.join(logDir, "words.json");

async function openDictionary(word) {
  if (!word) {
    console.log("You must provide a word as a parameter.");
    return;
  }

  await ensureLogDirExists(logDir);
  const url = `https://dictionary.cambridge.org/dictionary/english/${word}`;

  try {
    exec(`start chrome "${url}"`);
    await logWord(word, logFile);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

async function ensureLogDirExists(directory) {
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") throw err; // Ignore the error if the directory already exists
  }
}

async function logWord(word, file) {
  try {
    let words = [];
    try {
      const data = await fs.readFile(file, "utf8");
      words = JSON.parse(data);
    } catch (err) {
      if (err.code !== "ENOENT") throw err; // Ignore error if the file does not exist
    }
    words.push(word);
    await fs.writeFile(file, JSON.stringify(words, null, 2));
    console.log(`Logged word: ${word}`);
  } catch (err) {
    throw err;
  }
}

openDictionary(word).catch((err) => {
  console.error(`Failed to open dictionary or log word: ${err}`);
});
