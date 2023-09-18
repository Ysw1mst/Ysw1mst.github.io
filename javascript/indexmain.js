const texts = document.querySelectorAll(".text");
let currentIndex = 0;

function showText(index) {
    texts.forEach((text, i) => {
        if (i === index) {
            text.style.opacity = 1;
        } else {
            text.style.opacity = 0;
        }
    });
}

function loopTextAnimation() {
    showText(currentIndex);
    currentIndex = (currentIndex + 1) % texts.length;

    setTimeout(() => {
        loopTextAnimation();
    }, 2500);
}

// 페이지 로드 후 애니메이션 시작
window.addEventListener("load", () => {
    loopTextAnimation();
});
