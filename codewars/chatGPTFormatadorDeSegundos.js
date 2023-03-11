function formatDuration(seconds) {
    if (seconds === 0) {
      return "now";
    }
    
    const time = {
      year: Math.floor(seconds / (60 * 60 * 24 * 365)),
      day: Math.floor(seconds / (60 * 60 * 24)) % 365,
      hour: Math.floor(seconds / (60 * 60)) % 24,
      minute: Math.floor(seconds / 60) % 60,
      second: seconds % 60
    };
    console.log(time.hour)
    const timeString = [];
    
    for (const [unit, value] of Object.entries(time)) {
      if (value !== 0) {
        const plural = value > 1 ? "s" : "";
        timeString.push(`${value} ${unit}${plural}`);
      }
    }
    
    if (timeString.length === 1) {
      return timeString[0];
    } else if (timeString.length === 2) {
      return timeString.join(" and ");
    } else {
      return `${timeString.slice(0, -1).join(", ")} and ${timeString.slice(-1)}`;
    }
  }
  
  
  console.log(formatDuration(93986))  