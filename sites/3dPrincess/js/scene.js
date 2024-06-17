'use strict'

/******************************* FUNCTION definitions ******************************************/
const rotateScene = function (event) {
    rX -= event.originalEvent.movementY / 5;
    rY += event.originalEvent.movementX / 5;

    if (isBookOpen == true){
        if (rY <= -8 && rY >= -80 && rX <= 21 && rX >= -42){
            $scene.css('transform', 'rotateX('+rX+'deg) rotateY('+rY+'deg)');
        }
    }
    // $scene.css('transform', 'rotateX('+rX+'deg) rotateY('+rY+'deg)');
}

const pullPainting = function(event){
    if (paintingMoved == false) {
        $paintingPull.css('transform', 'rotateY(0deg) translate3d('+rXPaintingMove+'px,0px,-1px)');
        paintingMoved = true;
    } else if (paintingMoved == true){
        $paintingPull.css('transform', 'rotateY(0deg) translate3d('+rXPainting+'px,0px,-1px)');
        paintingMoved = false;
    }
}

const pullPea = function(event){
    if (peaMoved == false) {
        $peaPull.css('transform', 'rotateY(90deg) rotateX(0deg) translate3d('+-210+'px,404px,248px)');
        $pea.css('transform', 'rotateY(90deg) rotateX(0deg)  translate3d('+-116+'px,410px,287px)');
        peaMoved = true;
    } else if (peaMoved == true){
        $peaPull.css('transform', 'rotateY(90deg) rotateX(0deg) translate3d('+-181+'px,404px,248px)');
        $pea.css('transform', 'rotateY(90deg) rotateX(0deg)  translate3d('+-87+'px,410px,287px)');
        peaMoved = false;
    }
}

const pullPrincess = function(event){
    //rotateY(0deg) rotateZ(240deg) translate3d(-383px,-144px,0px);
    if (princessMoved == false) {
        $princessPull.css('transform', 'rotateY(0deg) rotateX(90deg) translate3d('+ 286 +'px,94px,-224px)');
        $princessPrism.css('transform', 'rotateY(0deg) rotateZ(240deg)  translate3d('+ -383 +'px, -144px, 2px)');
        princessMoved = true;
    } else if (princessMoved == true){
        $princessPull.css('transform', 'rotateY(0deg) rotateX(90deg) translate3d('+ 264 +'px,94px,-224px)');
        $princessPrism.css('transform', 'rotateY(0deg) rotateZ(0deg)  translate3d('+ 0 +'px,0px,0px)');
        princessMoved = false;
    }
}


const bookOpen = function(event){
    console.log('testing');
    if (isBookOpen == false){
        soundOfBookOpening.play();
    }
    openBook.classList.add("bookTurn");
    openBed.classList.add("bedTurn");
    openPrincess.classList.add("princessTurn");
    openMattress.classList.add("mattressTurn");
    openDeco.classList.add("decoTurn");
    openDrawer.classList.add("drawerTurn");
    openPuller.classList.add("pullTurn");

    // $openBook.css('transform', 'rotateY(57deg) translate3d(-79px, 0px, 146px)');
    $book.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    $bed.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    $princess.css('transform', 'rotateY(0deg) rotateX(0deg) translate3d(0px,0px,0px)');
    $mattress.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    $deco.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    $drawer.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    $puller.css('transform', 'rotateY(0deg) translate3d(0px,0px,0px)');
    isBookOpen = true;
}

const turnOn = function(event){
    if (isLampOn == false) {
        soundOfLampOn.play();
        toggleLamp.classList.add("turnLampOn");
        $iamlamp.css('opacity', '1');
        isLampOn = true;
    } else if (isLampOn == true){
        soundOfLampOn.play();
        toggleLamp.classList.remove("turnLampOn");
        $iamlamp.css('opacity', '0');
        isLampOn = false;
    }
}

const toggleMusic = function(event){
    console.log('music');
    if (isPlaying == true){
        document.getElementById('musicIMG').src = "images/musicOff.png"
        isPlaying = false;
        audio.pause();
    } else if (isPlaying == false){
        document.getElementById('musicIMG').src = "images/musicOn.png"
        isPlaying = true;
        audio.play();
    }
}

/******************************* VARIABLE declarations ******************************************/
let $body = $('body');
let $scene = $('.scene');

let openBook = document.getElementById('testing');
let openBed = document.getElementById('bedding');
let openPrincess = document.getElementById('princessing');
let openMattress = document.getElementById('mattressing');
let openDeco = document.getElementById('decoing');
let openDrawer = document.getElementById('drawing');
let openPuller = document.getElementById('pulling');

let $book = $('.scene .bookTEST');
let $bed = $('.scene .bed');
let $princess = $('.scene .princess');
let $mattress = $('.scene .mattress');
let $deco = $('.scene .deco');
let $drawer = $('.scene .drawer');
let $puller = $('.scene .pull');

let $paintingPull = $('.book .paintingPull');
let $peaPull = $('.mattress .peaTab');
let $princessPull = $('.pull .princessTab');

let $pea = $('.bed .pea');
let $princessPrism = $('.princess');

let rX = 0;
let rY = -50;

let isBookOpen = false;
let paintingMoved = false;
let peaMoved = false;
let princessMoved = false;
let isLampOn = false;

let rXPainting = 361;
let rXPaintingMove = 375;

let $powerOn = $('#lampID');
let $iamlamp = $('#lampREF');
let toggleLamp = document.getElementById('lampREF');

let audio = document.getElementById("backgroundAudio");
let $musicPlayer = $('.controls .music');
let isPlaying = true;


let soundOfBookOpening = document.getElementById("bookOpenSoundEffect");
let soundOfLampOn = document.getElementById("lampOnSoundEffect");

/******************************* SCRIPT initialisation ******************************************/
$body.on('mousedown', function () {
    $body.on( 'mousemove', rotateScene )
});

$body.on('mouseup', function () {
    $body.off( 'mousemove', rotateScene )
});

$book.on('mousedown', bookOpen);

$paintingPull.on('mousedown', pullPainting);
$peaPull.on('mousedown', pullPea);
$princessPull.on('mousedown', pullPrincess);

$powerOn.on('mousedown', turnOn);

$musicPlayer.on('mousedown', toggleMusic);

$('.paper').prop('draggable', false);

