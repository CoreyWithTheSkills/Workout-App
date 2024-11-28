const exerciseBox = document.getElementById('exercise-box');
const containerTwoCards = document.getElementById('container-2-cards');
const wallSitInfoBox = document.getElementById('wallsit-info-box');
const dynFlexButton = document.getElementById('dynamic-flexibility-button'); // Button for Dynamic Flexibility
const dynFlex = document.getElementById('dynamic-flexibility'); // Actual box to show

// Initial styles
dynFlex.style.display = 'none';
wallSitInfoBox.style.display = 'none';
containerTwoCards.style.display = 'flex';

// Function to hide exercises and show the relevant box
function hideExercises(event) {
    if (event.target === exerciseBox) {
        containerTwoCards.style.display = 'none';
        wallSitInfoBox.style.display = 'flex';
        dynFlex.style.display = 'none'; // Ensure only one box is visible
    } else if (event.target === dynFlexButton) {
        containerTwoCards.style.display = 'none';
        dynFlex.style.display = 'flex';
        wallSitInfoBox.style.display = 'none'; // Ensure only one box is visible
    }
}

// Add event listeners
exerciseBox.addEventListener('click', hideExercises);
dynFlexButton.addEventListener('click', hideExercises);
