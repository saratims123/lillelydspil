/*
Note til Simon - dette program er taget af Magnus Elfenbein fra den time hvor jeg ikke var tilstede hvor at i først
begyndte at bruge denne kode, så jeg brugte den til at kunne komme helt tilbage igen.
Resten af koden har jeg selv skrevet (willybanditten self).
Jeg endte ikke med at tilføje spillet men jeg ville ellers gerne, ender muligvis med at arbejde videre på dette program i min fritid.
De eneste jeg har givet rettigheder til at dele mit program er (Sara og Magnus(ved ikke om Magnus bruger det))
*/
let myRec, browserCompatible, pen, direction, displayWord;
var load=1,//Så mine funktioner kun loader en gang (brugt rigtig meget)
 directionbandit=0, //så dest ved hvor den skal placere sig. (hovedsaligt brugt i spiral og hus)
  amount=1, //så spiralen ved at den kan blive større. (næsten kun brugt i spiral, og nogle få andre som fri variabel)
   shape=0, //til at kalde de forskellige funktioner
    chong=0; //øøøøøøøøøh chingchong walla wallah bingbong (fri variabel)
let song1, song2, song3, song4;  //til at kunne ændre sangene.
function setup() {
   //preload gang
   soundFormats('mp3');
   song1 = loadSound('assets/vandmand.mp3');
   song2 = loadSound('assets/weeb.mp3');
   song3 = loadSound('assets/shrok.mp3');
   song4 = loadSound('assets/osu.mp3');

    cnv = createCanvas(400, 400);
    background('cyan');
    //Check browser compatibility
    browserCompatible = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;
    //If compatible browser - instantiate 
    if (browserCompatible !== undefined) {
        myRec = new p5.SpeechRec();
        myRec.continuous = true;
        myRec.interimResults = true;
        myRec.onResult = showResult;
        myRec.start();
    }
    displayWord = createDiv();

//objektet ni som er den lille bold vi ser flyve rundt.
     ni = {
        x: width / 2,
        y: height / 2,
        size: 6,
        col: color(255, 255, 255, 150),
        show: function () {
            fill(this.col)
            ellipseMode(CENTER)
            ellipse(this.x, this.y, this.size, this.size)
        },
        bounce: function(){
       // if(ni.x < 0){
     // ni.x = 0;

            
        }
        }
//objektet dest som er det punkt som ni flyver hen til Pog
    dest = {
      
     x: ni.x, 
     y: ni.y,
    //funktion der gør at hvis dest er anderledes end ni flyver ni over til dest.
     move : function(){
       if (ni.x < dest.x){
         ni.x++;
       } if (ni.x > dest.x){
        ni.x--;
      } if (ni.y < dest.y){
        ni.y++;
      } if (ni.y > dest.y){
        ni.y--;
      }
      //hovedfunktion til spiral og hus.
      //Når ni rammer dest vil direktionbandit blive større og næste punkt (dest) vil blive sat
      if (dest.x==ni.x && dest.y==ni.y && load==0){
        directionbandit++;
        load=1;
        }
      //når den rammer det sidste punkt og vi skal resette (spiral)
      if (directionbandit<=0){
        dest.x=ni.x;
        dest.y=ni.y;
        directionbandit=1;}
     }
     //spiralen som er en fuldstændig Pog funktion
     ,spiral : function(){
      if (directionbandit>=5){
        directionbandit=1;
      }
    if (directionbandit==1 && load==1){
    dest.x=ni.x+(ni.size/3*amount);
    dest.y=ni.y+(ni.size/3*amount);
    load=0;
    amount++;}
  
    if (directionbandit==2 && load==1){
      dest.x=ni.x+(ni.size/3*amount);
      dest.y=ni.y-(ni.size/3*amount);
      load=0;
      amount++;}
     
      if (directionbandit==3 && load==1){
        dest.x=ni.x-(ni.size/3*amount);
        dest.y=ni.y-(ni.size/3*amount);
        load=0;
      amount++;}
    
    if (directionbandit==4 && load==1){
      dest.x=ni.x-(ni.size/3*amount);
      dest.y=ni.y+(ni.size/3*amount);
      load=0;
    amount++;}
    //funktionen hus som er en triller funktion 😞
     },hus : function(){
if (directionbandit==1 && load==1){
  dest.x=ni.x+50;
  load=0;
} if (directionbandit==2 && load==1){
  dest.y=ni.y-50;
  load=0;
} if (directionbandit==3 && load==1){
  dest.y=ni.y-25;
  dest.x=ni.x-25;
  load=0;
} if (directionbandit==4 && load==1){
 dest.y=ni.y+25;
 dest.x=ni.x-25;
 load=0;
} if (directionbandit==5 && load==1){
  dest.y=ni.y+50;
  load=0;
}
//Jeg vidste ikke rigtig hvad jeg skulle tilføje så jeg tilføjede bare en museintegration
},tegn : function(){
if (mouseIsPressed){
load=2;
if (load==2){
  ni.x=mouseX;
  ni.y=mouseY;
  dest.x=ni.x;
  dest.y=ni.y;
  
  load=0;
}
} 
     }
    
     }}

