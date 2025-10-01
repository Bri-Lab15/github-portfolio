document.addEventListener("DOMContentLoaded", function() {
  const fbLink = document.getElementById('facebook-link');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupContinue = document.getElementById('popup-continue');
  const popupCancel = document.getElementById('popup-cancel');
  const facebookURL = 'https://www.facebook.com/yourusername'; // Replace with your real Facebook profile

  // Show popup on FB link click
  if (fbLink) {
    fbLink.addEventListener('click', function(event) {
      event.preventDefault();
      popupOverlay.classList.add('active');
    });
  }

  // Continue button opens Facebook and closes popup
  popupContinue.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
    window.open(facebookURL, '_blank');
  });

  // Cancel button closes popup with animation
  popupCancel.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
  });

  // Optional: Close popup if overlay is clicked (not popup)
  popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove('active');
    }
  });

  // Optional: Pressing ESC closes popup
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      popupOverlay.classList.remove('active');
    }
  });
});