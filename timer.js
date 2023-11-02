const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

let countdown = 10; // 30 minutes in seconds

// Get the start time
const startDate = new Date();
const startTime = `${startDate.getFullYear()}${String(
  startDate.getMonth() + 1
).padStart(2, "0")}${String(startDate.getDate()).padStart(2, "0")} ${startDate
  .toTimeString()
  .substr(0, 8)}`;

// Define the log file path
const logDir = "C:\\Users\\ganesh.nr\\Documents\\Batch\\logs\\focus";
const logFile = path.join(
  logDir,
  `${startDate.getFullYear()}${String(startDate.getMonth() + 1).padStart(
    2,
    "0"
  )}${String(startDate.getDate()).padStart(2, "0")}.txt`
);

// Create the log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const interval = setInterval(() => {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  );

  countdown--;

  if (countdown < 0) {
    clearInterval(interval);

    // Get the end time
    const endDate = new Date();
    const endTime = `${endDate.getFullYear()}${String(
      endDate.getMonth() + 1
    ).padStart(2, "0")}${String(endDate.getDate()).padStart(2, "0")} ${endDate
      .toTimeString()
      .substr(0, 8)}`;

    // Log the start and end time
    fs.appendFileSync(logFile, `${startTime}, ${endTime}\n`);

    // Run the media player
    exec(
      '"C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe" "C:\\Users\\ganesh.nr\\Documents\\Batch\\assets\\timeout-message-v2.m4a"'
    );

    console.log("\nTimer done!");
  }
}, 1000);