function draw() {
  /*
  //console.log(myRec.resultString);
  //if (shape!=0){
  console.log(chong+"  c");
  console.log(load+"  l");
  console.log(shape+"  s");//}*/
  /* så man kunne rykke rundt men det gad jeg ikke 🙂
    if(direction == "left" || keyIsDown(LEFT_ARROW)) ni.x--;
    if(direction == "right" || keyIsDown(RIGHT_ARROW)) ni.x++;
    if(direction == "up"|| keyIsDown(UP_ARROW)) ni.y--;
    if(direction == "down" || keyIsDown(DOWN_ARROW)) ni.y++;
*/
//ni.bounce gør absolut ingenting xd
ni.bounce();
//ni.show selve den der bold
ni.show();
//Til når den der lorte teknosang spiller så flyver bolden rundt
if (song4.isPlaying()){
  ni.x=random(width/2-amount,width/2+amount);
  ni.y=random(height/2-amount,height/2+amount);
  amount=amount+0.1;
  if (amount>height){
    amount=height;
  }
}
//vi kalder bare lige så ni rent faktisk bevæger sig.
dest.move();
//det her er måden jeg kalder på funktioner, så hvis man siger
//spiral så vil den sige shape=1; og derefter vil den lave en spiral.
//har gjort det samme med hus og tegn.
if (shape==1){
dest.spiral();}
if (shape==2){
  dest.hus();
}
//det her er guldminen af hele programmet.
if (shape==3.5){ //basically at alle sange stopper når man siger stop.
song1.stop(); song2.stop(); song3.stop(); song4.stop();
shape=0; 
}
if (shape==3 && load==2){ //sang1 bliver spillet og de andre stoppet
song2.stop(); song3.stop(); song4.stop();
if (song1.isPlaying()){}else {
song1.loop();
load=0;}
} 
if (shape==3.1 && load==2){//sang2 bliver spillet og de andre stoppet
  song1.stop(); song3.stop(); song4.stop();
  if (song2.isPlaying()){}else {
  song2.loop();
  load=0;}
  }
  if (shape==3.2 && load==2){//sang3 bliver spillet og de andre stoppet
    song1.stop(); song2.stop(); song4.stop();
    if (song3.isPlaying()){}else {
    song3.loop();
    load=0;}
    }
    if (shape==3.3 && load==2){//sang4 bliver spillet og de andre stoppet
      song1.stop(); song2.stop(); song3.stop();
      if (song4.isPlaying()){}else {
      song4.loop();
      load=0;}
      }
if (shape==4){
dest.tegn();
}


}


function showResult() {
  //så ordene skifter.
    if (myRec.resultValue == true) {
        word = myRec.resultString.split(' ').pop();
        displayWord.html(word.toLowerCase());
        switch(word) {
          //MIN HOMIE NI VENDER HJEM YEEHAW!!
          case 'hjem':
          ni.x=width/2;
          ni.y=height/2;
          break;
          case 'rens': //for at purificere alle linjerne.
          if (load==1){
            background('cyan');
            load=0;
          }
          break;
          case 'hjælp': //commandlist.
          alert("former, kommandoer, (muligvis)spil(start, stop)");
          break;

          case 'former': //commandlist.
          alert("Spiral og hus er de eneste 😞");
          break;

          case 'kommandoer': //commandlist.
          alert('Musik (næste og stop (du skal sige stop 2 gange)), tegn og rens (til når skærmen er fuldstændig fucked)');
          break;
            case 'spiral': //Pog form
            shape=1;
            break;
            case 'hus' : //Triller form
            shape=2;
            break;
            case 'musik' : //guldmine af program
            shape=3;
            load=2;
            break;
            case 'næste' : //G U L D M I N E ! ! !
            chong=chong+.5;
            load=2;
            if (chong==0){
            shape=3;
            } if (chong==1){
              shape=3.1;
            } if (chong==2){
              shape=3.2;
            } if (chong==3){
              shape=3.3;
            } if (chong>=4){
              chong=0;
            }
            break;
            case 'stop': //basically at alt stopper samt er det en rens.
            song1.stop();song2.stop();
            song3.stop();song4.stop();
            shape=3.5;
            chong=0;
            background('cyan');
            break;
            case 'tegn': //ad hvad er det her lmao
            shape=4;
            break;
            default: //hvad der sker når man siger noget andet end de commands der er.
            direction = "stop" 
            shape=0;
            directionbandit=0;
            amount=0;
            load=1;
          }
    }
}
/*
made you look


Copyrighted - William Aslak Seitzberg Tonning Christiansen - 2.R - 17/03/2019 - 22:38 - Fr.Olsensvej 3 - 4300 Holbæk - 181 cm - 62Kg - Blue yeti mikrofon -
Størrelse 43 sko - Android telefon - Ultra boots - Stationær computer købt i elgiganten - kode skrevet med razer tastatur og mus - ejer af 25 fisk + 1 sugemalle
*/