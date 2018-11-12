var x = 0;
var timer1;
var timer2;

function setup() {
    timer1 = createP('timer 1');
    timer2 = createP('timer 2');

    makeTimer(timer1, 500);
    makeTimer(timer2, 312);    
}

function makeTimer(elt, wait) {
    var counter = 0;
    setInterval(timeIt, wait);

    function timeIt() {
        elt.html(counter);
        counter++ ;
    }
}


