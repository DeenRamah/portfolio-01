document.addEventListener('DOMContentLoaded', function() {
    const botResponse = {
        initialGreeting: "Hi there! I'm Deen. How can I help you today?",
        questionResponse: "Please contact me at +254719760996. If you have another question, feel free to email me at kiprotich66kipchumba@gmail.com.",
        persistentResponse: "Since you persist, here are my profiles: LinkedIn - https://www.linkedin.com/in/kipchumba-kiprotich-2b10b5279/, GitHub - https://github.com/DeenRamah, Facebook - https://www.facebook.com/profile.php?id=100088239297829"
    };

    const chatBox = document.querySelector('.chat-box');
    const userInput = document.querySelector('.user-input');
    const sendBtn = document.querySelector('.send-btn');

    function botReply(message) {
        const reply = document.createElement('div');
        reply.classList.add('bot-message');
        reply.textContent = message;
        chatBox.appendChild(reply);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    function handleUserInput() {
        const userMessage = userInput.value.trim().toLowerCase();

        if (userMessage.includes('what') || userMessage.includes('know') || userMessage.includes('deen')) {
            botReply(botResponse.initialGreeting);
        } else if (userMessage.includes('email')) {
            botReply(botResponse.questionResponse);
        } else {
            botReply(botResponse.persistentResponse);
        }

        userInput.value = '';
    }

    sendBtn.addEventListener('click', handleUserInput);

    // Handle Enter key press
    userInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });
});
