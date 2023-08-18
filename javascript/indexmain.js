const texts = document.querySelectorAll(".text");
let currentIndex = 0;

function loopTextAnimation() {
    texts[currentIndex].style.opacity = 0; // 현재 텍스트를 숨김
    currentIndex = (currentIndex + 1) % texts.length; // 다음 텍스트로 인덱스 변경
    texts[currentIndex].style.opacity = 1; // 다음 텍스트를 나타냄

    // 세 번째 텍스트가 나왔을 때 첫 번째 텍스트로 돌아가도록 설정
    if (currentIndex === texts.length - 1) {
        texts[0].style.opacity = 1;
        setTimeout(() => {
            texts[0].style.opacity = 0;
            currentIndex = 0;
            setTimeout(loopTextAnimation, 2500);
        }, 2500);
    } else {
        setTimeout(loopTextAnimation, 2500); // 2.5초 후에 다시 호출
    }
}

// 페이지 로드 후 애니메이션 시작
window.addEventListener("load", () => {
    loopTextAnimation();
});
