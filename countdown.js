// Function to calculate the countdown to Valentine's Day
function countdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const valentinesDay = new Date(`February 14, ${currentYear} 00:00:00`);
    
    const timeDifference = valentinesDay - now;
    
    if (timeDifference < 0) {
        document.getElementById("countdown-timer").innerText = "Happy Valentine's Day!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countdown every second
    setTimeout(countdown, 1000);
}

// Initialize the countdown when the page loads
window.onload = countdown;
