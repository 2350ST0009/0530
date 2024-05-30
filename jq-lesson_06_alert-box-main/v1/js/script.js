$(function() {
    // 背景とアラートボックスを非表示
    $("#bg").hide();

    // clickmeボタンをクリック
    $("#click").click(function(){
        // 背景とアラートボックスをフェードインする
        $("#bg").fadeIn(300);
    });
    // okボタンクリック
    $("#ok").click(function(){
        // 背景とアラートボックスをフェードアウトする
        $("#bg").fadeOut(300);
    });
});