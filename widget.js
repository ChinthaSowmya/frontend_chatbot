(function () {

    // IMPORTANT — USE CORRECT URLs
    const FRONTEND_URL = "https://frontend-chatbot-5z4zt4itt-chintha-sowmyas-projects.vercel.app";

    // Floating Button
    const btn = document.createElement("div");
    btn.id = "sb-chatbot-btn";
    btn.innerHTML = "💬";
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: #0c8a4a;
        color: white;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 999999;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        transition: 0.2s;
    `;
    document.body.appendChild(btn);

    // Chat Window
    const win = document.createElement("div");
    win.id = "sb-chatbot-window";
    win.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 400px;
        height: 600px;
        border-radius: 16px;
        background: white;
        display: none;
        overflow: hidden;
        z-index: 999999;
        box-shadow: 0px 4px 20px rgba(0,0,0,0.25);
    `;
    win.innerHTML = `
        <iframe 
            src="${FRONTEND_URL}/embed.html"
            style="border:none;width:100%;height:100%;">
        </iframe>
    `;
    document.body.appendChild(win);

    // Button toggle
    let open = false;
    btn.addEventListener("click", () => {
        open = !open;
        win.style.display = open ? "block" : "none";
        btn.innerHTML = open ? "✕" : "💬";
    });

})();
