let h2Elements=["one","two","three","four","five"];

for(let i=0; i<h2Elements.length; i++){
var h2=document.createElement("h2");
   h2.textContent=h2Elements[i];
   h2.style.fontSize="20px";
   h2.style.fontWeight="lighter";
   h2.style.fontFamily="sans-serif";
   h2.style.color="cornflowerblue";

   h2.classList.add("border");
   document.body.append(h2);

}


