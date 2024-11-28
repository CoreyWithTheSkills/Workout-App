const exerciseBox = document.getElementById('exercise-box');
const containerTwoCards = document.getElementById('container-2-cards');
const wallSitInfoBox = document.getElementById('wallsit-info-box');

wallSitInfoBox.style.display = 'none';
containerTwoCards.style.display = 'flex';

function hideExercises(){
    containerTwoCards.style.display = 'none';
    wallSitInfoBox.style.display = 'flex';
}

exerciseBox.addEventListener('click', hideExercises);

