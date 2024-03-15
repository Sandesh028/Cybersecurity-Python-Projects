let lastScore = -1; // Track the last score to trigger animations on change

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;
    const strengthResult = zxcvbn(password);
    const strengthBar = document.getElementById('password-strength-bar');

    // Check if the score has changed to trigger the animation
    if (strengthResult.score !== lastScore) {
        lastScore = strengthResult.score;
        strengthBar.classList.add('pulse-animation');

        // Remove the animation class after it completes to reset the animation
        setTimeout(() => {
            strengthBar.classList.remove('pulse-animation');
        }, 1000); // Match the duration of the animation
    }

    // Existing code to update the UI
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Password strength: <strong>${strengthResult.score}</strong> / 4</p>
                               <p>Estimated crack time: ${strengthResult.crack_times_display.online_no_throttling_10_per_second}</p>`;
    
    const strengthBarClasses = ["bg-danger", "bg-warning", "bg-info", "bg-success"];
    strengthBar.className = "progress-bar " + strengthBarClasses[strengthResult.score];
    strengthBar.style.width = `${strengthResult.score * 25}%`;
    strengthBar.setAttribute("aria-valuenow", strengthResult.score * 25);
}
