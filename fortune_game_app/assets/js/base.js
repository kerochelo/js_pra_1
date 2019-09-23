(function(){
    "use strict";
    document.getElementById('btn').addEventListener('click', function(){
        //0 - n  Math.floor(Math.random() * (n + 1))
        //0 - 3  Math.floor(Math.random() * 4)
        var results = ['大吉', '小吉', '中吉', '凶'];
        var result = Math.floor(Math.random() * results.length);

        //document.getElementById('result').innerHTML = 'hit';
        document.getElementById('result').innerHTML = results[result];
    });
    document.getElementById('btn').addEventListener('mousedown',function(){
        this.className = 'pushed';
    });
    document.getElementById('btn').addEventListener('mouseup',function(){
        this.className = ''
    });
}) ();
