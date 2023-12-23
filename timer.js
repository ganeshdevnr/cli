const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Determine the countdown length based on the command line argument
const lengthArg = process.argv[2]; // Command line argument for length
let countdown;
switch (lengthArg) {
  case "short":
    countdown = 60 * 15; // 15 minutes
    break;
  case "long":
    countdown = 60 * 45; // 45 minutes
    break;
  default:
    countdown = 60 * 30; // Default to 30 minutes
}

const startDate = new Date();
const startTime = formatTime(startDate);

const logDir = "C:\\github\\cli\\logs\\focus";
const logFile = path.join(logDir, `${formatDate(startDate)}.txt`);

ensureDirectoryExists(logDir);

let interval = setInterval(timerFunction, 1000);
let paused = false;
let pauseTime = 0;

// Set up the readline interface
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.on("keypress", (str, key) => {
  if (key.sequence === "p" && !paused) {
    pauseTimer();
  } else if (key.sequence === "r" && paused) {
    resumeTimer();
  } else if (key.sequence === "\u0003") {
    // This is Ctrl+C to stop the process
    process.exit();
  }
});

function timerFunction() {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${padTime(minutes)}:${padTime(seconds)}`);

  countdown--;

  if (countdown < 0) {
    finishTimer();
  }
}

function pauseTimer() {
  paused = true;
  pauseTime = countdown;
  clearInterval(interval);
  console.log('\nTimer is paused. Press "r" to resume.');
}

function resumeTimer() {
  paused = false;
  countdown = pauseTime;
  interval = setInterval(timerFunction, 1000);
  console.log("\nTimer is resumed.");
}

function padTime(time) {
  return String(time).padStart(2, "0");
}

function formatDate(date) {
  return `${date.getFullYear()}${padTime(date.getMonth() + 1)}${padTime(
    date.getDate()
  )}`;
}

function formatTime(date) {
  return `${formatDate(date)} ${date.toTimeString().substr(0, 8)}`;
}

function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

function logTime() {
  const endDate = new Date();
  const endTime = formatTime(endDate);

  fs.appendFileSync(logFile, `${startTime}, ${endTime}\n`);
}

// Handle clean exit
process.on("exit", () => {
  clearInterval(interval);
  process.stdin.removeAllListeners();
});

process.on("SIGINT", () => {
  process.exit();
});

function finishTimer() {
  clearInterval(interval);
  logTime();
  displayMessage();
  playEndSound();

  console.log("\nTimer done!\n");
}

function displayMessage() {
  const messageFile =
    "C:\\github\\cli\\assets\\timeout-message.txt";
  if (fs.existsSync(messageFile)) {
    const message = fs.readFileSync(messageFile, "utf8");

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      process.stdout.write(message[charIndex]);
      charIndex++;

      if (charIndex >= message.length) {
        clearInterval(typeInterval);
      }
    }, 50); // typing speed - 50ms per character
  } else {
    console.log("The timeout message file does not exist.");
    playEndSound(); // Play sound even if message file does not exist
  }
}

function playEndSound() {
  const playerCommand =
    '"C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe" "C:\\github\\cli\\assets\\timeout-message-v2.m4a"';

  exec(playerCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("Error playing the end sound:", error);
    }
    process.exit();
  });
}
