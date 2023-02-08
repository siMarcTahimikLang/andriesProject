//var x=5;
//var  y=10;
//var sum = x * y;

//document.write(sum);



//var name= "marc",age = 21, isSingle = true;

//document.write(namee + "" + age +"<br>");
//document.write(isSingle);


//const a=3.45;
//console.log(a);

/*var a="Let's have a cup of coffee.";
var b=' He said "Hello" and left.';
var c='We\'ll never give up.';

document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(c);


document.write("<br>");

var a= 25;
var b= 80.5;
var c= 4.25e6;
var d= 4.25e-6;

document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(c);
document.write("<br>");
document.write(d);

document.write("<br>");
var andrie= "firstname: Marc Andrie, Middlename: J, Surname: Verial"

document.write(andrie);*/

/*var TotalPriceDisplay = function(){

    var Total_Price = parseInt(document.getElementById("Beans").value) + parseInt(document.getElementById("Metal").value);

    return alert("Total Price" + Total_Price);
}*/

var total_pricePeso = function(){

    var total_pricemb = document.getElementById("mb").value *100;
    var total_pricesmt = document.getElementById("smt").value *20;

    var total_pricePeso = total_pricemb+total_pricesmt;
    return alert("Total Price: Php" +total_pricePeso)
}