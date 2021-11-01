const names=[
	
	"steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"
]
	
var myh1=document.createElement("h1");
myh1.textContent="Hello World";
document.body.append(myh1);

for (var i=0; i<10; i++) {
	var yourh1=document.createElement("h1");
	yourh1.textContent="Hello World";
        yourh1.style.color="purple";
	document.body.append(yourh1);
}

var ol=document.createElement("ol");
for(var i=0; i<names.length; i++){
	var li=document.createElement("li");
	li.textContent=names[i];
	ol.appendChild(li);
}

document.body.append(ol);



