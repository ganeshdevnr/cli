const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

let countdown = 60 * 30; // Just using 10 seconds for testing, you can change it back to 30 mins

const startDate = new Date();
const startTime = `${startDate.getFullYear()}${String(
  startDate.getMonth() + 1
).padStart(2, "0")}${String(startDate.getDate()).padStart(2, "0")} ${startDate
  .toTimeString()
  .substr(0, 8)}`;

const logDir = "C:\\Users\\ganesh.nr\\Documents\\Batch\\logs\\focus";
const logFile = path.join(
  logDir,
  `${startDate.getFullYear()}${String(startDate.getMonth() + 1).padStart(
    2,
    "0"
  )}${String(startDate.getDate()).padStart(2, "0")}.txt`
);

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

    const endDate = new Date();
    const endTime = `${endDate.getFullYear()}${String(
      endDate.getMonth() + 1
    ).padStart(2, "0")}${String(endDate.getDate()).padStart(2, "0")} ${endDate
      .toTimeString()
      .substr(0, 8)}`;

    fs.appendFileSync(logFile, `${startTime}, ${endTime}\n`);

    console.log("\nTimer done!\n");

    // Read and "type" the message from the text file
    const messageFile =
      "C:\\Users\\ganesh.nr\\Documents\\Batch\\assets\\timeout-message.txt";
    const message = fs.readFileSync(messageFile, "utf8");

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      process.stdout.write(message[charIndex]);
      charIndex++;

      if (charIndex >= message.length) {
        clearInterval(typeInterval);
      }
    }, 50); // typing speed - 100ms per character

    // Run the media player
    exec(
      '"C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe" "C:\\Users\\ganesh.nr\\Documents\\Batch\\assets\\timeout-message-v2.m4a"'
    );
  }
}, 1000);
