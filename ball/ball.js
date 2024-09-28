    const box = document.getElementById('box');
    const ball = document.getElementById('ball');

    
    let ballRect = ball.getBoundingClientRect();
    let boxRect = box.getBoundingClientRect();

    ball.style.left = '0px';
    ball.style.top = '0px';

    
    function moveBall(e) {
        const mouseX = e.clientX - boxRect.left - ballRect.width / 2;
        const mouseY = e.clientY - boxRect.top - ballRect.height / 2;

        
        let newLeft = Math.max(0, Math.min(boxRect.width - ballRect.width, mouseX));
        let newTop = Math.max(0, Math.min(boxRect.height - ballRect.height, mouseY));

        
        ball.style.left = newLeft + 'px';
        ball.style.top = newTop + 'px';

        
        if (newLeft === 0 || newLeft === boxRect.width - ballRect.width ||
            newTop === 0 || newTop === boxRect.height - ballRect.height) {
            alert('Ball touched the border!');
        }
    }

    box.addEventListener('mousemove', moveBall);