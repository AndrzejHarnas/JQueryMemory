var cards= ["laweczka.jpg","dowcipy.jpg","Plaza_synio.jpg","dowcipy.jpg","tanczace_tesciowe.jpg","tesciowa_kot_ziec.jpg","tesciowa_kot_ziec.jpg","zupka.jpg","tanczace_tesciowe.jpg","zupka.jpg"
,"laweczka.jpg","Plaza_synio.jpg","robot.jpg","wnuczek.jpg","robot.jpg","wiedzma.jpg","wnuczek.jpg","lodzik.jpg","lodzik.jpg","wiedzma.jpg"];

var numberLos= [];
var cardsN= [];
var rand = 0;
var exist = true;

var good = new Audio("good.wav");
var bad = new Audio("bad.wav");
var w = new Audio("fanfare10.wav");




for(i=0;i<20;i++)
	{
		rand = Math.round(Math.random()*(cards.length-1));
	    exist = false;
		for(j=0; j< numberLos.length; j++){ if(numberLos[j]==rand) exist=true;}
		if(exist == true){
		 i--; 
		}
		else {
		 numberLos[i] = rand; 
		 cardsN[i] = cards[rand];
		}
	}
console.log(numberLos);
console.log(cardsN);



var c = [];
//alert(cards);

var x =0;


for(i=0;i<=19;i++){
c[i] = document.getElementById('c'+i);	
}

c[0].addEventListener("click", function() {revealCard(0);});
c[1].addEventListener("click", function() {revealCard(1);});
c[2].addEventListener("click", function() {revealCard(2);});
c[3].addEventListener("click", function() {revealCard(3);});
c[4].addEventListener("click", function() {revealCard(4);});
c[5].addEventListener("click", function() {revealCard(5);});
c[6].addEventListener("click", function() {revealCard(6);});
c[7].addEventListener("click", function() {revealCard(7);});
c[8].addEventListener("click", function() {revealCard(8);});
c[9].addEventListener("click", function() {revealCard(9);});
c[10].addEventListener("click", function() {revealCard(10);});
c[11].addEventListener("click", function() {revealCard(11);});
c[12].addEventListener("click", function() {revealCard(12);});
c[13].addEventListener("click", function() {revealCard(13);});
c[14].addEventListener("click", function() {revealCard(14);});
c[15].addEventListener("click", function() {revealCard(15);});
c[16].addEventListener("click", function() {revealCard(16);});
c[17].addEventListener("click", function() {revealCard(17);});
c[18].addEventListener("click", function() {revealCard(18);});	
c[19].addEventListener("click", function() {revealCard(19);});		



var oneVisible= false;
var turnCounter=0;
var visibleNumber;
var lock = false;
var pairsLeft = 10;

function revealCard(nr)
{
	//alert(nr);
	var opacityValue =$('#c'+nr).css('opacity');
	var obraz = "url(pictures/" + cardsN[nr] + ")";	
	
	if(opacityValue !=0 && lock == false && nr!=visibleNumber){
	
	lock = true;
		
	$('#c'+nr).css('background-image',obraz);
	$('#c'+nr).addClass('cardA');
	$('#c'+nr).removeClass('card');
	
	if(oneVisible == false) 
	{
		//firstCard
		oneVisible = true;
		visibleNumber=nr;
		lock = false;
	}
	else
	{
		//second card
		
		if(cardsN[visibleNumber] == cardsN[nr] )
		{
			
			//alert("para");
			setTimeout(function() {hide2cards(nr,visibleNumber)},750);
	        good.play();
			
		}
		else
		{
			//alert("pudło");
			setTimeout(function() {restore2cards(nr,visibleNumber)},750);
			bad.play();
		}
		
		
		turnCounter++;
		$('.score').html('Liczba wykonanych tur: '+turnCounter);
		oneVisible = false;
		
		
	}
	}
	
}


function hide2cards(nr1,nr2)
{
	
	$('#c'+nr1).css('opacity','0');
	$('#c'+nr2).css('opacity','0');
	lock = false;
	pairsLeft--;
	
	if(pairsLeft == 0) {
		$('.board').html('<h1> Wygrałeś !!! <br> Zanlazłeś wszystkie 10 par w trakcie ' + turnCounter + ' tur !  <br> <input type="submit" onclick="reload()" id="test" value="Zagraj jeszcze raz!"></input></h1>');
		w.play();
	}
}

function restore2cards(nr1,nr2)
{
	
	$('#c'+nr1).css('background-image','url(pictures/MTesciowa.jpg)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');
	
	$('#c'+nr2).css('background-image','url(pictures/MTesciowa.jpg)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	
	lock = false;
}


function reload(){
	location.reload();
}











