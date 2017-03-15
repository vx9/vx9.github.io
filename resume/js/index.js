/**
 * Created by yx on 2017/3/16.
 */
var $box = $("#box");
var $close = $("#close");
var $wrap = $("#wrap");
var $situation1 = $("#situation1");
var $situation2 = $("#situation2");
var $situation3 = $("#situation3");
var $situation4 = $("#situation4");
var $img1 = $("#img1");
var $img2 = $("#img2");
var $img3 = $("#img3");
var $img4 = $("#img4");
var $list = $(".list");
var $list_1 = $(".list_1");
var $list_2 = $(".list_2");
var $list_3 = $(".list_3");
var $list_4 = $(".list_4");
var $flat = $(".flat");

$flat.hide();
setTimeout(function () {
    $list.addClass("list_move");
}, 2000);

setTimeout(function () {
    $list_1.addClass("list_1_move");
    $list_2.addClass("list_2_move");
    $list_3.addClass("list_3_move");
    $list_4.addClass("list_4_move");
}, 3000);

setTimeout(function(){
    $wrap.fadeIn();
    $flat.show();
},3500);

function situation1(){
    $wrap.css("animation-play-state", "paused");
    $box.fadeIn();
    $situation1.show();
    $situation2.hide();
    $situation4.hide();
    $situation3.hide();
}
function situation2(){
    $wrap.css("animation-play-state", "paused");
    $box.fadeIn();
    $situation2.show();
    $situation1.hide();
    $situation4.hide();
    $situation3.hide();
}
function situation3(){
    $wrap.css("animation-play-state", "paused");
    $box.fadeIn();
    $situation3.show();
    $situation1.hide();
    $situation4.hide();
    $situation2.hide();
}
function situation4(){
    $wrap.css("animation-play-state", "paused");
    $box.fadeIn();
    $situation4.show();
    $situation1.hide();
    $situation2.hide();
    $situation3.hide();
}

($list_1 ).click(function () {
    situation1();
});

$list_2.click(function () {
    situation2();
});

$list_3.click(function () {
    situation3();
});

$list_4.click(function () {
    situation4();
});

$img1.click(function(){
    situation1();
});
$img2.click(function(){
    situation2();
});
$img3.click(function(){
    situation3();
});
$img4.click(function(){
    situation4();
});


$close.click(function () {
    $box.fadeOut();
    $situation1.hide();
    $situation2.hide();
    $situation3.hide();
    $situation4.hide();
    $wrap.css("animation-play-state", "running");
});