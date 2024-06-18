document.addEventListener("DOMContentLoaded", function() {
    const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.width = `${Math.random() * 60 + 20}px`;
        bubble.style.height = `${Math.random() * 60 + 20}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 15000);
    };

    const interval = setInterval(createBubble, 10);
});