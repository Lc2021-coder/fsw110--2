var h1= document.createElement("h1");
h1.textContent="Welcome to my JS site";
document.body.appendChild(h1);

var ol=document.createElement("ol");
document.body.appendChild(ol);

var li= document.createElement("li");
li.textContent="The amazing things JS can do!";
ol.appendChild(li);

var li2=document.createElement("li");
li2.textContent="Javascript has lots tools for developers!";
ol.appendChild(li2);

var li3=document.createElement("li");
li3.textContent="HTML, CSS and Javascript make coding fun.";
ol.appendChild(li3);

var p=document.createElement("p");
p.textContent="All of this was created with Javascript";
document.body.appendChild(p);

