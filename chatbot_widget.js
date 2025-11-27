(function () {
  const widget = document.createElement("div");
  widget.id = "scriptbees-chatbot";
  widget.style.position = "fixed";
  widget.style.bottom = "20px";
  widget.style.right = "20px";
  widget.style.width = "400px";
  widget.style.height = "600px";
  widget.style.maxWidth = "95vw";
  widget.style.maxHeight = "80vh";
  widget.style.borderRadius = "14px";
  widget.style.boxShadow = "0px 4px 18px rgba(0,0,0,0.25)";
  widget.style.overflow = "hidden";
  widget.style.display = "none";
  widget.style.zIndex = "9999";

  widget.innerHTML = `
      <iframe src="https://frontend-chatbot-git-main-chintha-sowmyas-projects.vercel.app" 
              style="width:100%;height:100%;border:none;border-radius:14px;">
      </iframe>
  `;

  const toggle = document.createElement("button");
  toggle.id = "chat-toggle";
  toggle.innerHTML = "🐝";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.width = "60px";
  toggle.style.height = "60px";
  toggle.style.borderRadius = "50%";
  toggle.style.border = "none";
  toggle.style.background = "#009688";
  toggle.style.color = "#fff";
  toggle.style.fontSize = "28px";
  toggle.style.boxShadow = "0px 4px 14px rgba(0,0,0,0.3)";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = "10000";

  let open = false;
  toggle.onclick = () => {
    open = !open;
    widget.style.display = open ? "block" : "none";
    toggle.innerHTML = open ? "✕" : "🐝";
  };

  document.body.appendChild(widget);
  document.body.appendChild(toggle);
})();
