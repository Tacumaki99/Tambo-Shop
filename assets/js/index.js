//slider
const SLIDES_OBJ = [
  {
    badge: "CNC Service",
    title: 'CNC servicce',
    image: 'CNC_service.jpg',
    text: 'From complex designs to clean cuts',
    id: 0
  },
  {
    badge: "Laser Service",
    title: 'Laser Service',
    image: 'laser_service.jpg',
    paragraf: 'Detailed Laser Engraving & Cutting',
    id: 1
  },
  {
    badge: "Furniture",
    title: 'Furniture',
    image: 'furniture.jpg',
    paragraf: 'Custom Handmade Furniture',
    id: 2
  },
  {
    badge: "Decor & DIY",
    title: 'Small Decorative Items',
    image: 'reproMaterials.jpg',
    paragraf: 'Decor & Repro Materials for Decoupage',
    id: 3
  }
  
]

const indicatorsContainer = document.getElementById("carouselIndicators");
const innerContainer = document.getElementById("carouselInner");

SLIDES_OBJ.forEach((slide, index) => {

  // INDICATOR
  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.setAttribute("data-bs-target", "#servicesCarousel");
  indicator.setAttribute("data-bs-slide-to", index);
  indicator.className = index === 0 ? "active" : "";
  if (index === 0) indicator.setAttribute("aria-current", "true");

  indicatorsContainer.appendChild(indicator);

  // SLIDE
  const item = document.createElement("div");
  item.className = `carousel-item ${index === 0 ? "active" : ""}`;

  item.innerHTML = `
    <div class="service-slide-modern d-flex align-items-center"
         style="background-image:url('assets/images/${slide.image}');">

      <div class="overlay"></div>

      <div class="container position-relative z-2">

        <div class="service-content-modern">

          <span class="service-badge">${slide.badge}</span>

          <h2>${slide.title}</h2>

          <p>${slide.text}</p>

        </div>

      </div>

    </div>
  `;

  innerContainer.appendChild(item);
});

    const slides = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicators button");

    let current = 0;
    let autoSlide;

    // SHOW SLIDE
    function showSlide(index) {

        // REMOVE ACTIVE
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        indicators.forEach(dot => {
            dot.classList.remove("active");
        });

        // ADD ACTIVE
        slides[index].classList.add("active");
        indicators[index].classList.add("active");

        current = index;
    }

    // NEXT
    function nextSlide() {

        current++;

        if(current >= slides.length){
            current = 0;
        }

        showSlide(current);
    }

    // PREV
    function prevSlide() {

        current--;

        if(current < 0){
            current = slides.length - 1;
        }

        showSlide(current);
    }

    // AUTO PLAY
    function startAutoSlide() {

        autoSlide = setInterval(() => {
            nextSlide();
        }, 5000);

    }

    // STOP AUTO
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    

    

    // DOTS
    indicators.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            stopAutoSlide();
            startAutoSlide();

        });

    });

    // KEYBOARD NAVIGATION
    document.addEventListener("keydown", (e) => {

        if(e.key === "ArrowRight"){

            nextSlide();

        } else if(e.key === "ArrowLeft"){

            prevSlide();

        }

    });

    // TOUCH SWIPE
    let startX = 0;
    let endX = 0;

    const carousel = document.querySelector("#servicesCarousel");

    carousel.addEventListener("touchstart", (e) => {

        startX = e.changedTouches[0].screenX;

    });

    carousel.addEventListener("touchend", (e) => {

        endX = e.changedTouches[0].screenX;

        handleSwipe();

    });

    function handleSwipe(){

        const diff = startX - endX;

        if(diff > 50){

            nextSlide();

        }

        if(diff < -50){

            prevSlide();

        }

    }

    // INITIALIZE
    showSlide(current);
    startAutoSlide();

;


//fillerText

//var author = document.getElementById('author');

//var html = fillerText('author', 'hjdshdjsh');

//author.innerHTML = html;