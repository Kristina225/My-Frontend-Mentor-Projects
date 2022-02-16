const imgContainer = document.querySelector('.card__image--container');
const imgBackdrop = document.querySelector('.card__image--backdrop');
const imgIcon = document.querySelector('.card__image--icon');

imgContainer.addEventListener('mouseenter', () => {
    imgBackdrop.style.display = 'block';
    imgIcon.style.display = 'block';
})

imgContainer.addEventListener('mouseleave', () => {
    imgBackdrop.style.display = 'none';
    imgIcon.style.display = 'none';
})