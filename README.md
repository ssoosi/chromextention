# TradingView NoAds Extension

A simple Chrome extension based on [this script](https://greasyfork.org/en/scripts/371211-tradingview-remove-ads/code) that removes annoying ads and prevents the "Upgrade to Pro" modal from popping up on TradingView's free plan.

## Features

- **Remove Ads**: Automatically removes ads on TradingView for free users.
- **Close "Upgrade to Pro" Modal**: Prevents the modal from reappearing after closing ads.
- **Lightweight**: Small and efficient extension that does not slow down your browsing experience.

## How to Install

### 1. Download the Extension

- Clone this repository or download the files to your local machine.

### 2. Load the Extension in Chrome

- Open Chrome and go to `chrome://extensions/`.
- Enable **Developer Mode** in the top-right corner.
- Click **Load unpacked** and select the folder where you saved the extension files.

### 3. Enable the Extension

- After loading, make sure the extension is enabled on the Extensions page (`chrome://extensions/`).

### 4. Enjoy Ad-Free TradingView

- Open TradingView in your browser, and the ads should be removed automatically.

## How It Works

The extension runs a script that:

- **Checks for the presence of ads** (like the "Upgrade to Pro" modal and other toast ads) on TradingView.
- **Removes ads** from the page as soon as they are detected.
- **Prevents the "Upgrade to Pro" modal** from popping up every time you close the ad.
- The script runs periodically (every 5 seconds) to ensure that any new ads that appear are removed.

## Compatibility

- **Browser**: Works with Google Chrome (and any Chromium-based browser).
- **TradingView Free Plan**: Designed to work with TradingView's free plan, removing ads and modals from the site.

## Troubleshooting

- **Ads are still appearing**: If the ads reappear or the extension isn't working as expected, try refreshing the TradingView page or ensure that the extension is enabled on the Extensions page (`chrome://extensions/`).
- **Modal still showing after closing**: This could happen if the script wasn't able to load properly. Try reloading the page or reinstalling the extension.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are always welcome!

## Known Issues

- The extension is intended for use with TradingView’s free plan and may not work as expected with the Pro plans or other paid features.

## License

This extension is open-source and available under the [MIT License](LICENSE).
