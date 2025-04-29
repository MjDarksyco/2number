function generateDailyNumber() {
    // Use the current date in IST as seed
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const today = new Date(now).setHours(0, 0, 0, 0);
    
    // Use date as seed for random number
    const seed = today / 1000;
    const random = Math.abs(Math.sin(seed) * 10000);
    return Math.floor(random);
}

function updateNumber() {
    const numberElement = document.getElementById('randomNumber');
    numberElement.textContent = generateDailyNumber();
    numberElement.classList.add('visible');
}

function checkAndUpdate() {
    const numberElement = document.getElementById('randomNumber');
    numberElement.classList.remove('visible');
    
    // Wait for animation to complete before showing new number
    setTimeout(updateNumber, 100);
}

// Initial update
checkAndUpdate();

// Check every minute if we need to update the number
setInterval(() => {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const currentDate = new Date(now);
    
    if (currentDate.getHours() === 0 && currentDate.getMinutes() === 0) {
        checkAndUpdate();
    }
}, 60000);
