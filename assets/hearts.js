for (let i = 0; i < 30; i++) createHeart();

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '♡';  // Символ-сердечко
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = -10 + 'px';
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); createHeart(); }, 5000);
}
