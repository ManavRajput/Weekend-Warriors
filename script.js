function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Display user message
    appendMessage('You', userMessage, 'user');

    // Implement your chatbot logic here
    const botResponse = getBotResponse(userMessage);

    // Display bot response after a delay (simulating bot processing time)
    setTimeout(() => {
        appendMessage('Chatbot', botResponse, 'bot');
    }, 500);

    // Clear user input
    userInput.value = '';
}

function appendMessage(sender, message, messageType) {
    const chatBody = document.getElementById('chatBody');
    const messageElement = document.createElement('div');

    messageElement.classList.add('message', messageType === 'bot' ? 'bot' : 'user');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;

    chatBody.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(userMessage) {
    // Implement your chatbot logic here
    // For simplicity, echo back the user's message
    return `You said: ${userMessage}`;
}
