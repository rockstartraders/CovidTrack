$(document).ready(function(){
	$('#select1').select2();
	
	
})


// https://documenter.getpostman.com/view/4876530/SzRxUpPv?version=latest
//https://disease.sh/v2/countries/hk

var kon = document.getElementById("kon");  // Confirm number
var rek = document.getElementById("rek");  // recover number
var oww = document.getElementById("oww");  // ded number
var updated = document.getElementById("updated");  // para date ng update
var abangwan = document.getElementById("abangwan");  // para confirm sub cases
var abangtwon = document.getElementById("abangtwon");  // para active sub cases
var abangtres = document.getElementById("abangtres");  // para ded sub sub cases
var abangkwatro = document.getElementById("abangkwatro");  
var abangwana = document.getElementById("abangwana");  



var plag = document.getElementById("plag");  // flag image
var popul = document.getElementById("popul");  // total popul
var deyt = document.getElementById("deyt"); 
var kahaponito = document.getElementById("kahaponito"); 
var errorto = document.getElementById("errorto"); 


// number convert 
var konvert = new Intl.NumberFormat('en');
// var konvertuli = new Intl.NumberFormat('en',{ notation: "compact" , compactDisplay: "short" });


//section ito
var two = document.getElementById("two"); 
var una = document.getElementById("una"); 


// yung apat itlog dito

var deyt = document.getElementById("deyt"); 
var confirma = document.getElementById("confirm");  // confirm block
var recover = document.getElementById("recover");  // recover block
var ded = document.getElementById("ded");  // ded block










// onload function  ito

function lowd(){ 
	fetch('https://covid-simple.satyawikananda.tech/api/world') // rejects
    .then(function(response) {
      if (response.status !== 200) {
        // make the promise be rejected if we didn't get a 200 response
	   throw new Error("Not 200 response");      
	  
        
      }            
  
    
      else {
	  
	  
	  this.world();
	  this.kahapon();
	  
       //  alert('What its working') // go the desired response
        // if you want to call a function outside
      }}).catch(function(err) {	 
	
		this.err();		
    
     
});

}  // end of lowd function

// datos pag else ang sagot 
function world(){

	fetch('https://covid-simple.satyawikananda.tech/api/world')
	.then((resp) => resp.json()) // Transform the data into json
	.then( data => { 
		
		errorto.style.display="none";
		plag.style.display="none";
		popul.style.display="none";

		var a = data.totalCases; // total cases
		var ab = data.recovered; // total recovered
		var ac = data.deaths; // total deaths
		var ad = data.lastUpdate; // updated date to be converted later
		//var ae = data.activeCases;
		//var af = data.closedCases;

		//Binura ko ang active cases at closed sakit sa mata eh
	

		countrydetails.innerHTML="Global Summary";
		kon.innerHTML= a;
		rek.innerHTML= ab;
		oww.innerHTML= ac;
		updated.innerHTML = "</br>" +  moment(ad).format('LLL').fontcolor("#EC826A")  + "</br>" + "Last Update ";
		//abangwan.innerHTML = ("Active Cases: " + ae);
		//abangtwon.innerHTML = ("Closed Cases: " + af);
		//abangtres.innerHTML = "<br/>";		

		

	})	
} // end of world function

// para catch ng world 
function err(){	


	
    
	confirma.style.display = "none";	 
	recover.style.display = "none"; 
	ded.style.display = "none";
	deyt.style.display = "none"; 
		   
	
	setTimeout(function(){
		alert('Sorry Unable to get the data needed, Please try again later or try to search for a different country..');
        countrydetails.innerHTML="Sorry An Error Occurred".fontcolor("#CC3333");
	},2000);
	 

	

}// end of err function




// value ng select 
var balyu = document.getElementById("select1").value;


function infofetch(){


this.flagy();
this.grab();




	
    
}

//flag function muna
function flagy(){

 var balyu = document.getElementById("select1").value; 
 
 plag.style.display = "block";
 popul.style.display = "block";
 
 var ba = "https://www.countryflags.io/" + balyu + "/shiny/64.png";
 var bb = '<img src="'+ ba +'" />'
 
 plag.innerHTML = bb; 



 //fetch('https://restcountries.eu/rest/v2/alpha/' + balyu)
 fetch('https://disease.sh/v2/countries/' + balyu)
	.then((resp) => resp.json()) // Transform the data into json
	.then( data => { 

		var bc = data.country;
		var bd = data.population;

		countrydetails.innerHTML = bc;
		popul.innerHTML = ("-Population of " + konvert.format(bd).fontcolor("#FFEEAA") + "<br>" + "<br>");

		
		

		

	})	
	
} // end of flagy



