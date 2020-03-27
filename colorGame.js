var num=6
var colors = generate(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pick();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#mess");
var h1 = document.querySelector("h1");
var res = document.querySelector("#res");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num=3;
	var colors = generate(num);
	pickedColor = pick();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		if(colors[i]){ 
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}	

});
hard.addEventListener("click", function()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	var num=6;
	var colors = generate(num);
	pickedColor = pick();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
	
			squares[i].style.display = "block";
		
		
	}	


});



res.addEventListener("click", function()
{
	num=6;
	var colors = generate(num);
	pickedColor = pick();
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors";
	message.textContent= "";
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		
	}	
	h1.style.background = "brown";
});

colorDisplay.textContent = pickedColor;
 
for (var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colors[i];

squares[i].addEventListener("click", function() {
	var clickedColor = this.style.background;
	console.log(clickedColor,pickedColor);
	if(clickedColor === pickedColor) {
		message.textContent="Correct";
		res.textContent="Play Again";
		change(clickedColor);
		h1.style.background = clickedColor;

	} else {
		this.style.background = "#232323";
		message.textContent="Try Again";
	 }

}
)
};

	function change (color)
	{
		for(var i = 0; i < squares.length; i++)
		{
			squares[i].style.background = color;
		}

	}

	function pick ()
	{
		var ra= Math.floor(Math.random() * colors.length);
		return colors[ra];
	}

function generate(n)
	{
		var a=[];
		for(var i = 0; i < n; i++)
		{
			a.push(rand());
		}
		return a;

	}

	function rand()
	{
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
		 return "rgb(" + r + ", " + g + ", " + b + ")";
	}