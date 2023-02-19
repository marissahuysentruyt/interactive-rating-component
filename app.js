import "./styles.scss";

// selecting & saving a rating
const ratingInputsArray = document.querySelectorAll('input');
let selectedRating = "";
const spanContent = document.querySelector('.js-ratingValue');

const getRatingValue = (i) => {
  return ratingInputsArray[i].value;
}

ratingInputsArray.forEach((input, i) => {
  input.addEventListener("click", () => {
      ratingLabels[i].setAttribute('checked', true);
      selectedRating = getRatingValue(i);
      spanContent.innerHTML = selectedRating;
      submitButton.removeAttribute('disabled');

      handleSubmit();
  })
});

// displaying the proper cards
const ratingCard = document.querySelector('.rating-start');
const thankYouCard = document.querySelector('.rating-end');
const ratingLabels = document.querySelectorAll('label')
const submitButton = document.querySelector('button');

thankYouCard.classList.add('js-hidden');
submitButton.setAttribute('disabled', '');

const handleSubmit =() => {
  submitButton.addEventListener("click", (e) => {
    thankYouCard.classList.remove('js-hidden');
    ratingCard.classList.add('js-hidden');
  });
}
