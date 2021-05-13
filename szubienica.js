var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

var dlugosc = password.length;

var password1 ="";

for (i=0; i<dlugosc; i++)
{
    // we couldent use index [i] we have to use .charAt diffrent flection
    if (password.charAt(i) == " ") password1 =password1 + " ";
    else password1 =password1 + "-";
}


function wypisz_haslo()
    {
        document.getElementById("bord").innerHTML= password1;
    }

window.onload = start;


function start()
    {
        var value_div = "";
        
        document.getElementById("alphabet").innerHTML = "kdsmlvk"
        wypisz_haslo();
    }