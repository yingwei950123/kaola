/**
 * Created by Administrator on 2019/1/12.
 */
// 轮播图
var index = 0;
var timer = null;
// 左侧按钮
$('.mBanner .btn span').eq(0).click(function () {
    $('.mBanner .imgBox li').eq(index).css('z-index',9);
    index--;

    if (index < 0){
        index = $('.mBanner .imgBox li').length-1;
    }
    console.log(index)
    $('.mBanner .imgBox li').eq(index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
    $('.mBanner .dotteds li').eq(index).addClass('active').siblings().removeClass('active');
});
// 右侧按钮
$('.mBanner .btn span').eq(1).click(function () {
    slied()
});
// 自动轮播
timer = setInterval(function (){
    slied()
},1500);
//鼠标进入清除定时器
$('.mBanner ').mouseenter(function () {
    clearInterval(timer);
    $('.mBanner .btn').css({
        'display':'block',
        'cursor':'pointer'
    });

});
// 鼠标离开恢复定时器
$('.mBanner ').mouseleave(function () {
    timer = setInterval(function (){
        slied();
    },1500);
    $('.mBanner .btn').css('display','none');

});
// 小圆点事件
$('.mBanner .dotteds li').click(function () {
    $('.mBanner .imgBox li').eq(index).css('z-index',9);
    index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.mBanner .imgBox li').eq(index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
});
//图片右侧按钮函数
function slied() {
    $('.mBanner .imgBox li').eq(index).css('z-index',9);
    index++;
    if (index == $('.mBanner .imgBox li').length){
        index = 0;
    }
    $('.mBanner .imgBox li').eq(index).css('z-index',10).stop().fadeIn(500).siblings().stop().fadeOut(500);
    $('.mBanner .dotteds li').eq(index).addClass('active').siblings().removeClass('active');
}
