function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '♡';
  heart.className = 'heart';
  
  // Оптимизированные случайные значения
  heart.style.left = Math.random() * 95 + 'vw'; // 95vw вместо 100vw
  heart.style.fontSize = (Math.random() * 15 + 10) + 'px'; // 10-25px
  heart.style.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5s
  
  document.body.appendChild(heart);
  
  // Удаляем сердечко после анимации
  heart.addEventListener('animationend', () => {
    heart.remove();
    createHeart(); // Создаём новое вместо рекурсии
  });
}

// Создаём 30 сердечек сразу
for (let i = 0; i < 30; i++) createHeart();
