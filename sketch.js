let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let kakao, rema;
var damer = 0;

function setup() {
    kakao = loadImage('assets/kakao.png');
    rema = loadImage('assets/rema.jpg');
    noot = loadImage('assets/noglet.jpg');
    magnus = loadImage('assets/galge.jpg');
    widowbanden = loadImage('assets/windowmaker.jpg');
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 600);
    background('cyan');
    txt = createElement("h5", "Mikrofonen optager lyd nu lol")
        .position(20, 300)
        .style("color:black;")
        .hide();

    resultP = createP("")
        .position(0, 25)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {
    this.x=x; this.y=y;
    if (damer == 1) {
        image(kakao, 0, 0, 400, 300);
    } else if (damer == 2) {
        image(rema, 0, 0, 400, 300);
    } else if (damer == 3) {
        image(noot, 0, 0, 400, 300);
    } else if (damer == 4) {
        image(magnus, 0, 0, 400, 300);
    } else if (damer == 5) {
        image(widowbanden, 0, 0, 400, 300);
    } else if (damer == 6) {
        textSize(50);
        text("320 watt wallah",0,100);
    }
}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

 

        var lastIndex = sentence.lastIndexOf(' ');
        var lastWord = sentence.substr(lastIndex);
    }
    if (lastWord.includes("kakao")) {
        damer = 1;
        }
    if (lastWord.includes("Rema")) {
        damer = 2;
    }
    if (lastWord.includes("Magnus")) {
        damer = 3;
    }
    if (lastWord.includes("dame")) {
        damer = 4;
    }
    if (lastWord.includes("widowmaker")) {
        damer = 5;
    }
    if (sentence.includes("Hvor meget strøm tager du")) {
       damer=6;
    }
}