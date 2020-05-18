$('.slider').on('init',function(){
    $('.slide__content').addClass('on');
}); 

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
    focusOnSelect:true,

    asNavFor:'.thumb',
    
});

$('.thumb').slick({
    asNavFor:'.slider',

    focusOnSelect: true,
    slidesToShow:4,
    slidesToScroll:1

});    

$('.slider').on('beforeChange',function(){
    $('.slide__content').removeClass('on');
}); 
$('.slider').on('afterChange',function(){
    $('.slide__content').addClass('on');
    $('.slide__content')

    
}); 

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(500);
	},100); //0.1秒後に0.5秒かけて絵をフェードインする
	setTimeout(function(){
		$('.start').fadeOut(500);
	},1500); //1.5秒後にロゴ含め真っ白背景を0.5秒かけてフェードアウト
});

// $(".js-modal-btn").modalVideo({
//     channel:'youtube'
// });

$('#first').on('click', () => {
    $('.kentinmin-vdo').slideToggle();

});

$('#second').on('click', () => {
    $('.illmore-vdo').slideToggle();

});

$('#third').on('click', () => {
    $('.pinpkp-vdo').slideToggle();

});

$('#fourth').on('click', () => {
    $('.mus-vdo').slideToggle();

});
 
$('#fifth').on('click', () => {
    $('.tubaki-vdo').slideToggle();

});
 
$('#sixth').on('click', () => {
    $('.nujabes-vdo').slideToggle();

});

$('#seventh').on('click', () => {
    $('.swiitwilliam-vdo').slideToggle();

});

$('#eighth').on('click', () => {
    $('.basi-vdo').slideToggle();

});

$('#ninth').on('click', () => {
    $('.evisbeats').slideToggle();

});

$('#tenth').on('click', () => {
    $('.tofubeats').slideToggle();

});

$('.fas').click(function(){
    $('body,html').animate({
    scrollTop: 0
    }, 1000);

});



