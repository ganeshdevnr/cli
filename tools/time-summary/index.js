const fs = require("fs");
const path = require("path");

// Get repository root (two levels up from tools/time-summary/)
const repoRoot = path.join(__dirname, "..", "..");

// Format date as YYYYMMDD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

// Parse time string "YYYYMMDD HH:MM:SS"
function parseTime(timeStr) {
  const parts = timeStr.trim().split(" ");
  if (parts.length !== 2) return null;

  const timeParts = parts[1].split(":");
  if (timeParts.length !== 3) return null;

  return {
    hours: parseInt(timeParts[0], 10),
    minutes: parseInt(timeParts[1], 10),
    seconds: parseInt(timeParts[2], 10)
  };
}

// Calculate time difference in seconds
function getTimeDifferenceInSeconds(start, end) {
  const startSeconds = start.hours * 3600 + start.minutes * 60 + start.seconds;
  const endSeconds = end.hours * 3600 + end.minutes * 60 + end.seconds;
  return endSeconds - startSeconds;
}

// Format seconds as "X hours Y minutes Z seconds"
function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

// Main function
function showSummary() {
  const today = new Date();
  const dateStr = formatDate(today);
  const logFile = path.join(repoRoot, "logs", "focus", `${dateStr}.txt`);

  // Check if log file exists
  if (!fs.existsSync(logFile)) {
    console.log(`\nNo focus sessions found for today (${dateStr}).`);
    console.log(`Expected log file: ${logFile}`);
    console.log(`\nStart a focus session with: bin\\focus.bat\n`);
    return;
  }

  // Read and parse log file
  const content = fs.readFileSync(logFile, "utf8");
  const lines = content.trim().split("\n").filter(line => line.trim());

  if (lines.length === 0) {
    console.log(`\nNo focus sessions found for today (${dateStr}).\n`);
    return;
  }

  console.log(`\n📊 Focus Summary for ${dateStr}`);
  console.log("================================\n");

  let totalSeconds = 0;
  let sessionCount = 0;

  lines.forEach((line, index) => {
    const [startStr, endStr] = line.split(",").map(s => s.trim());

    if (!startStr || !endStr) {
      console.log(`⚠️  Skipping invalid line ${index + 1}`);
      return;
    }

    const start = parseTime(startStr);
    const end = parseTime(endStr);

    if (!start || !end) {
      console.log(`⚠️  Skipping invalid time format on line ${index + 1}`);
      return;
    }

    const diffSeconds = getTimeDifferenceInSeconds(start, end);
    const { hours: h, minutes: m, seconds: s } = formatDuration(diffSeconds);

    totalSeconds += diffSeconds;
    sessionCount++;

    // Format session duration
    let sessionTime = "";
    if (h > 0) sessionTime += `${h} hour${h !== 1 ? 's' : ''} `;
    if (m > 0 || h > 0) sessionTime += `${m} minute${m !== 1 ? 's' : ''} `;
    sessionTime += `${s} second${s !== 1 ? 's' : ''}`;

    console.log(`Session ${sessionCount}: ${sessionTime.trim()}`);
  });

  const { hours, minutes, seconds } = formatDuration(totalSeconds);

  console.log("\n================================");
  console.log(`Total Sessions: ${sessionCount}`);

  // Format total time
  let totalTime = "";
  if (hours > 0) totalTime += `${hours} hour${hours !== 1 ? 's' : ''} `;
  if (minutes > 0 || hours > 0) totalTime += `${minutes} minute${minutes !== 1 ? 's' : ''} `;
  totalTime += `${seconds} second${seconds !== 1 ? 's' : ''}`;

  console.log(`Total Time: ${totalTime.trim()}`);
  console.log("================================\n");
}

// Run the summary
showSummary();
