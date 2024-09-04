const nav = document.querySelector(".nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", function () {
    // 1.5 saniye (1500 milisaniye) sonra animasyonu durdur
    setTimeout(function () {
        var loadingAnimation = document.querySelector(".middle");
        loadingAnimation.style.display = "none"; // Animasyonu gizle
        // Diğer web sitenizin içeriğini burada gösterebilirsiniz
    }, 1500); // 1.5 saniye bekle
});
