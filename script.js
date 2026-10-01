const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");
const newChatButton = document.querySelector(".new-chat");


// Send message
function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    // Create user message
    addMessage(text, "user-message");

    // Clear input
    messageInput.value = "";

    // Temporary AI response
    setTimeout(() => {

        const response =
            "Hello! I'm Vasora AI. Your message was received successfully. Real AI intelligence will be connected in the next step.";

        addMessage(response, "ai-message");

    }, 700);
}


// Add message to chat
function addMessage(text, className) {

    const message = document.createElement("div");

    message.classList.add("message", className);

    message.textContent = text;

    messages.appendChild(message);

    // Scroll to latest message
    messages.scrollTop = messages.scrollHeight;
}


// Send button
sendButton.addEventListener("click", sendMessage);


// Press Enter to send
messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});


// New Chat
newChatButton.addEventListener("click", function() {

    messages.innerHTML = "";

    messageInput.value = "";

    messageInput.focus();

});
