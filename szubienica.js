var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

var dlugosc = password.length;
var false_guess =0;

var correct_answer = new Audio("yes.wav");
var incorrect_answer = new Audio("no.wav");

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

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start()
    {
        var value_div = "";
              
        for (i=0; i<=34; i++)
        {
            var element ="lit"+i;
            value_div = value_div +'<div class = "litera" onclick="check('+i+')" id = "'+element+'" >'+letters[i]+'</div>'
            if ((i+1) %7==0) value_div=value_div+'<div style="clear:both;"></div>'
        }

        document.getElementById("alphabet").innerHTML = value_div;
        wypisz_haslo();
    }

    String.prototype.replace_lether = function(place, lether)
    {
        if (place> this.length -1) return this.toString();
        else return this.substr(0, place) + lether + this.substr(place+1);
    }

    function check(nr)
    {
        // print on screan allert
        // alert(nr);
        // flag
        var flag_exist = false

        for(i=0; i<dlugosc; i++)
        {
            if(password.charAt(i) == letters[nr])
            {
                //alert(i);
                password1 = password1.replace_lether(i, letters[nr]);
                flag_exist = true;
            }
        }
        if(flag_exist == true)
        {
            incorrect_answer.load()
            correct_answer.play();
            var element ="lit"+nr;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid #00C000";
            document.getElementById(element).style.cursor = "default";
            wypisz_haslo()
        }
        else
        {
            incorrect_answer.load()
            incorrect_answer.play();
            var element ="lit"+nr;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "red";
            document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute('onclick', ";");

            // skucha
            //false_guess =false_guess+1;
            false_guess++;
            var picture = "img/s"+false_guess+".jpg"
            document.getElementById("hangman").innerHTML = '<img src="'+picture+'" alt=""/>'
        }

        //wygrana
        if (password1 == password)
        document.getElementById("alphabet").innerHTML = "Gratulacje odgadles <br></br>"+ password + 
        '<br></br><span class="reset"onclick="location.reload()"> Zagraj jeszcze raz</span>'

        if (false_guess>=9)
        document.getElementById("alphabet").innerHTML = "Przegrałeś hasło to: <br></br>"+ password + 
        '<br></br><span class="reset"onclick="location.reload()"> Zagraj jeszcze raz</span>'
    }