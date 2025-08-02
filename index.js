firstCapy = document.querySelector('.firstCapy');
secondCapy = document.querySelector('.secondCapy');
thirdCapy = document.querySelector('.thirdCapy');
const firstCard = document.querySelector('.firstCard');
const secondCard = document.querySelector('.secondCard');
const thirdCard = document.querySelector('.thirdCard');
const fourthCard = document.querySelector('.fourthCard');
const answer = document.querySelector('#answer');
const nextButton = document.querySelector('.nextButton');
const submit = document.querySelector('#submit');
okay = document.querySelector('.okay');
okay2 = document.querySelector('.okay2');

correctAnswer = "Capy";

submit.addEventListener('click', () => {
    if (answer.value.toLowerCase() === correctAnswer.toLowerCase()) {
        secondCard.classList.add('slideNext');
        firstCapy.classList.replace('block', 'hidden');
        secondCapy.classList.replace('hidden', 'block');
        setTimeout(() => {
            firstCard.classList.replace('z-40', 'z-0');
        }, 500);
        setTimeout(() => {
            firstCard.classList.add('hidden');
        }, 900);
    } else {
        alert("WRONG ANSWER!!!");
    }
});

okay.addEventListener('click', () => {
    setTimeout(() => {
            secondCard.classList.replace('z-50', 'z-0');
    }, 500);
    setTimeout(() => {
            secondCard.classList.add('hidden');
    }, 900);

        thirdCard.classList.add('slideNext');
});

okay2.addEventListener('click', () => {
    setTimeout(() => {
        thirdCard.classList.replace('z-50', 'z-0');
    }, 500);
    setTimeout(() => {
        thirdCard.classList.add('hidden');
    }, 900);

    secondCapy.classList.replace('block', 'hidden');
    thirdCapy.classList.replace('hidden', 'block');
    fourthCard.classList.add('slideNext');
});


