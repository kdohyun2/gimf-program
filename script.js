// ===== 요소 가져오기 =====
const tabs = document.querySelectorAll(".tab");
const programImage = document.getElementById("programImage");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("close");

// ===== 탭 변경 =====
tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // 활성 버튼 변경
        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        // 이미지 변경
        const image = tab.dataset.image;

        programImage.classList.remove("fade");

        // 애니메이션 다시 실행
        void programImage.offsetWidth;

        programImage.src = image;
        programImage.classList.add("fade");

    });

});

// ===== 라이트박스 열기 =====
programImage.addEventListener("click", () => {

    lightboxImage.src = programImage.src;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

});

// ===== 닫기 버튼 =====
closeBtn.addEventListener("click", closeLightbox);

// ===== 배경 클릭 시 닫기 =====
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closeLightbox();
    }

});

// ===== ESC 키 =====
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeLightbox();
    }

});

// ===== 라이트박스 닫기 함수 =====
function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}