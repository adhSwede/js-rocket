var timer = null;
var countdownNumber = 10;

//Reset button function
var changeState = function (state) {
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    var countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;
    document.getElementById('nervous').className = 'nervous'; // Added these two class changes.
    document.getElementById('cant-wait').className = 'cant-wait'; // This is how i solved the speech images not going away
    document.getElementById('countdown').style.color = '#F7EA80';

    // countdown
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            if (countdownNumber > 4 && countdownNumber <= 7){
                document.getElementById('nervous').className = 'nervous show';
            } else
            document.getElementById('nervous').className = 'nervous';
            if (countdownNumber > 0 && countdownNumber <= 4){
                document.getElementById('cant-wait').className = 'cant-wait show';
                document.getElementById('countdown').style.color = 'orange';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
                document.getElementById('countdown').style.color = '#F7EA80';
            }
            if (countdownNumber <= 0) {
                changeState(3);
            }
        }, 1000);
        
    // RNG Element deciding Success or Failure
    } else if (state == 3){
        var success = setTimeout (function() {
            var randomNumber = Math.round(Math.random()*10);
            // success
            if (randomNumber > 5) {
                changeState(4);
            // failure
            } else {
                changeState(5);
            }
        }, 2000);
    };
}