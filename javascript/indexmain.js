const texts = document.querySelectorAll(".text");
let currentIndex = 0;

function showText(index) {
    // 현재 텍스트 표시
    texts[index].style.opacity = 1;

    // 이전 텍스트 숨김
    const prevIndex = (index === 0) ? texts.length - 1 : index - 1;
    texts[prevIndex].style.opacity = 0;
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
