// Function to go to search engine section
function goToSearch() {
    const searchInput = document.getElementById('searchInput').value;
    // Use the searchInput value to navigate to the search engine section
    // You can use window.location or any framework-specific routing method
  }
  
  // You'll need JavaScript for other functionalities like sign-in handling, cart interaction, etc.
  

{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script> */}
  $(document).ready(function() {
    $('.review-slider').on('scroll', function() {
      let cardWidth = $('.review-card').outerWidth(true); // Include margins
      let scrollLeft = $(this).scrollLeft();
      let maxScroll = $('.review-slider').get(0).scrollWidth - $('.review-slider').width();

      if (scrollLeft === maxScroll) {
        $('.review-slider').animate({ scrollLeft: 0 }, 'slow'); // Scroll back to start
      } else if (scrollLeft % cardWidth === 0) {
        // Smoothly scroll to next card position
        $(this).animate({ scrollLeft: scrollLeft + cardWidth }, 'slow');
      }
    });
  });
// </script>

