const API_URL = "https://backend-chatbot-32sc.onrender.com";
let API_KEY = "X2Cli1ZSPhHHAHlfZkOEPRWIqtd1TQD9ErH705-HMc4";

const chatMessages = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// function speakText(text) {
//     try {
//         const utter = new SpeechSynthesisUtterance(text);
//         utter.rate = 1.0;
//         utter.pitch = 1.0;
//         speechSynthesis.speak(utter);
//     } catch (e) {}
// }

function addMessage(text, isUser = false, sources = null, isError = false) {
    const msg = document.createElement('div');
    msg.className = `message ${isUser ? 'user' : 'bot'}`;

    const content = document.createElement('div');
    content.className = 'message-content';
    if (isError) content.style.color = 'red';

    const textElem = document.createElement('p');
    textElem.innerHTML = text.replace(/\n/g, '<br>');
    content.appendChild(textElem);

    if (sources && sources.length > 0) {
        const srcDiv = document.createElement('div');
        srcDiv.className = 'sources';
        srcDiv.innerHTML = "<b>📌 Sources:</b><br>";
        sources.forEach(url => {
            const link = document.createElement('a');
            link.href = url;
            link.textContent = url;
            link.target = "_blank";
            srcDiv.appendChild(link);
            srcDiv.appendChild(document.createElement('br'));
        });
        content.appendChild(srcDiv);
    }

    msg.appendChild(content);
    chatMessages.appendChild(msg);

    // if (!isUser && !isError) speakText(text);

    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'message bot';
    typing.id = 'typing-indicator';
    typing.innerHTML = "<div class='typing-dots'><div></div><div></div><div></div></div>";
    chatMessages.appendChild(typing);
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

async function sendQuery(question) {
    const response = await fetch(`${API_URL}/api/ask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": API_KEY
        },
        body: JSON.stringify({ question })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.detail || "Server error");
    }

    return await response.json();
}

async function handleSend() {
    const question = userInput.value.trim();
    if (!question) return;

    addMessage(question, true);

    userInput.value = "";
    userInput.disabled = true;
    sendButton.disabled = true;

    showTyping();

    try {
        const data = await sendQuery(question);
        removeTyping();
        addMessage(data.answer, false, data.sources);
    } catch (e) {
        removeTyping();
        addMessage("⚠️ Error: " + e.message, false, null, true);
    }

    userInput.disabled = false;
    sendButton.disabled = false;
}

document.addEventListener("DOMContentLoaded", () => {
    sendButton.addEventListener("click", handleSend);
    userInput.addEventListener("keydown", e => {
        if (e.key === "Enter") handleSend();
    });

    addMessage("🐝 Hi! I'm ScriptBees Assistant. Ask me anything!", false);
});
