const colors=[
  ["#003366","#336699","#3366cc","#003399","#000099","#0000cc","#000066"],
  ["#006666","#006699","#0099cc","#0066cc","#0033cc","#0000ff","#3333ff","#333399"],
  ["#669999","#009999","#33cccc","#00ccff","#0099ff","#0066ff","#3366ff","#3333cc","#666699"],
  ["#339966","#00cc99","#00ffcc","#00ffff","#33ccff","#3399ff","#6699ff","#6666ff","#6600ff","#6600cc"],
  ["#339933","#00cc66","#00ffcc","#00ff99","#66ffcc","#66ccff","#99ccff","#9999ff","#9966ff","#9933ff","#9900ff"],
  ["#006600","#00cc00","#00ff00","#66ff99","#99ffcc","#ccffff","#ccccff","#cc99ff","#cc66ff","#ff66ff","#ff00ff","#cc00cc","#660066"],
  ["#336600","#009900","#66ff33","#99ff66","#ccff99","#ffffcc","#ffcccc","#ff99cc","#ff66cc","#ff33cc","#cc0099","#993399"],
  ["#333300","#669900","#99ff33","#ccff66","#ffcc99","#ff9999","#ff6699","#ff3399","#ff66cc","#cc3399","#990099"],
  ["#666633","#99cc00","#ccff33","#ffff66","#ffcc66","#ff9966","#ff6666","#ff0066","#cc6699","#993366"],
  ["#999966","#cccc00","#ffff00","#ffcc00","#ff9933","#ff6600","#ff5050","#cc0066","#660033"],
  ["#996633","#cc9900","#ff9900","#cc6600","#ff3300","#ff0000","#cc0000","#990033"],
  ["#663300","#996600","#cc3300","#993300","#990000","#800000","#993333"],
]

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
    if (color != history[0]) {
        history.unshift(color);
        if (history.length > 20) {
        history.pop();
    }
    renderHistory();
}
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

    navigator.clipboard.writeText(color);

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