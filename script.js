const input = document.querySelector("input");
const button = document.querySelector("button");
const messages = document.querySelector(".messages");

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const text = input.value.trim();

    if (text === "") return;

    const userMessage = document.createElement("p");
    userMessage.innerHTML = "<strong>You:</strong> " + text;
    messages.appendChild(userMessage);

    input.value = "";

    const aiMessage = document.createElement("p");
    aiMessage.innerHTML = "<strong>AI:</strong> Thanks for telling me. I'm listening.";
    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight;
}
