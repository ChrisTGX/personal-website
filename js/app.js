$(function() {
  var header = $('.nav-row');
  var scroller = $('.scroller');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // Header changes on scrolling
    if (scroll > 0) {
      header.addClass('solid'); 
    } else {
      header.removeClass('solid');
    }
    // Scroller changes after Home section
    if (scroll >= $('#home').height()) {
      scroller.css('opacity', '1');
      scroller.css('visibility', 'visible');
    } else {
      scroller.css('opacity', '0');
      scroller.css('visibility', 'hidden');
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  })
});

// MODAL!!

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = '/public/uni-dept-home.png';
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}