// start ng grab data function 

function grab(){ 

	var balyu = document.getElementById("select1").value;
	var bansa = document.getElementById("countrydetails").textContent;
	var bansag = bansa.toString();

	//fetch('https://covid19.mathdro.id/api/countries/' + balyu) // rejects
	fetch('https://disease.sh/v2/countries/' + balyu) // rejects
    .then(function(response) {
      if (response.status !== 200) {
        // make the promise be rejected if we didn't get a 200 response
	   throw new Error("Not 200 response");        
	  
        }            
  
    
      else {
		this.datos();

	  
      }}).catch(function(err) {	 	
		  
		// mangyayari pag tapos ng error
		alert("Sorry we are unable to fetch the data for this country because it is not present via J.H.U Database or possible that this country doesn't have a COVID-19 reported case yet.");
		errorto.innerHTML="No records found";
		errorto.style.display="block";	
		updated.style.display = "none"; 
		confirma.style.display = "none";	 
		recover.style.display = "none"; 
		ded.style.display = "none";
		deyt.style.display = "none"; 
		
		   
      
});

}  // end of grab function


// sagot sa data pag tama 

function datos(){

	
	var balyu = document.getElementById("select1").value;

	fetch('https://disease.sh/v2/countries/' + balyu)
	.then((resp) => resp.json()) // Transform the data into json
	.then( data => { 

		// ibalik ang nawala 


		
		errorto.style.display="none";	 
		updated.style.display = "block"; 
		confirma.style.display = "block";	 
		recover.style.display = "block"; 
		ded.style.display = "block";		
		//deyt.style.display = "block"; 

        // data grab
		 
		var ca = data.updated;  // date 	naka epoch pa ito	
		var cb = data.cases;  // confirmed cases
		var cd = data.recovered; // recovered cases
		var ce = data.deaths; // deds cases


		var zz = data.todayCases;
		var qwr = data.active;
		var pop = data.tests;
		var zzz = data.todayDeaths;
		var zzzz = data.critical;

		// kulay 

		var ty = konvert.format(zz).toString().fontcolor("#FFEEAA");
		var yyt = konvert.format(qwr).toString().fontcolor("#FFEEAA");
		var tty = konvert.format(zzz).toString().fontcolor("#e53935");  // red
		var popi = konvert.format(pop).toString().fontcolor("#FFEEAA");
		var ttyy = konvert.format(zzzz).toString().fontcolor("#f44336"); // crtitical



		// plus color 
		
		var plas = ("+").fontcolor("#00CCCC");
		


		// data post 

		updated.innerHTML = "</br>" + moment(ca).format('LLL').fontcolor("EC826A") + "</br>" + "Last Update ";
		kon.innerHTML = "<br>" + konvert.format(cb); 
		rek.innerHTML = "<br>" + konvert.format(cd);
		oww.innerHTML = "<br>" + konvert.format(ce);		
		abangwan.innerHTML = "New Cases " + plas + ty;
		abangwana.innerHTML = "Active Cases " + yyt;
		abangtwon.innerHTML = "Number of Tested " + popi + "</br></br>";
		abangtres.innerHTML = "New Deaths " + plas + tty;
		abangkwatro.innerHTML = "Critical " + ttyy;

		


	
	
		

	})	
} // end of datos function

function kahapon(){

	var x = new Date();

var a = x.getMonth() +1;
   if(a <=9 ){
      var a = ("0" + a);  }
   else{
     (a);
   } 


var b = x.getDate()-2;
   if(b <=9 ){
      var b = ("0" + b);  }
   else{
     (b);
   } 

  var c =  x.getFullYear();


  

  var d = (c + "-" + a + "-" + b);
  var e = d.toString();

  kahaponito.innerHTML = e;  


} // end of function kahapon


	

// dump 



