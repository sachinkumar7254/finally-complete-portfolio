(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

        document.getElementById("downloadCvBtn").addEventListener("click", function () {
            // Replace with the actual CV file path
            const cvFileUrl = "sachin Cv.pdf"; 

            // Create an anchor element
            const anchor = document.createElement("a");
            anchor.href = cvFileUrl;
            anchor.download = "sachin Cv.pdf";  // Set the downloaded file name

            // Append to body, trigger click, and remove it
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        });

        // Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Save the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Check for saved user preference
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
};

 // Get the video element

$(document).ready(function() {
    var videoSrc;

    $('.btn-play').click(function() {
        videoSrc = $(this).attr("data-src");
        $("#videoPlayer").attr("src", videoSrc + "?autoplay=1&rel=0"); // Autoplay video when modal opens
    });

    $('#videoModal').on('hidden.bs.modal', function() {
        $("#videoPlayer").attr("src", ""); // Stop video when modal closes
    });
});
// HTML structure for the popup
const popupHTML = `
  <div id="certificateModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <img id="certificateImage" src="" alt="Certificate" />
    </div>
  </div>
  <style>
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: #fff;
      margin: 10% auto;
      padding: 20px;
      border-radius: 8px;
      width: 50%;
      text-align: center;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
`;

document.body.insertAdjacentHTML("beforeend", popupHTML);

// Function to open the modal
function viewCertificate() {
  document.getElementById("certificateModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
}

// Adding event listener to close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("certificateModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Example usage: Add this button in your HTML
// <button onclick="viewCertificate()">View Certificate</button>



