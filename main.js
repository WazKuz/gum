document.body.innerHTML = `
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
}

/* HEADER TICKER */
header {
    background: #020617;
    overflow: hidden;
    position: relative;
    padding: 15px 0;
    border-bottom: 2px solid #2563eb;
}

.ticker {
    white-space: nowrap;
    overflow: hidden;
}

.ticker span {
    display: inline-block;
    padding-left: 100%;
    animation: scrollTicker 15s linear infinite;
    font-weight: bold;
    font-size: 18px;
    color: #00f5ff;
}

@keyframes scrollTicker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

/* SEARCH */
.search {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.search input {
    width: 60%;
    padding: 12px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
}

/* GRID */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: #1e293b;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card h3 {
    padding: 10px;
    text-align: center;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    justify-content: center;
    align-items: center;
}

.modal iframe {
    width: 80%;
    height: 80%;
    border: none;
}

.close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 30px;
    cursor: pointer;
}
</style>

<header>
    <div class="ticker">
        <span id="tickerText">Loading...</span>
    </div>
</header>

<div class="search">
    <input type="text" placeholder="Search games..." onkeyup="searchGames(this.value)">
</div>

<div class="grid">

    <div class="card" onclick="openGame('https://WazKuz.github.io/mine')">
        <img src="https://i.pinimg.com/736x/5f/7b/a4/5f7ba42baff0614371954c9625d52cc4.jpg">
        <h3>Candy Crush Saga</h3>
    </div>

    <div class="card" onclick="openGame('https://example.com/amongus')">
        <img src="https://media.wired.com/photos/620581d7c228dc232641feaa/191:100/w_1280,c_limit/Games-Innersloth-Among-Us-Key-Art.jpg">
        <h3>Among Us</h3>
    </div>

    <div class="card" onclick="openGame('https://WazKuz.github.io/geo')">
        <img src="https://images.squarespace-cdn.com/content/v1/5e3bb512203ccf3516032e33/a0e8f281-94c0-47c2-a96c-b729daccf938/CRClassic_Banner_2000x1500.png">
        <h3>Crossy Road</h3>
    </div>

    <div class="card" onclick="openGame('https://WazKuz.github.io/dash')">
        <img src="https://images.unsplash.com/photo-1654457066813-234e82a5e3e0">
        <h3>Chess</h3>
    </div>

    <div class="card" onclick="openGame('https://example.com/slope')">
        <img src="https://slopegame-online.com/slope.webp">
        <h3>Slope</h3>
    </div>

</div>

<div class="modal" id="gameModal">
    <span class="close" onclick="closeGame()">✖</span>
    <iframe id="gameFrame"></iframe>
</div>
`;

/* GAME FUNCTIONS */
window.openGame = function(url) {
    document.getElementById("gameModal").style.display = "flex";
    document.getElementById("gameFrame").src = url;
}

window.closeGame = function() {
    document.getElementById("gameModal").style.display = "none";
    document.getElementById("gameFrame").src = "";
}

window.searchGames = function(query) {
    let cards = document.querySelectorAll(".card");
    query = query.toLowerCase();

    cards.forEach(card => {
        let title = card.innerText.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
    });
}

/* --- PLAYTIME TRACKER --- */
let startTime = Date.now();
let savedTime = parseInt(localStorage.getItem("playtime") || "0");

setInterval(() => {
    let total = savedTime + (Date.now() - startTime);
    localStorage.setItem("playtime", total);
}, 1000);

function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return \`\${h}h \${m}m \${s}s\`;
}

/* --- SESSION COUNTER --- */
let sessions = parseInt(localStorage.getItem("sessions") || "0") + 1;
localStorage.setItem("sessions", sessions);

/* --- LIVE PLAYER COUNT (SIMULATED BUT SMOOTH) --- */
let players = 120 + Math.floor(Math.random() * 30);

setInterval(() => {
    players += Math.floor(Math.random() * 5 - 2); // small fluctuation
    if (players < 80) players = 80;
    if (players > 200) players = 200;
}, 2000);

/* --- TICKER SYSTEM --- */
const ticker = document.getElementById("tickerText");

function updateTicker() {
    let playtime = formatTime(savedTime + (Date.now() - startTime));

    let messages = [
        "🔥 Welcome to Unblocked Games Hub",
        \`👥 Players Online: \${players}\`,
        \`⏱️ Your Playtime: \${playtime}\`,
        \`🎮 Sessions Played: \${sessions}\`,
        "🚀 New games added weekly",
        "💡 Try every game for the best experience"
    ];

    ticker.textContent = messages[Math.floor(Math.random() * messages.length)];
}

setInterval(updateTicker, 3000);
updateTicker();
