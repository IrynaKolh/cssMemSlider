let text = ['Этот мир несовершенен, но он единственный, который у нас есть.', 'Прежде чем мы начнем, кто-нибудь хочет выйти?', 'Мне нечего вам доказывать', '— У меня есть армия. — А у нас Халк!'];


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
  document.querySelector('.quotes').textContent = text[n-1];
} 
