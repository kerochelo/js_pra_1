(function(){
    'use strict';
    var isStarted = false;
    var startTime;
    var diff;
    var msg = 'Stop at 10 seconds!';

    var result = document.getElementById('result');
    var btn = document.getElementById('btn');

    result.innerHTML = msg;

    btn.addEventListener('click',function(){
        if (!isStarted){
            //started
            isStarted = true;
            this.innerHTML = 'STOP';
            //get startTime
            startTime = Date.now();
            result.innerHTML = msg;
        } else {
            //stopped
            isStarted = false;
            this.innerHTML = 'START';
            //judge, show result
            diff = (Date.now() - startTime) / 1000 - 10;
            // console.log(diff);
            if (diff >= -0.05 && diff <= 0.05){
                result.innerHTML = 'Perfect!';
            } else if (diff > 0){
                result.innerHTML = 'You are ' + diff.toFixed(2) + ' seconds late!';
            } else {
                result.innerHTML = 'You are ' + Math.abs(diff).toFixed(2) + ' seconds fast!';

            }
        }
    });

})();
