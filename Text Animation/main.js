// Array of text messages to display
const textMessages = [
    "I hate programming",
    "Hmm it works! 🎉",
    "I love program 💻"
  ];
  
  // Get references to elements
  const textContainer = document.getElementById('text-container');
  const animatedText = document.getElementById('animated-text');
  
  let currentIndex = 0;
  
  // Function to update the text
  function updateText() {
    textContainer.classList.remove('visible');
    textContainer.classList.add('hidden');
  
    setTimeout(() => {
      animatedText.textContent = textMessages[currentIndex];
      textContainer.classList.remove('hidden');
      textContainer.classList.add('visible');
  
      currentIndex = (currentIndex + 1) % textMessages.length;
      setTimeout(updateText, 2000);
    }, 1000);
  }
  
  // Add additional effects with JavaScript
  function addTextEffects() {
    setTimeout(() => {
      textContainer.classList.remove('hidden');
      textContainer.classList.add('visible');
      setTimeout(updateText, 2000);
    }, 500);
  
    setInterval(() => {
      const colors = ['white', '#ff7f50', '#87cefa', '#90ee90', '#ffa500', '#ff69b4'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      animatedText.style.color = randomColor;
  
      const randomFontSize = 1.5 + Math.random() * 1.5; // 1.5rem to 3rem
      animatedText.style.fontSize = `${randomFontSize}rem`;
    }, 700);
  }
  
  // Start the animation
  addTextEffects();
  