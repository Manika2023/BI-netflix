const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-minus-circle');
            icon.classList.add('fa-plus-circle');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus-circle');
            icon.classList.add('fa-minus-circle');
        }
    });
});