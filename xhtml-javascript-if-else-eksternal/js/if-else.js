var iAge;
var sMF;

iAge = prompt("Please enter you age in years.", 0);
sMf  = prompt("Are you a (M)ale or (F)emale?", "M");

if (iAge > 20) {
    if (sMF == "M") {
        alert("You are a male over 20 years of age");
    } else {
        alert("You are a Famale over 20 years of age");
    }
} else {
    if (sMF == "M") {
        alert("You are a male under the age of 21");
    } else {
        alert("You are famale under the age of 21"); 
    }
}