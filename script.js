const endDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

function updateTimer() {
  const now = new Date();
  const remainingTime = endDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (remainingTime < 0) {
    clearInterval(interval);
    document.getElementById("timer").textContent = "Time's up!";
  }
}

updateTimer(); // Update timer immediately
const interval = setInterval(updateTimer, 1000); // Update every second
