// console.log('ballsanimation.js loaded');
const container = document.getElementById('body');

for (let i = 0; i < 10; i++) {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.opacity = 0;
    container.appendChild(ball);

    // TweenMax.to(ball, 1, {opacity: 1});
}

const speed = 0.3;
const balls = document.querySelectorAll('.ball');

balls.forEach((ball, i) => {
    let x, y;
    do {
        x = Math.random() * (container.clientWidth - ball.clientWidth);
        y = Math.random() * (container.clientHeight - ball.clientHeight);
        let center = { x: x + ball.clientWidth / 2, y: y + ball.clientHeight / 2 };

        for (let j = 0; j < i; j++) {
            let b = balls[j];
            let center2 = { x: b.offsetLeft + b.clientWidth / 2, y: b.offsetTop + b.clientHeight / 2 };
            let dx = center.x - center2.x;
            let dy = center.y - center2.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let minDistance = b.clientWidth / 2 + ball.clientWidth / 2;
            if (distance < minDistance) {
                x = y = -1;
                break;
            }
        }
    } while (x < 0 || y < 0);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.vx = Math.random() * 10 - 5;
    ball.vy = Math.random() * 10 - 5;
});

function animate() {
    balls.forEach((ball1, i) => {
        let x = ball1.offsetLeft + ball1.vx * speed;
        let y = ball1.offsetTop + ball1.vy * speed;

        for (let j = i + 1; j < balls.length; j++) {
            let ball2 = balls[j];
            let x2 = ball2.offsetLeft + ball2.clientWidth / 2;
            let y2 = ball2.offsetTop + ball2.clientHeight / 2;

            let dx = x - x2;
            let dy = y - y2;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let minDistance = ball1.clientWidth / 2 + ball2.clientWidth / 2 - 5;

            if (distance < minDistance) {
                // Collision detected, swap velocities
                let tempVx = ball1.vx;
                let tempVy = ball1.vy;
                ball1.vx = ball2.vx;
                ball1.vy = ball2.vy;
                ball2.vx = tempVx;
                ball2.vy = tempVy;
            }
        }

        if (x + ball1.clientWidth > container.clientWidth || x < 0) {
            ball1.vx = -ball1.vx;
        }
        if (y + ball1.clientHeight > container.clientHeight || y < 0) {
            ball1.vy = -ball1.vy;
        }
        ball1.style.left = `${x}px`;
        ball1.style.top = `${y}px`;
    });
    requestAnimationFrame(animate);
}
  animate();



//   remove horizontal bar
document.getElementById("body").style.overflowX = "hidden";