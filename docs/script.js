const cover = document.getElementById('cover');
const details = document.getElementById('details');

function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const colors = [
        '#ffd447',
        '#f34b55',
        '#50c9ff',
        '#fff',
        '#9a82ff'
    ];

    for (let i = 0; i < 75; i++) {
        const el = document.createElement('span');

        el.className = 'confetti';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.background = colors[i % colors.length];
        el.style.animationDelay = Math.random() * 1.3 + 's';
        el.style.animationDuration = (2.5 + Math.random() * 2) + 's';

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 6000);
    }
}

document.getElementById('open').addEventListener('click', () => {
    cover.style.display = 'none';
    details.style.display = 'block';
    confetti();
});

document.getElementById('again').addEventListener('click', confetti);

function countdown() {
    const remaining =
        new Date('2026-10-30T09:00:00+07:00').getTime() - Date.now();

    if (remaining <= 0) {
        ['d', 'h', 'm', 's'].forEach(id => {
            document.getElementById(id).textContent = '00';
        });

        document.getElementById('status').textContent =
            '🎉 HERO DAY TELAH TIBA! SELAMAT ULANG TAHUN, NAUFAL!';

        return;
    }

    const vals = [
        Math.floor(remaining / 86400000),
        Math.floor(remaining / 3600000) % 24,
        Math.floor(remaining / 60000) % 60,
        Math.floor(remaining / 1000) % 60
    ];

    ['d', 'h', 'm', 's'].forEach((id, i) => {
        document.getElementById(id).textContent =
            String(vals[i]).padStart(2, '0');
    });
}

countdown();
setInterval(countdown, 1000);