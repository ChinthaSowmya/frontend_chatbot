(function () {

    const frontendUrl = "https://frontend-chatbot-git-main-chintha-sowmyas-projects.vercel.app";

    const btn = document.createElement("div");
    btn.id = "sb-chat-btn";
    btn.innerHTML = "💬";
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 65px;
        height: 65px;
        background:#0c8a4a;
        color:white;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:28px;
        cursor:pointer;
        z-index:999999;
        box-shadow:0 6px 18px rgba(0,0,0,0.25);
    `;
    document.body.appendChild(btn);

    const win = document.createElement("div");
    win.id = "sb-chat-window";
    win.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 400px;
        height: 600px;
        background:white;
        border-radius:14px;
        overflow:hidden;
        display:none;
        z-index:999999;
        box-shadow:0 6px 25px rgba(0,0,0,0.3);
    `;
    win.innerHTML = `
        <iframe src="${frontendUrl}/embed.html"
        style="width:100%;height:100%;border:none;"></iframe>
    `;
    document.body.appendChild(win);

    let open = false;
    btn.onclick = () => {
        open = !open;
        win.style.display = open ? "block" : "none";
        btn.innerHTML = open ? "✖" : "💬";
    };

})();
