const phrases = [
    "Desarrolladora web",
    "Full Stack",
    "Creativa",
    "Curiosa",
    "Resolutiva"
  ];
  
  let currentIndex = 0;
  const subtextElement = document.getElementById("hero-subtext");
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    subtextElement.textContent = phrases[currentIndex];
  }, 2000);
  