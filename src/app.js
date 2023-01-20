/* istanbul ignore file */
try {
    const { isEmpty, isValid } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        if (isEmpty(gamerTagValue))
            feedbackMessageText = "Gamer tag cannot be empty";
        else if (!isValid(gamerTagValue))
            feedbackMessageText = "Gamer tag is not valid";
        else feedbackMessageText = "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
