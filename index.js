const exerciseBox = document.getElementById('exercise-box');
const containerTwoCards = document.getElementById('container-2-cards');
const wallSitInfoBox = document.getElementById('wallsit-info-box');
const dynFlexButton = document.getElementById('dynamic-flexibility-button'); // Button for Dynamic Flexibility
const dynFlex = document.getElementById('dynamic-flexibility'); // Actual box to show
const backToWorkoutButton = document.getElementById('dynamic-flexibility-button'); // Button to return to workout page
const backToWorkoutButtonWallSit = document.getElementById('wall-sit-button');

// Initial styles
dynFlex.style.display = 'none';
wallSitInfoBox.style.display = 'none';
containerTwoCards.style.display = 'flex';

// Function to hide exercises and show the relevant box
function hideExercises(event) {
    if (event.target.innerHTML === 'Dynamic Flexibility') {
        containerTwoCards.style.display = 'none';
        wallSitInfoBox.style.display = 'none';
        dynFlex.style.display = 'flex';
    } else if (event.target.id === 'wall-sit-button') {  // Using `else if` instead of `if else`
        containerTwoCards.style.display = 'none';
        dynFlex.style.display = 'none';
        wallSitInfoBox.style.display = 'flex';
    }
}


// Event listener for buttons inside exercises
const exerciseButtons = document.querySelectorAll('.exercises-and-reps');
exerciseButtons.forEach((button) => {
    button.addEventListener('click', hideExercises);
});

// Back button to go to workout page
backToWorkoutButton.addEventListener('click', () => {
    dynFlex.style.display = 'none';
    containerTwoCards.style.display = 'flex';
});


backToWorkoutButtonWallSit.addEventListener('click', () => {
    wallSitInfoBox.style.display = 'none';
    containerTwoCards.style.display = 'flex';
});

'Trying to add come back button to wall sits'