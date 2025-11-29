const keyInput = document.getElementById("keyInput");
const goBtn = document.getElementById("goBtn");
const subtitle = document.querySelector(".subtitle");
const bgm = document.getElementById("bgm");

// Reproducir música si se puede
bgm.volume = 0.4;
bgm.play().catch(() => {});

// Activar música con primer click
document.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play().catch(() => {});
    }
}, { once: true });

// --- Mostrar advertencia estilo SUITAI ---
function showWarning(msg) {
    const original = "PLEASE ENTER A KEY";
    subtitle.textContent = msg;
    setTimeout(() => {
        subtitle.textContent = original;
    }, 1500);
}

// Advertencia inicial
setTimeout(() => { 
    showWarning("TAP ANYWHERE TO ENABLE MUSIC"); 
}, 300);

// --- Sistema de keys ---
const validKeys = {
    "A9F3K7PLB2XZ8QWC": "https://www.youtube.com/watch?v=xvFZjo5PgG0"

};

// Añadir más keys:
// validKeys["1234567890ABCDEF"] = "https://tulink.com";

goBtn.addEventListener("click", () => {
    const key = keyInput.value.trim();

    if (!/^[a-zA-Z0-9]{16}$/.test(key)) {
        showWarning("KEY MUST BE 16 ALPHANUMERIC");
        return;
    }

    if (!validKeys[key]) {
        showWarning("INVALID KEY");
        return;
    }

    window.location.href = validKeys[key];
});