.stickyNav {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: white;
}

// monitor the scroll position of the page
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // - - if the scrollTop of the page is greater than the height of the header
    // - - change the subnav to position:fixed; top:0
    if (scroll >= 90) {
        $('#subnavSection').addClass("stickyNav");
    }
    // - - if the window.scrollTop is less than the height of the header
    // - - it goes back to default
    if (scroll <= 90) {
        $('#subnavSection').removeClass("stickyNav");
    }
});
