// Getting and showing Datas from API

var urlmoviedb = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e082a5c50ed38ae74299db1d0eb822fe';

$(function () {
    $.getJSON(urlmoviedb, function (data) {
        console.log(data);
        for (var x = 0; x < data.results.length; x++) {
            var title = data.results[x].original_title;
            var descr = data.results[x].overview;
            var strlength = 100;
            var truncatedescr = descr.substring(0, strlength);
            var note = data.results[x].vote_average;
            var str = '/jj8qgyrfQ12ZLZSY1PEbA3FRkfY.jpg';
            var imageurl = str.replace('/jj8qgyrfQ12ZLZSY1PEbA3FRkfY.jpg', 'https://image.tmdb.org/t/p/w1280');
            var image = imageurl + data.results[x].backdrop_path;
            var numberOfStars = Math.round(note/2);
            var stars = '';

            for (var i = 0; i < numberOfStars; i++) {
                stars += '<span class="stars fa fa-star"/>';
            }
            $('#image').append('<li>' + '<h2 class="h2-like">' + title + '</h2>' + "<img class='img-fluid mb-4' src='" + image + "'>" + '<p class="descr">' + truncatedescr + '</p>' + stars + '</li>');
        }
    });
});

// Slider 

$(function ($) {

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    $('#slider').css({width: slideWidth, height: slideHeight});
    $('#slider ul').css({width: sliderUlWidth, marginLeft: -slideWidth});
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    $('a.control_prev').click(function () {
        moveLeft();
        $('#slider ul li').fadeOut(200);
        $('#slider ul li').fadeIn(400);
        $('.bullet_prev').addClass('active');
        $('.bullet_next').removeClass('active');
    });

    $('a.control_next').click(function () {
        moveRight();
        $('#slider ul li').fadeOut(200);
        $('#slider ul li').fadeIn(400);
        $('.bullet_next').addClass('active');
        $('.bullet_prev').removeClass('active');
    });

    $('.bullet_prev').click(function () {
        moveLeft();
        $('#slider ul li').fadeOut(200);
        $('#slider ul li').fadeIn(400);
        $(this).addClass('active');
        $('.bullet_next').removeClass('active');
    });

    $('.bullet_next').click(function () {
        moveRight();
        $('#slider ul li').fadeOut(200);
        $('#slider ul li').fadeIn(400);
        $(this).addClass('active');
        $('.bullet_prev').removeClass('active');
    });
});





