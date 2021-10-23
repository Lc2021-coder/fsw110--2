var navbar=document.createElement("navbar");
navbar.textContent="This is my navbar";
document.body.appendChild(navbar);

var h1=document.createElement("h1");
h1.textContent="This is a h1 tag";
document.body.appendChild(h1);

var p=document.createElement("p");
p.textContent="This is my paragraph. Paragraphs should be about 5 sentences. You can write about anything in your paragraph.";
document.body.appendChild(p);

var ol=document.createElement("ol");
document.body.appendChild(ol);

var li=document.createElement("li");
li.textContent="This is list one";
ol.appendChild(li);


var li=document.createElement("li");
li.textContent="This is list two";
ol.appendChild(li);

var footer=document.createElement("footer");
footer.textContent="This is a footer";
document.body.appendChild(footer);
