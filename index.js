(function () {
  'use strict';
  const checkAd = setInterval(() => {
    // Select the ad by data-role attribute
    const adBox = document.querySelector("[data-role^='toast-container']");
    // Select the ad by id
    const chartingAd = document.getElementById("charting-ad");
    // Select the button with the specified class names
    const closeButton = document.querySelector(".nav-button-znwuaSC1.size-xxsmall-znwuaSC1.closeButton-kckar8jz");

    // Remove the adBox if it exists
    if (adBox) {
      adBox.remove();
      console.log('Toast ad removed.');
    } else {
      console.log('No toast ad present.');
    }

    // Remove the chartingAd if it exists
    if (chartingAd) {
      chartingAd.remove();
      console.log('Charting ad removed.');
    } else {
      console.log('No charting ad present.');
    }

    // Remove the close button if it exists
    if (closeButton) {
      closeButton.click();
      console.log('Close button clicked.');
    } else {
      console.log('No close button present.');
    }
  }, 5000);
})();
