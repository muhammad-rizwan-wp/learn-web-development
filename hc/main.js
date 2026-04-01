/* Old School Approch */
/*
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
*/
/* Modern Approch */

let timer;
let deleteFirstPhotoDelay;

async function fetchData() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    createBreedList(data.message);
  } catch (error) {
    console.log("Error fetching breeds:", error.message);
  }
}

fetchData();

function createBreedList(data) {
  document.querySelector("#bread-list").innerHTML = `
  <select onchange="loadByBreed(this.value)" id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
    <option selected>Choose a dog bread</option>
    ${Object.keys(data)
      .map((breed) => {
        return `<option value="${breed}">${breed}</option>`;
      })
      .join("")}            
   </select>
  `;
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog bread") {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await res.json();
      createSlideShow(data.message);
    } catch (error) {
      console.log("Error fetching breeds:", error.message);
    }
  }
}

function createSlideShow(images) {
  const slider = document.querySelector("#slider");
  if (!images || images.length === 0) {
    slider.innerHTML = "<p>No images found</p>";
    return;
  }

  let currentPos = 0;
  clearInterval(timer);
  clearTimeout(deleteFirstPhotoDelay);

  slider.innerHTML = `
    <div class="slide" style="background-image: url(${images[0]}); opacity: 1;"></div>
  `;

  timer = setInterval(() => {
    const nextImage = images[currentPos];

    slider.insertAdjacentHTML(
      "beforeend",
      `<div class="slide" style="background-image: url(${nextImage}); opacity: 0;"></div>`,
    );

    const slides = slider.querySelectorAll(".slide");
    const lastSlide = slides[slides.length - 1];

    // Fade in
    setTimeout(() => {
      lastSlide.style.opacity = "1";
    }, 50);

    // Remove old slide
    deleteFirstPhotoDelay = setTimeout(() => {
      if (slides.length > 1) {
        slides[0].remove();
      }
    }, 1000);

    currentPos = (currentPos + 1) % images.length;
  }, 3000);
}
