// const API_URL = "https://backend-chatbot-32sc.onrender.com";
// let API_KEY = "X2Cli1ZSPhHHAHlfZkOEPRWIqtd1TQD9ErH705-HMc4";

// const chatMessages = document.getElementById('chat-container');
// const userInput = document.getElementById('user-input');
// const sendButton = document.getElementById('send-btn');

// // Keep for future
// // function speakText(text) { }

// function addMessage(text, isUser = false, sources = null, isError = false) {
//     const msg = document.createElement("div");
//     msg.className = `message ${isUser ? "user" : "bot"}`;

//     const content = document.createElement("div");
//     content.innerHTML = text.replace(/\n/g, "<br>");

//     if (sources) {
//         sources.forEach(s => {
//             content.innerHTML += `<br><br><a href="${s}" target="_blank">📌 ${s}</a>`;
//         });
//     }

//     msg.appendChild(content);
//     chatMessages.appendChild(msg);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// async function sendQuery(question) {
//     const res = await fetch(`${API_URL}/api/ask`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-API-Key": API_KEY
//         },
//         body: JSON.stringify({ question })
//     });

//     if (!res.ok) throw new Error("Server Error");
//     return await res.json();
// }

// async function handleSend() {
//     const q = userInput.value.trim();
//     if (!q) return;

//     addMessage(q, true);
//     userInput.value = "";

//     try {
//         const data = await sendQuery(q);
//         addMessage(data.answer, false, data.sources);
//     } catch (e) {
//         addMessage("⚠️ " + e.message, false, null, true);
//     }
// }

// sendButton.onclick = handleSend;
// userInput.onkeydown = (e) => {
//     if (e.key === "Enter") handleSend();
// };

// addMessage("🐝 Hi! I'm ScriptBees Assistant.", false);
const API_URL = "https://backend-chatbot-1-e8bk.onrender.com";
let API_KEY = "X2Cli1ZSPhHHAHlfZkOEPRWIqtd1TQD9ErH705-HMc4";

const chatMessages = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

function addMessage(text, isUser = false, sources = null, isError = false) {
    const msg = document.createElement("div");
    msg.className = `message ${isUser ? "user" : "bot"}`;

    let html = text.replace(/\n/g, "<br>");

    if (sources?.length) {
        html += "<br><br><b>📌 Sources:</b><br>" + sources.map(s=>`<a href="${s}" target="_blank">${s}</a>`).join("<br>");
    }

    msg.innerHTML = html;

    if (isError) msg.style.color = "red";

    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendQuery(question) {
    const res = await fetch(`${API_URL}/api/ask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": API_KEY
        },
        body: JSON.stringify({ question })
    });

    if (!res.ok) throw new Error("Server error");

    return res.json();
}

async function handleSend() {
    const q = userInput.value.trim();
    if (!q) return;

    addMessage(q, true);
    userInput.value = "";

    try {
        const result = await sendQuery(q);
        addMessage(result.answer, false, result.sources);

    } catch (e) {
        addMessage("⚠️ " + e.message, false, null, true);
    }
}

sendButton.onclick = handleSend;
userInput.onkeydown = (e) => { if (e.key === "Enter") handleSend(); };

addMessage("🐝 Hi! I'm ScriptBees Assistant. Ask me anything!", false);

