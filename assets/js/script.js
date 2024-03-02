alert("Esta página está en construcción, actualmente no lleva ni el 20% de lo que se planea. Por favor no considerar como proyecto completo hasta entonces");

var pfps = [
"./assets/media/Images/pfps/pfp1.jpeg",
"./assets/media/Images/pfps/pfp2.jpg",
"./assets/media/Images/pfps/pfp3.png",
"./assets/media/Images/pfps/pfp4.jpeg",
"./assets/media/Images/pfps/pfp5.jpeg",
"./assets/media/Images/pfps/pfp6.jpeg",
"./assets/media/Images/pfps/pfp7.jpeg",
"./assets/media/Images/pfps/pfp8.jpeg",
"./assets/media/Images/pfps/pfp9.jpeg",
"./assets/media/Images/pfps/pfp10.jpeg",
"./assets/media/Images/pfps/pfp11.jpeg"

]

function pickRandom(warray){
    var randomNumber = Math.floor(Math.random() * warray.length);
    return warray[randomNumber];
}

function changephoto(){
    document.getElementById('pfp').src = pickRandom(pfps)
}