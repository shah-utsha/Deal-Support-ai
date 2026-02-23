const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("dotsContainer");
const slides = track.children;
let index = 0;

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  // Using border and background logic to match image
  dot.className = `w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${i === 0 ? "bg-[#333] border-[#333]" : "bg-transparent border-[#D1A780]"}`;
  dot.onclick = () => {
    index = i;
    updateCarousel();
  };
  dotsContainer.appendChild(dot);
}

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  Array.from(dotsContainer.children).forEach((dot, i) => {
    if (i === index) {
      dot.classList.replace("bg-transparent", "bg-[#333]");
      dot.classList.replace("border-[#D1A780]", "border-[#333]");
    } else {
      dot.classList.replace("bg-[#333]", "bg-transparent");
      dot.classList.replace("border-[#333]", "border-[#D1A780]");
    }
  });
}

function moveSlide(step) {
  index = (index + step + slides.length) % slides.length;
  updateCarousel();
}

// carousel

// duplicate logos automatically for infinite loop
const logoTrack = document.getElementById("infiniteLogoTrack");
logoTrack.innerHTML += logoTrack.innerHTML;

// accordion section

const items = document.querySelectorAll(".accordion-item");
const mainImg = document.getElementById("main-image");

items.forEach((item) => {
  const btn = item.querySelector("button");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector("svg");

  btn.addEventListener("click", () => {
    const isOpen = content.style.maxHeight !== "0px";

    // 1. Close ALL items first
    items.forEach((i) => {
      i.querySelector(".accordion-content").style.maxHeight = "0px";
      i.classList.replace("border-orange-200", "border-transparent");
      i.querySelector("svg").classList.remove("rotate-180");
    });

    // 2. If it wasn't open, open it
    if (!isOpen) {
      content.style.maxHeight = "200px"; // Set to a height larger than text
      item.classList.replace("border-transparent", "border-orange-200");
      icon.classList.add("rotate-180");

      // 3. Update Image with fade effect
      mainImg.style.opacity = "0.5";
      setTimeout(() => {
        mainImg.src = item.getAttribute("data-image");
        mainImg.style.opacity = "1";
      }, 200);
    }
  });
});
