(function () {
  'use strict';
  const checkAd = setInterval(() => {
    // Select the ad by data-role attribute
    const adBox = document.querySelector("[data-role^='toast-container']");
    // Select the ad by id
    const chartingAd = document.getElementById("charting-ad");
    // Select the button with the specified class names
    const closeButton = document.querySelector(".nav-button-znwuaSC1.size-xxsmall-znwuaSC1.closeButton-kckar8jz");

    const goProBlock = document.querySelector(".modal-VeoIyDt4");

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
     // Remove the Go Pro block if it exists
    if (goProBlock) {
      goProBlock.remove();
      console.log('Go Pro block removed.');
    } else {
      console.log('No Go Pro block present.');
    }
  }, 5000);
})();
