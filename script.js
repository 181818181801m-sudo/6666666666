// script.js
let score = parseInt(localStorage.getItem('balance')) || 0;

function navTo(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active', 'd-flex'));
    document.querySelectorAll('.page').forEach(p => p.classList.add('d-none'));
    
    const target = document.getElementById(id);
    target.classList.remove('d-none');
    target.classList.add('active', 'd-flex');
}

document.getElementById('coinBtn').addEventListener('pointerdown', () => {
    score++;
    document.getElementById('balance').innerText = score.toLocaleString();
    localStorage.setItem('balance', score);
});

function openDaily() {
    const last = localStorage.getItem('lastClaim');
    const now = Date.now();
    if (last && (now - last < 86400000)) {
        alert("Приходи завтра!"); return;
    }
    score += 1000;
    localStorage.setItem('lastClaim', now);
    document.getElementById('balance').innerText = score.toLocaleString();
    alert("🎁 Бонус +1,000 получен!");
}