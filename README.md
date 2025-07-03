# Open in Zed

> [!IMPORTANT]
> this project is not affiliate with zed or a zed's product

A browser extension that adds "Open in Zed" buttons to GitHub and GitLab repositories.

## Features

- Adds "Clone and open in Zed" button in GitHub repository clone options
- Adds "Zed Editor" options in GitLab IDE dropdown menu
- Supports both HTTPS and SSH repository URLs
- Works with Chrome and Firefox browsers

## Installation

### Chrome Web Store

*(Coming soon)*

### Firefox Add-ons

*(Coming soon)*

### Manual Installation

1. Clone this repository
2. Install dependencies
   ```bash
   pnpm install
   ```
3. Build the extension
   ```bash
   pnpm build
   ```
4. Load the extension in your browser:
   - **Chrome**: Go to `chrome://extensions/`, enable Developer mode, click "Load unpacked", and select the `dist` directory.
   - **Firefox**: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select any file in the `dist` directory.

## Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/open-in-zed.git
   cd open-in-zed
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start the development server
   ```bash
   pnpm dev
   ```

4. Load the extension in your browser as described in the Manual Installation section

## How It Works

This extension injects buttons into GitHub and GitLab repository pages that create `zed://repo/` URLs. When clicked, these URLs open the repository directly in [Zed](https://zed.dev) if it's installed on your system.

### GitHub Integration

Adds a "Clone and open in Zed" button below the HTTPS/SSH clone options on repository pages.

### GitLab Integration

Adds "Zed Editor (HTTPS)" and "Zed Editor (SSH)" options to the IDE dropdown menu in the clone panel.

## Requirements

- [Zed Editor](https://zed.dev) must be installed on your system
- Chrome or Firefox browser

## License

[MIT License](LICENSE)
