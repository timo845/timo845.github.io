let osc, fft;

function setup() {
  createCanvas(1800, 600);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.4);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(0);

  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(0);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  let freq = map(mouseX, 0, width, 20, 200);
  osc.freq(freq);

  let amp = map(mouseY, 0, height, 0.1, 0.9);
  osc.amp(amp);
}






document.addEventListener('keydown', function(e) {

    if (e.key == 'a') {
    var elms = document.getElementsByClassName("a");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.add('shown');
    }
    var t = setTimeout(function(){
        var elms = document.getElementsByClassName("a");
        for (var i=0; i < elms.length; i++) {
            elms[i].classList.remove('shown');
        }
    }, 3010);
    let audio = new Audio('sounds/a.m4a');
    audio.play();
}

if (e.key == 'b') {
var elms = document.getElementsByClassName("b");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("b");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/b.m4a');
audio.play();
}

if (e.key == 'c') {
var elms = document.getElementsByClassName("c");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("c");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/c.m4a');
audio.play();
}


if (e.key == 'd') {
var elms = document.getElementsByClassName("d");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("d");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/d.m4a');
audio.play();
}

if (e.key == 'e') {
var elms = document.getElementsByClassName("e");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("e");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/e.m4a');
audio.play();
}

if (e.key == 'g') {
var elms = document.getElementsByClassName("g");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("g");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/g.m4a');
audio.play();
}

if (e.key == 'h') {
var elms = document.getElementsByClassName("h");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("h");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/h.m4a');
audio.play();
}


if (e.key == 'i') {
var elms = document.getElementsByClassName("i");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("i");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/i.m4a');
audio.play();
}

if (e.key == 'j') {
var elms = document.getElementsByClassName("j");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("j");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/j.m4a');
audio.play();
}

if (e.key == 'k') {
var elms = document.getElementsByClassName("k");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("k");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/k.m4a');
audio.play();
}


if (e.key == 'l') {
var elms = document.getElementsByClassName("l");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("l");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/l.m4a');
audio.play();
}

if (e.key == 'm') {
var elms = document.getElementsByClassName("m");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("m");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/m.m4a');
audio.play();
}

if (e.key == 'n') {
var elms = document.getElementsByClassName("n");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("n");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/n.m4a');
audio.play();
}


if (e.key == 'o') {
var elms = document.getElementsByClassName("o");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("o");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/o.m4a');
audio.play();
}

if (e.key == 'p') {
var elms = document.getElementsByClassName("p");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("p");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/p.m4a');
audio.play();
}


if (e.key == 'q') {
var elms = document.getElementsByClassName("q");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("q");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/q.m4a');
audio.play();
}


if (e.key == 'r') {
var elms = document.getElementsByClassName("r");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("r");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/r.m4a');
audio.play();
}



if (e.key == 's') {
var elms = document.getElementsByClassName("s");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("s");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/s.m4a');
audio.play();
}




if (e.key == 't') {
var elms = document.getElementsByClassName("t");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("t");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/t.m4a');
audio.play();
}



if (e.key == 'u') {
var elms = document.getElementsByClassName("u");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("u");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/u.m4a');
audio.play();
}



if (e.key == 'v') {
var elms = document.getElementsByClassName("v");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("v");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/v.m4a');
audio.play();
}



if (e.key == 'w') {
var elms = document.getElementsByClassName("w");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("w");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/w.m4a');
audio.play();
}


if (e.key == 'x') {
var elms = document.getElementsByClassName("x");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("x");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/x.m4a');
audio.play();
}



if (e.key == 'y') {
var elms = document.getElementsByClassName("y");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("y");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/y.m4a');
audio.play();
}



if (e.key == 'z') {
var elms = document.getElementsByClassName("z");
for (var i=0; i < elms.length; i++) {
    elms[i].classList.add('shown');
}
var t = setTimeout(function(){
    var elms = document.getElementsByClassName("z");
    for (var i=0; i < elms.length; i++) {
        elms[i].classList.remove('shown');
    }
}, 3010);
let audio = new Audio('sounds/z.m4a');
audio.play();
}
});





var windowObj = $(window);
var documentObj = $(document);
var windowH;
var documentH;

$(document).ready(function () {
	mesures();


});

windowObj.on('scroll', function() {
	scrollCount();
})
windowObj.on('resize', function() {
	mesures();
})

function mesures() {
	 windowH = windowObj.height();
	 documentH = documentObj.height();
	 console.log(windowH + ' : ' + documentH);
}

function scrollCount() {
	var scrollPosY = windowObj.scrollTop();
	var objRotate = $('.logo');
	var multi = 1;
	var degre =  ((scrollPosY / documentH)) * -360 * multi;
	objRotate.css('transform', 'rotateZ(' + degre + 'deg)');
}