function getcon(){

	abangwan.style.display="none";
	
	var balyu = document.getElementById("select1").value;
	
	fetch('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/history?ab=' + balyu +'&status=Confirmed')
	.then((resp) => resp.json()) // Transform the data into json
	.then( data => { 
	  
	  try{
		
		var gsquare = document.getElementById("kahaponito").textContent; 
		var ga = data;
		var gb = JSON.stringify(ga);
		var gc = JSON.parse(gb);
	
		var gd = (gc.All.dates[gsquare]);  // answer kahapon
		var ge = kon.textContent;
		var gf = ge.replace(/\D/g, "");  // regex only numbers 
	
		var minggegf = (parseFloat(gf) - parseFloat(gd));
		var mingming = konvert.format(minggegf).toString();
	
		var plas = ("+").fontcolor("#00CCCC");
		var cobra = mingming.fontcolor("#FFEEAA");
		
		
	
		
	   if (minggegf > gd){
		abangwan.style.display="block";
		//abangwan.innerHTML=("Unable To Fetch Previous data");
		abangwan.innerHTML=("</br>");
		
		
		 
		}
		
		else if(minggegf <= 0){
			abangwan.style.display="block";
			abangwan.innerHTML=("</br>");
			
	
		} 
	  
	  else{  
		abangwan.style.display="block";
		abangwan.innerHTML=(plas +  cobra + " From The Previous Count");
		
	   }
	  
	 }catch(err){
		abangwan.style.display="block";
		abangwan.innerHTML=("</br>");
		
	 }
	 
	  
		 });
		  
		  
	
	
	}// end of function getcon
	
	
	
	
	function getrek(){
	
		abangtwon.style.display="none";
		
		var balyu = document.getElementById("select1").value;
		
		fetch('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/history?ab=' + balyu +'&status=Recovered')
		.then((resp) => resp.json()) // Transform the data into json
		.then( data => { 
		  
		  try{
			
			var gsquare = document.getElementById("kahaponito").textContent; 
			var gaa = data;
			var gba = JSON.stringify(gaa);
			var gca = JSON.parse(gba);
		
			var gda = (gca.All.dates[gsquare]);  // answer kahapon
			var gea = rek.textContent;
			var gfa = gea.replace(/\D/g, "");  // regex only numbers 
		
			var minggegfa = (parseFloat(gfa) - parseFloat(gda));
			var mingminga = konvert.format(minggegfa).toString();
		
			var plasa = ("+").fontcolor("#66ff00");
			var cobraa = mingminga.fontcolor("#FFEEAA");
			
			
		
			
		   if (minggegfa > gda){
			abangtwon.style.display="block";
			//abangwan.innerHTML=("Unable To Fetch Previous data");
			abangtwon.innerHTML=("</br>");
			
			
			 
			}
			
			else if(minggegfa <= 0){
				abangtwon.style.display="block";
				abangtwon.innerHTML=("</br>");
				
		
			} 
		  
		  else{  
			abangtwon.style.display="block";
			abangtwon.innerHTML=(plasa +  cobraa + " From The Previous Count");
			
		   }
		  
		 }catch(err){
			abangtwon.style.display="block";
			abangtwon.innerHTML=("</br>");
			
		 }
		 
		  
			 });
			  
			  
		
		
		}// end of function getrek
	
	
	
	
	function haist(){
	
		abangtres.style.display="none";
		
		var balyu = document.getElementById("select1").value;
		
		fetch('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/history?ab=' + balyu +'&status=Deaths')
		.then((resp) => resp.json()) // Transform the data into json
		.then( data => { 
		  
		  try{
			
			var gsquare = document.getElementById("kahaponito").textContent; 
			var gaab = data;
			var gbab = JSON.stringify(gaab);
			var gcab = JSON.parse(gbab);
		
			var gdab = (gcab.All.dates[gsquare]);  // answer kahapon
			var geab = oww.textContent;
			var gfab = geab.replace(/\D/g, "");  // regex only numbers 
		
			var minggegfab = (parseFloat(gfab) - parseFloat(gdab));
			var mingmingab = konvert.format(minggegfab).toString();
		
			var plasab = ("+").fontcolor("#F7653F");
			var cobraab = mingmingab.fontcolor("#FFEEAA");
			
			
		
			
		   if (minggegfab > gdab){
			abangtres.style.display="block";
			//abangwan.innerHTML=("Unable To Fetch Previous data");
			abangtres.innerHTML=("</br>");
			
			
			 
			}
			
			else if(minggegfab <= 0){
				abangtres.style.display="block";
				abangtres.innerHTML=("</br>");
				
		
			} 
		  
		  else{  
			abangtres.style.display="block";
			abangtres.innerHTML=(plasab +  cobraab + " From The Previous Count");
			
		   }
		  
		 }catch(err){
			abangtres.style.display="block";
			abangtres.innerHTML=("</br>");
			
		 }
		 
		  
			 });
			  
			  
		
		
		}// end of function haist
		
	

	
