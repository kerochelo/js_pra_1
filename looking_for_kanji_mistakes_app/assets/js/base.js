var level = 0;
var games = [
        ['徴', '微'],
        ['白', '臼'],
        ['ぬ', 'め']
];

var MAX_LEVEL = games.length - 1;
var DIM_FIRST = 6;
var DIM_DELTA = 2;
var dim = DIM_FIRST;
var t1;
var t2;


function gameStart(){
    var dummy = games[level][0];
    var seikai = games[level][1];

    if (level == 0){
        $('#score').empty();
        t1 = new Date().getTime();
    }

    //dim * dimのspan要素を#cellsに入れる
    var cells = '';
    for (var i = 1; i <= dim * dim; i++){
        cells += '<span id="s' + i + '"></span>';
        if(i % dim == 0){
            cells += '<br />';
        }
    }
    $('#cells').html(cells);




    //dummyで埋められた配列を作る
    var chars = [];
    for (var i = 0; i < dim * dim; i++){
        chars.push(dummy);
    }

    //配列のうち１つをseikaiにする
    var offset = Math.floor(Math.random() * chars.length);
    chars.splice(offset, 1, seikai);


    //span要素にそれらの要素の値をはめ込む
    for(var i = 1; i <= chars.length; i++){
        $('#s'+i).text(chars[i - 1]);
        $('#s'+i).click(function(){
            if($(this).text() == seikai){
                level++;
                dim += DIM_DELTA;
                if (level > MAX_LEVEL){
                    t2 = new Date().getTime();
                    $('#score').text('Your score is '+ (t2 - t1) / 1000 + '!');
                    level = 0;
                    dim = DIM_FIRST;
                    return false;
                }
                gameStart();
            }
        });
    }
}
