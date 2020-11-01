const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// SlideShow

var slideIndex = 1;
showSlides1(slideIndex, 1);
showSlides2(slideIndex, 2);
showSlides3(slideIndex, 3);
showSlides4(slideIndex, 4);
showSlides5(slideIndex, 5);

function plusSlides(n, i) {
  if (i == 1) showSlides1((slideIndex += n), i);
  if (i === 2) showSlides2((slideIndex += n), i);
  if (i === 3) showSlides3((slideIndex += n), i);
  if (i === 4) showSlides4((slideIndex += n), i);
  if (i === 5) showSlides5((slideIndex += n), i);
}

function showSlides1(n, i) {
  var i;
  var slides = document.getElementsByClassName('mySlides' + i);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function showSlides2(n, i) {
  var i;
  var slides = document.getElementsByClassName('mySlides' + i);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function showSlides3(n, i) {
  var i;
  var slides = document.getElementsByClassName('mySlides' + i);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function showSlides4(n, i) {
  var i;
  var slides = document.getElementsByClassName('mySlides' + i);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function showSlides5(n, i) {
  var i;
  var slides = document.getElementsByClassName('mySlides' + i);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
