const colors = [
    ["#ff0000", "#ff5500", "#ffaa00", "#ffee00"],
    ["#ff0088", "#ff66aa", "#ffcc66", "#ccff66", "#66ff66"],
    ["#cc00ff", "#9966ff", "#66ccff", "#00ccff", "#00ffaa", "#00ff66"],
    ["#6600ff", "#3366ff", "#0099ff", "#00cc99", "#66cc33"],
    ["#0033ff", "#0066cc", "#3399cc", "#66cccc"]
];

const palette = document.getElementById("palette");
const preview = document.getElementById("preview");
const text = document.getElementById("color");
const generateBtn = document.querySelector("button");
const histList = document.createElement("div");
histList.id = "histList";
document.getElementById("hiscolors").appendChild(histList);

let history = [];

function generateRandomHex() {
    const chars = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
}

function addToHistory(color) {
    history.unshift(color);
    if (history.length > 20) {
        history.pop();
    }
    renderHistory();
}

function renderHistory() {
    histList.innerHTML = "";
    history.forEach(color => {
        const sq = document.createElement("div");
        sq.className = "hist-sq";
        sq.style.background = color;
        sq.title = color;
        sq.addEventListener("click", () => selectColor(color));
        histList.appendChild(sq);
    });
}

function selectColor(color) {
    document.querySelectorAll(".hex").forEach(h => h.classList.remove("selected"));
    preview.style.background = color;
    text.textContent = color;
    addToHistory(color);
}

colors.forEach((list, index) => {
    const row = document.createElement("div");
    row.className = "row";
    if (index % 2) {
        row.classList.add("offset");
    }

    list.forEach(color => {
        const hex = document.createElement("div");
        hex.className = "hex";
        hex.style.background = color;

        hex.addEventListener("click", () => selectColor(color));

        row.appendChild(hex);
    });

    palette.appendChild(row);
});

generateBtn.addEventListener("click", () => {
    const newColor = generateRandomHex();
    preview.style.background = newColor;
    text.textContent = newColor;
    addToHistory(newColor);
});

renderHistory();