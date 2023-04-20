const inputs = document.querySelectorAll('input[type="radio"]'),
    btnNext = document.querySelector('.btn'),
    formBg = document.querySelectorAll('.form-control');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        btnNext.classList.add('btn-accept');
        btnNext.classList.remove('btn-deActive');
    });
});