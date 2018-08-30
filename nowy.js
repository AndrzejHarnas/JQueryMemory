var cards= ["laweczka.jpg","dowcipy.jpg","Plaza_synio.jpg","dowcipy.jpg","tanczace_tesciowe.jpg","tesciowa_kot_ziec.jpg","tesciowa_kot_ziec.jpg","zupka.jpg","tanczace_tesciowe.jpg","zupka.jpg"
,"laweczka.jpg","Plaza_synio.jpg"];

//alert(cards);

//console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function() {revealCard(0);});
c1.addEventListener("click", function() {revealCard(1);});
c2.addEventListener("click", function() {revealCard(2);});
c3.addEventListener("click", function() {revealCard(3);});

c4.addEventListener("click", function() {revealCard(4);});
c5.addEventListener("click", function() {revealCard(5);});
c6.addEventListener("click", function() {revealCard(6);});
c7.addEventListener("click", function() {revealCard(7);});

c8.addEventListener("click", function() {revealCard(8);});
c9.addEventListener("click", function() {revealCard(9);});
c10.addEventListener("click", function() {revealCard(10);});
c11.addEventListener("click", function() {revealCard(11);});

var oneVisible= false;
var turnCounter=0;
var visibleNumber;


function revealCard(nr)
{
	//alert(nr);
	
	var obraz = "url(pictures/" + cards[nr] + ")";	
	$('#c'+nr).css('background-image',obraz);
	$('#c'+nr).addClass('cardA');
	$('#c'+nr).removeClass('card');
	
	if(oneVisible == false) 
	{
		//firstCard
		oneVisible = true;
		visibleNumber=nr;
	}
	else
	{
		//second card
		
		if(cards[visibleNumber] == cards[nr] )
		{
			
			//alert("para");
			setTimeout(function() {hide2cards(nr,visibleNumber)},750);
			
			
		}
		else
		{
			//alert("pudło");
			
		}
		
		
		turnCounter++;
		$('.score').html('Turn counter: '+turnCounter);
		oneVisible = false;
		
		
		
		
		
	}
	

}


function hide2cards(nr1,nr2)
{
	
	$('#c'+nr1).css('opacity','0');
	$('#c'+nr2).css('opacity','0');
	
}