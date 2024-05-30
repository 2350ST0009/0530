$(function(){
    // 要素から見た子要素を取得
    $("div").children().css("color","#ff0000");

    // 要素から見た特定の子要素を取得
    $("div").children("span").css("color","blue");
});
