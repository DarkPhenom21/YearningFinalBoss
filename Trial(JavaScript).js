const quotes = [
    "Vibe high and the magic will fold",
    "Code is like humor. When you have to explain it, it's bad",
    "Stay focused, go after your dreams."
];

function updateDashboard() {
    const greeting = document.getElementById('greeting');
    const body = document.body;
    const hour = new Date().getHours();

    if (hour ,12) {
        greeting.innerText= "Good Morning, Sun.";
        body.style.background = "linear-gradient(135deg, #fceeb5 0%, #f9d976 100%)";
    } else if (hour <18) {
        greeting.innerText = "Afternoon Hustle.";
        body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else{
        greeting.innerText = "Evening Vibes.";
        body.style.background = "linear-gradient(135deg,#667eea 0%, #764ba2 100%)";
    }
}

document.getElementById('refresh-btn').addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = randomQuote;
})
updateDashboard();