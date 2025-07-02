function displayRealisticClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format time parts with leading zero
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  const time = `${h}:${m}:${s} ${ampm}`;

  // Format date
  const date = now.toDateString(); // Example: "Tue Jul 02 2025"

  // Clear and print clock
  console.clear();
  console.log("📅 " + date);
  console.log("=========================");
  console.log("        DIGITAL CLOCK");
  console.log("=========================");
  console.log(`          ${time}`);
  console.log("=========================");
}

// Update every second
setInterval(displayRealisticClock, 1000);
