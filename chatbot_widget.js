(function () {
    const backendUrl = "https://backend-chatbot-32sc.onrender.com"; // your backend
    const frontendUrl = "frontend-chatbot-lac.vercel.app";   // your frontend

    // --------------------------
    // Create Floating Button
    // --------------------------
    const btn = document.createElement("div");
    btn.id = "sb-chatbot-btn";
    btn.innerHTML = "💬";
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 65px;
        height: 65px;
        background: #00a878;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        cursor: pointer;
        z-index: 999999;
        box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        transition: 0.2s;
    `;
    document.body.appendChild(btn);

    // --------------------------
    // Create Chat Window
    // --------------------------
    const win = document.createElement("div");
    win.id = "sb-chatbot-window";
    win.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 400px;
        height: 550px;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        display: none;
        z-index: 999999;
        box-shadow: 0 6px 28px rgba(0,0,0,0.35);
    `;
    win.innerHTML = `
        <iframe 
            src="${frontendUrl}/embed.html" 
            style="border:none;width:100%;height:100%;"
        ></iframe>
    `;
    document.body.appendChild(win);

    // --------------------------
    // Toggle Behavior
    // --------------------------
    let open = false;
    btn.addEventListener("click", () => {
        open = !open;
        win.style.display = open ? "block" : "none";
        btn.innerHTML = open ? "✕" : "💬";
    });
})();
