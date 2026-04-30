const images = document.querySelectorAll(".char-img");


  images.forEach(img => {
    img.addEventListener("click", () => {
      const targetId = img.dataset.target;
      const info = document.getElementById(targetId);


      info.classList.toggle("hidden");
    });
  });


const form = document.getElementById("favorite-form");
const response = document.getElementById("response");


form.addEventListener("submit", function(event) {
  event.preventDefault();


  const character = document.getElementById("character").value;


  response.textContent = character + " is a great character!";
});
