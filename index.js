const emptyMessage = document.querySelector("#empty-message")
const errorMessage = document.querySelector("#error-message")
const successMessage = document.querySelector("#success-message")
const submitButton = document.querySelector("#submit")
const emailInput = document.querySelector("#email-input")


submitButton.addEventListener("click", () => {
    console.log(emailInput.value);
    const userInput = emailInput.value;
    console.log(userInput.length);
    emptyMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
    successMessage.classList.add("hidden");
    if(userInput.length < 1) {
        return emptyMessage.classList.remove("hidden")
    } else if(userInput.includes("@") !== true) {
        return errorMessage.classList.remove("hidden")
    } else if(userInput.includes(".") !== true) {
        return errorMessage.classList.remove("hidden")
    } else {
        return successMessage.classList.remove("hidden")
    }
})
    
