document.body.innerHTML = `
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
}

header {
    padding: 20px;
    text-align: center;
    background: linear-gradient(90deg, #2563eb, #9333ea);
    font-size: 28px;
    font-weight: bold;
}

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

<header>🎮 Unblocked Games Hub</header>

<div class="search">
    <input type="text" placeholder="Search games..." onkeyup="searchGames(this.value)">
</div>

<div class="grid">

    <!-- Minecraft -->
    <div class="card" onclick="openGame('https://WazKuz.github.io/mine')">
        <img src="https://img.redbull.com/images/c_crop,w_2640,h_1320,x_190,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2025/8/11/dcusojkfgapu4zxe3gtb/minecraft-landscape">
        <h3>Minecraft</h3>
    </div>

    <!-- Among Us -->
    <div class="card" onclick="openGame('https://example.com/amongus')">
        <img src="https://media.wired.com/photos/620581d7c228dc232641feaa/191:100/w_1280,c_limit/Games-Innersloth-Among-Us-Key-Art.jpg">
        <h3>Among Us</h3>
    </div>

    <!-- Geometry Dash -->
    <div class="card" onclick="openGame('https://WazKuz.github.io/geo')">
        <img src="https://images.squarespace-cdn.com/content/v1/5e3bb512203ccf3516032e33/a0e8f281-94c0-47c2-a96c-b729daccf938/CRClassic_Banner_2000x1500.png">
        <h3>Geometry Dash</h3>
    </div>

    <!-- Subway Surfers -->
    <div class="card" onclick="openGame('https://example.com/subway')">
        <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/9e89c8fe71f2e1179437b6b6d7e3a5a1/subway-surfers.png">
        <h3>Subway Surfers</h3>
    </div>

    <!-- Slope -->
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
