'use strict';
// iframe fro loaidn html
//  lightbox css het height and width vw


/******************************* FUNCTION definitions ******************************************/
const selectLink = function (event) {
  console.log('clicked on', event.currentTarget);
  highlightLink (event.currentTarget);
}
const highlightLink = function (element) {
  for (let link of links) {
    link.classList.remove('selected');
  }
  element.classList.add('selected')
  observer.observe(element);
}

const checkSections = function( entries ) {
  //console.log( entries );
  for (let entry of entries ){
    if (entry.intersectionRatio >= 0.5){
      //console.log ('scrolled to', entry.target);
      let hash = '#' + entry.target.id;
      for (let link of links){
        if (link.hash === hash) highlightLink (link);
      }
    }
  }
}

const toggleTitle1 = function(){
  title1ANIM.play('still');
  title1ANIM.play('moving');
  title1ANIM.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleTitle2 = function(){
  title2ANIM.play('moving');
  title2ANIM.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const shake = function(){
  peaJumpANIM.play('still');
  if (peaBoing.paused) {
    peaBoing.play();
    peaJumpANIM.play('moving');
  } else {
    peaBoing.pause();
    peaJumpANIM.play('still');
  }
}

const toggleIntro = function(){
  introANIM.play('still');
  introANIM.play('moving');
  introANIM.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleWorld = function( ){
  //worldANIM.play('still');
  worldANIM.play('moving');
  worldANIM.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleReal = function( ){
  realANIM.play('still');
  realANIM.play('moving');
  realANIM.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleTerrible = function (){
  terribleAnim.play('still');
  terribleAnim.play('moving');
  terribleAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}
const toggleKnock = function (){
  knockAnim.play('still');
  knockAnim.play('moving');
  knockAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}
const toggleGate = function (){
  gateAnim.play('still');
  gateAnim.play('moving');
  gateAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const togglePeaBed = function(){
  peaBedAnim.play('still');
  peaBedAnim.play('moving');
  peaBedAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}
const toggle2020 = function(){
  t2020Anim.play('still');
  t2020Anim.play('moving');
  t2020Anim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleReal2020 = function(){
  real2020Anim.play('still');
  real2020Anim.play('moving');
  real2020Anim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const toggleSensitive = function(){
  sensitiveAnim.play('still');
  sensitiveAnim.play('moving');
  sensitiveAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}

const togglePeaMuse = function(){
  peaMuseumAnim.play('still');
  peaMuseumAnim.play('moving');
  peaMuseumAnim.isPlaying ? console.log('Playing'):console.log('Not Playing');
}



const scrollToAnimate = function(){
  //console.log( scrollAmount(bedScroll));
  rain.style.animationDelay = -scrollAmount (gate) + 's';
}

const pinSection = function(){
  if (scrollAmount(bedScroll) < 0.25){
    bed.style.position = 'absolute';
    bed.style.top = '0px';
    bed.style.bottom = 'auto';
    
  } else if ( scrollAmount(bedScroll) > 0.75 ){

    bed.style.position = 'absolute';
    bed.style.top = 'auto';
    bed.style.bottom = '0px';

  } else{

    bed.style.position = 'fixed';
    bed.style.top = '0px';
    bed.style.bottom = '0px';

  }
  bedAnim.scrub('stacking', scrollAmount(bedScroll));
}
const scrollAmount = function (element){
  let scrollTop = innerHeight - element.getBoundingClientRect().top;
  let scrollHeight = element.offsetHeight + innerHeight;
  let scrollValue = scrollTop/scrollHeight;
  return scrollValue
}

const preload = function(){
  assetsLoaded++;
  if (assetsLoaded == assestsTotal){
    document.querySelector( '#preloader').classList.add('loaded');
    setTimeout(function(){
      AOS.init({duration:1000});
    }, 1000);
  }
}

/******************************* VARIABLE declarations ******************************************/
let title1 = document.querySelector('#title1TEXT');
let title2 = document.querySelector('#title2TEXT');
let peaJump = document.querySelector('#peaJump');
let peaBoing = document.querySelector('#peaBoing');

let introTEXT = document.querySelector('#introTEXT');

let anim1 = document.querySelector( '#anim1' );
let worldTEXT = document.querySelector('#worldTEXT');
let realTEXT = document.querySelector('#realTEXT');

let terribleTEXT = document.querySelector('#terribleTEXT');
let knockTEXT = document.querySelector('#knockTEXT');
let gateTEXT = document.querySelector('#gateTEXT');

let realQueenTEXT = document.querySelector('#realQueenTEXT');

let peaBedTEXT = document.querySelector('#peaBedTEXT');
let t2020TEXT = document.querySelector('#t2020TEXT');

let real2020 = document.querySelector('#real2020');
let sensitive = document.querySelector('#sensitive');

let peaMuseum = document.querySelector('#peaMuseum');

let title1ANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'title1',
  canvas: title1TEXT
} );

let title2ANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'title2',
  canvas: title2TEXT
} );

let peaJumpANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'peaChat',
  canvas: peaJump
} );

let introANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'intro.svg',
  canvas: introTEXT
} );

let worldANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'world.svg',
  canvas: worldTEXT
} );

let realANIM = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'real.svg',
  canvas: realTEXT
} );

let prince = new rive.Rive( {
    src: 'media/pea.riv',
    artboard: 'princeOnEarth',
    canvas: anim1,
    autoplay: true
  } );

let terribleAnim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'terrible.svg',
  canvas: terribleTEXT
} );

let knockAnim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'knock.svg',
  canvas: knockTEXT
} );

let gateAnim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'gate.svg',
  canvas: gateTEXT
} );

let bedAnim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'bed',
  canvas: bedRIVE
} );

let peaBedAnim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: 'peaBed.svg',
  canvas: peaBedTEXT
} );

let t2020Anim = new rive.Rive( {
  src: 'media/pea.riv',
  artboard: '2020.svg',
  canvas: t2020TEXT
} );

let real2020Anim = new rive.Rive({
  src: 'media/pea.riv',
  artboard: 'real2020.svg',
  canvas: real2020
})

let sensitiveAnim = new rive.Rive({
  src: 'media/pea.riv',
  artboard: 'sensitive.svg',
  canvas: sensitive
})

let peaMuseumAnim = new rive.Rive({
  src: 'media/pea.riv',
  artboard: 'peaMuseum.svg',
  canvas: peaMuseum
})

let links = document.querySelectorAll('nav a');

let observer = new IntersectionObserver( checkSections, {threshold:[0.5]} );

let sections = document.querySelectorAll('section');

let assetsLoaded = 0;
let assestsTotal = 2;

let gate = document.querySelector('#gate');
let rain = document.querySelector('#rain');

let bedScroll = document.querySelector('#bed-scroll');
let bed = document.querySelector('#bed');


/******************************* SCRIPT initialisation ******************************************/

//imagesLoaded('body', {background: 'section'}, preload);

AOS.init( { duration: 1000,
          'easing': 'ease',
          'anchor-placement':'center-center',
          'duration': 1000,
          'mirror': true,
          'offset':100,
          'once': false});

for (let link of links){
  link.addEventListener( 'click', selectLink);
  
}

document.body.scrollIntoView();
          
for (let section of sections ){
  observer.observe(section);
}
title1.addEventListener('click', toggleTitle1);
title2.addEventListener('click', toggleTitle2);
peaJump.addEventListener('click', shake);

introTEXT.addEventListener('click', toggleIntro);

worldTEXT.addEventListener('click', toggleWorld);
realTEXT.addEventListener('click', toggleReal);

terribleTEXT.addEventListener('click', toggleTerrible);
knockTEXT.addEventListener('click', toggleKnock);
gateTEXT.addEventListener('click', toggleGate);

peaBedTEXT.addEventListener('click', togglePeaBed);
t2020TEXT.addEventListener('click', toggle2020);

real2020.addEventListener('click', toggleReal2020);
sensitive.addEventListener('click', toggleSensitive);

peaMuseum,addEventListener('click', togglePeaMuse);

document.addEventListener( 'scroll', scrollToAnimate);
document.addEventListener( 'scroll', pinSection);

imagesLoaded('body', {background: 'section'}, preload);

title1ANIM.on('load', preload);
title2ANIM.on('load',preload);