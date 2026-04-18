// Simple script to add floating hearts animation
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const container = document.querySelector('.container');

    function createHeart() {
        const hearts = ['❤️', '💖', '💕', '💗', '💓', '💞', '💘', '💝'];
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        const heart = document.createElement('div');
        heart.innerHTML = randomHeart;
        heart.style.position = 'absolute';
        heart.style.fontSize = '2em';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'floatUp 5s linear infinite';
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts every 300ms
    setInterval(createHeart, 300);

    // Add click event to container for more hearts
    container.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 50);
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });    }

    // Positive Love Games
    const compliments = [
        "You embody unparalleled beauty, both inwardly and outwardly.",
        "Your smile illuminates my world in ways beyond description.",
        "I am profoundly fortunate to have you as my partner.",
        "You enhance every day with your radiant presence.",
        "Your love enriches my heart with infinite joy."
    ];

    if (document.getElementById('complimentBtn')) {
        document.getElementById('complimentBtn').addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * compliments.length);
            document.getElementById('compliment').textContent = compliments[randomIndex];
        });
    }

    const affirmations = [
        "My affection for you grows deeper with each passing day.",
        "You are my eternal companion and beloved.",
        "Our bond is resilient and unbreakable.",
        "Together, we possess the strength to overcome any challenge.",
        "You represent the finest aspect of my existence."
    ];

    if (document.getElementById('affirmationBtn')) {
        document.getElementById('affirmationBtn').addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            document.getElementById('affirmation').textContent = affirmations[randomIndex];
        });
    }

    const reasons = [
        "Because you bring joy and laughter even on challenging days.",
        "Because your compassion inspires me daily.",
        "Because you support my aspirations without reservation.",
        "Because you are both my closest friend and cherished lover.",
        "Because in your presence, I feel truly whole."
    ];

    if (document.getElementById('reasonBtn')) {
        document.getElementById('reasonBtn').addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * reasons.length);
            document.getElementById('reason').textContent = reasons[randomIndex];
        });
    }

    // Play music
    if (document.getElementById('playMusicBtn')) {
        document.getElementById('playMusicBtn').addEventListener('click', function() {
            const audio = document.getElementById('loveSong');
            audio.play();
        });
    }
});

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
    to {
        transform: translateY(-100vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);