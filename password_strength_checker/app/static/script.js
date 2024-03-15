function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;
    const strengthResult = zxcvbn(password);

    // Update UI with password strength info
    const resultElement = document.getElementById('result');
    const strengthBar = document.getElementById('password-strength-bar');
    
    resultElement.innerHTML = `<p>Password strength: <strong>${strengthResult.score}</strong> / 4</p>
                               <p>Estimated crack time: ${strengthResult.crack_times_display.online_no_throttling_10_per_second}</p>`;
    
    // Update the strength bar based on the score
    const strengthBarClasses = ["bg-danger", "bg-warning", "bg-info", "bg-success"];
    strengthBar.className = "progress-bar " + strengthBarClasses[strengthResult.score];
    strengthBar.style.width = `${strengthResult.score * 25}%`;
    strengthBar.setAttribute("aria-valuenow", strengthResult.score * 25);
}
