document.addEventListener('DOMContentLoaded', function() {
    const botResponses = {
        contactPhoneResponse: "For any inquiries, feel free to contact me at 0719760996.",
        contactEmailResponse: "You can reach me via email at kiprotich66kipchumba@gmail.com.",
        contactLinkedInResponse: "Feel free to connect with me on LinkedIn: https://www.linkedin.com/in/kipchumba-kiprotich-2b10b5279/.",
        contactTwitterResponse: "You can reach out to me on Twitter: https://x.com/Deen_Ramah.",
        contactGitHubResponse: "You can find more about me and my work on my GitHub profile: https://github.com/DeenRamah.",
        contactFacebookResponse: "Reach me for collaborations via Facebook: https://www.facebook.com/profile.php?id=100088239297829.",
        genericResponses: [
            "Thank you for reaching out. I'm here to assist you.",
            "I'm sorry, I don't have that information right now.",
            "Could you please provide more details? I'll do my best to help.",
            "Let me look into that for you.",
            "That's an interesting question. Let me find the answer.",
            "I appreciate your question. Here's what I can share.",
            "I'm here to help you. What else can I assist with?",
            "Feel free to ask me anything else.",
            "Let's explore that further.",
            "I'm sorry, I'm unable to assist with that at the moment."
            // Add more generic responses as needed
        ]
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

        if (userMessage.includes('contact') && userMessage.includes('phone')) {
            botReply(botResponses.contactPhoneResponse);
        } else if (userMessage.includes('contact') && userMessage.includes('email')) {
            botReply(botResponses.contactEmailResponse);
        } else if (userMessage.includes('contact') && userMessage.includes('linkedin')) {
            botReply(botResponses.contactLinkedInResponse);
        } else if (userMessage.includes('contact') && userMessage.includes('twitter')) {
            botReply(botResponses.contactTwitterResponse);
        } else if (userMessage.includes('contact') && userMessage.includes('github')) {
            botReply(botResponses.contactGitHubResponse);
        } else if (userMessage.includes('contact') && userMessage.includes('facebook')) {
            botReply(botResponses.contactFacebookResponse);
        } else {
            // Generate a random generic response
            const randomIndex = Math.floor(Math.random() * botResponses.genericResponses.length);
            botReply(botResponses.genericResponses[randomIndex]);
        }

        userInput.value = '';
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    }

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keyup', handleEnterKey);
});
