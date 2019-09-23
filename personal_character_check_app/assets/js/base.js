$(function(){
  $('#getResult').click(function(){
    //名前の取得
    var name = $('#name').val();
    //console.log(name);

    if (name ===""){
      alert("名前を入力してください！");
      return;
    }

    //タイプの生成
    var types = ["勇者", "魔法使い", "戦士",  "遊び人", "スーパースター" ,"モンスター", "魔王", "商人", "遊び人", "高田純次"];

    //0-n の乱数
    //Math.floor(Math.random() * (n + 1))
    var type = types[Math.floor(Math.random() * types.length)];

    //キャラクターの生成
    var characters = ["賢い", "かわいい", "ふつうの", "カッコいい", "へんな", "神々しい", "見習い", "玄人", "エロい", "そこらへんの"];
    var character = characters[Math.floor(Math.random() * characters.length)];


    //結果の表示
    var result = name + "さんは「" + character + type + "」タイプです！";
    $('#result').text(result);

    //ツイートリンクの表示
    var tweetLink = "<a href='https://twitter.com/intent/tweet?text=" + encodeURIComponent(result) + "&hashtags=dotinstall' target='_blank'>ツイートする</a>";
    $('#tweet').html(tweetLink);
  });
});
