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
	var h1 = document.createElement('h1');
	subContainer.appendChild(h1);
	h1.innerHTML = car.make;
	var h2 = document.createElement('h2');
	subContainer.appendChild(h2);
	h2.innerHTML = car.model;
	var p1 = document.createElement('p');
	// p1.setAttribute('class','bio');
	subContainer.appendChild(p1);
	p1.innerHTML = car.description;
	// var imageurl = document.createElement('img');
	// subContainer.appendChild(imageurl);
	// imageurl.setAttribute("src", persona.image);
	var article = document.createElement('article')
	subContainer.appendChild(article);
	article.innerHTML = `${car.year}-$${car.price}`;
// When you click on one of the person elements, a dotted border should appear around it.
		subContainer.addEventListener("click", function()
		{
			var divId = this.id;
			toggleBorder(divId);
		})
})
}
function toggleBorder(id)
{
	for(let i=0; i<main.childElementCount-1; i++)
	{
		let currentDiv = document.getElementById(i);
		console.log(currentDiv);
		if(currentDiv.classList.contains('border'))
			currentDiv.classList.remove('border');
	}
	var thisDiv = document.getElementById(id);
	thisDiv.classList.toggle('border');
	if(thisDiv.classList.contains('border'))
	{
		document.getElementById('input').focus();
		document.getElementById('input').addEventListener("keypress", function()
		{
			if(event.keyCode == 13)
			{
			// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
				document.getElementById('input').value = " ";		
			}
			else
			{
				for(let i=0; i<main.childElementCount-1; i++)
				{
					let currentDiv = document.getElementById(i);
					// console.log(currentDiv);
					if(currentDiv.classList.contains('border'))
					{
						let p1 = document.getElementsByTagName('p');
						console.log(p1[i]);
						console.log(p1[i].innerHTML);
						p1[i].innerHTML += String.fromCharCode(event.keyCode);
					}
				}
				// console.log(id);
				
				// console.log(p1.innerHTML);
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