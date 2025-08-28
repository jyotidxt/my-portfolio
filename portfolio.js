// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

// Typing animation for home section
const typedTextSpan = document.getElementById('typed-text');
const cursorSpan = document.querySelector('.cursor');

const words = ['a Frontend Developer', 'a C++ Programmer', 'a React Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let pauseTime = 1500;

function type() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }
  } else {
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Start typing animation on page load
document.addEventListener('DOMContentLoaded', () => {
  type();
});
