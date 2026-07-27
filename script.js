const colors=[
    ["#ff0000","#ff5500","#ffaa00","#ffee00"],
    ["#ff0088","#ff66aa","#ffcc66","#ccff66","#66ff66"],
    ["#cc00ff","#9966ff","#66ccff","#00ccff","#00ffaa","#00ff66"],
    ["#6600ff","#3366ff","#0099ff","#00cc99","#66cc33"],
    ["#0033ff","#0066cc","#3399cc","#66cccc"]
    ];
    
    const palette=document.getElementById("palette");
    const preview=document.getElementById("preview");
    const text=document.getElementById("color");
    
    colors.forEach((list,index)=>{
     const row=document.createElement("div");
     row.className="row";
     if(index%2) row.classList.add("offset");
    
     list.forEach(color=>{
       const hex=document.createElement("div");
       hex.className="hex";
       hex.style.background=color;
    
       hex.addEventListener("click",()=>{
          document.querySelectorAll(".hex").forEach(h=>h.classList.remove("selected"));
          hex.classList.add("selected");
          preview.style.background=color;
          text.textContent=color;
       });
    
       row.appendChild(hex);
     });
    
     palette.appendChild(row);
    });