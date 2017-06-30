var CarLot = (function (globalScopeCarLot) { 
var dom ={};
var main = document.getElementById('container');
var navbar = document.getElementById('navbar');
navbar.setAttribute('class','col-md-12');
var textElement = document.createElement('input');
textElement.setAttribute('type','text');
textElement.setAttribute('id','input');
textElement.setAttribute('class', 'col-md-auto');
navbar.appendChild(textElement);
var counter = 0;
let cars = CarLot.Inventory.getCarLot();
var temp;
dom.displayToDom = function()
{
	cars.forEach(function(car)
	{	
		if(counter%3 === 0)
		{
			var rowDiv = document.createElement('div');
			rowDiv.setAttribute('class','row');
			main.appendChild(rowDiv);
			temp = rowDiv;
		}
	// Beneath that, create a container, block element in your DOM.
	var subContainer = document.createElement('div');
	subContainer.setAttribute('class', 'subContainer col-md-3');
	// subContainer.setAttribute('class', 'col-md-4');
	subContainer.setAttribute('id', counter);
	counter++;
	temp.appendChild(subContainer);

	// Create a DOM element for each of the objects inside the subContainer. Style your person elements however you like.
	var header = document.createElement('header');
	subContainer.appendChild(header);
	header.innerHTML = `<h3>${car.make}</h3><h4>${car.model}</h4>`;
	var imgDiv = document.createElement('div');
	imgDiv.setAttribute('class','imageDiv');
	subContainer.appendChild(imgDiv);
	var img = document.createElement('img');
	img.setAttribute('src',car.url);
	imgDiv.appendChild(img);
	// subContainer.appendChild(h2);
	// h2.innerHTML = car.model;
	var p1 = document.createElement('p');
	// p1.setAttribute('class','bio');
	subContainer.appendChild(p1);
	p1.innerHTML = car.description;
	// var imageurl = document.createElement('img');
	// subContainer.appendChild(imageurl);
	// imageurl.setAttribute("src", persona.image);
	var article = document.createElement('article')
	subContainer.appendChild(article);
	article.innerHTML = `<span class="bolder">Model Year:</span>${car.year}`;
	var article = document.createElement('article')
	subContainer.appendChild(article);
	article.innerHTML = `<span class="bolder">Price:</span>$${car.price}`;
// When you click on one of the person elements, a dotted border should appear around it.
		subContainer.addEventListener("click", function()
		{
			var divId = this.id;
			console.log()
			toggleBorder(divId,rowDiv);
		})
})
}
function toggleBorder(id, rowDiv)
{
	for(let i=0; i<cars.length; i++)
	{	
		let currentDiv = document.getElementById(i);
		// console.log(currentDiv);
		if(currentDiv.classList.contains('border'))
			currentDiv.classList.remove('border');
	}
	var thisDiv = document.getElementById(id);
	thisDiv.classList.toggle('border');
	if(thisDiv.classList.contains('border'))
	{
		var inputText =document.getElementById('input');
		inputText.focus();
		inputText.addEventListener("keyup", function()
		{
			if(event.keyCode == 13)
			{
			// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
				document.getElementById('input').value = " ";		
			}
			else if(event.keyCode>31 && event.keyCode<128 || event.keyCode === 8)
			{
				for(let i=0; i<cars.length; i++)
				{
					let currentDiv = document.getElementById(i);
					if(currentDiv.classList.contains('border'))
					{
						let p1 = document.getElementsByTagName('p');
						if(event.keyCode === 8 )
						{
							p1[i].innerHTML = p1[i].innerHTML.slice(0,-1);
						}
						else
						{
							// var msg = "";
							 msg =inputText.value;
							 var msgLength = inputText.value.length;
							 p1[i].innerHTML += msg.charAt(msgLength-1);
						}
					}
				}
			}
		})
	}
	else
	{
		document.getElementById('imput').blur();
	}
}
globalScopeCarLot.dom = dom;
return globalScopeCarLot;
})(CarLot || {});