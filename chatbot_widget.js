(function () {
    const backendUrl = "https://backend-chatbot-32sc.onrender.com"; // backend root
    const frontendUrl = "https://frontend-chatbot-5z4zt4itt-chintha-sowmyas-projects.vercel.app"; // full frontend origin

    // Floating Button
    const btn = document.createElement("div");
    btn.id = "sb-chatbot-btn";
    btn.innerHTML = "💬";
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 64px;
        height: 64px;
        background: #0c8a4a;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        cursor: pointer;
        z-index: 2147483647;
        box-shadow: 0 8px 28px rgba(2,10,6,0.45);
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
        background: transparent;
        border-radius: 14px;
        overflow: hidden;
        display: none;
        z-index: 2147483647;
    `;

    // IMPORTANT: use an absolute URL to embed.html
    win.innerHTML = `
        <iframe src="${frontendUrl}/embed.html" style="width:100%;height:100%;border:none;"></iframe>
    `;
    document.body.appendChild(win);

    let open = false;
    btn.addEventListener("click", () => {
        open = !open;
        win.style.display = open ? "block" : "none";
        btn.innerHTML = open ? "✖" : "💬";
    });
})();
