// Get elements
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');
const colorPicker = document.getElementById('colorPicker');
const savePreferenceButton = document.getElementById('savePreference');
const currentPreference = document.getElementById('currentPreference');

// Load stored color preference from localStorage and apply it
function loadUserPreference() {
    const savedColor = localStorage.getItem('colorPreference');
    if (savedColor) {
        colorPicker.value = savedColor;
        animatedBox.style.backgroundColor = savedColor;
        currentPreference.textContent = `Current Preference: ${savedColor}`;
    }
}

// Store color preference in localStorage
function saveUserPreference() {
    const selectedColor = colorPicker.value;
    localStorage.setItem('colorPreference', selectedColor);
    animatedBox.style.backgroundColor = selectedColor;
    currentPreference.textContent = `Current Preference: ${selectedColor}`;
}

// Trigger animation when button is clicked
animateButton.addEventListener('click', function() {
    // Add the animation class to trigger the animation
    animatedBox.classList.add('animate'); // Adds animation

    // Remove the animation class after the animation duration ends (2s)
    setTimeout(() => {
        animatedBox.classList.remove('animate'); // Removes the animation class
    }, 2000); // Match the duration of the animation (2s)
});

// Event listener for saving user preference
savePreferenceButton.addEventListener('click', saveUserPreference);

// Apply initial user preference when the page loads
window.onload = loadUserPreference;
