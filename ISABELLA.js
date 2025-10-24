// corazones flotando
const heartsContainer = document.querySelector(".hearts");

function crearCorazon() {
  const heart = document.createElement("span");
  heart.textContent = "💘";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 0.9 + Math.random() * 1.5 + "rem";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(crearCorazon, 600);
