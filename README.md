# UBID (Unique Building Identification) Demo Site

This is a demo website for the Unique Building Identification (UBID) system, which allows you to identify the location and extent of any physical object on the surface of the Earth.

## About UBID

UBID provides a standardized way to encode geographic coordinates for buildings and other structures. For more information, visit:
- [UBID on GitHub](https://github.com/pnnl/buildingid)
- [UBID on Energy.gov](https://www.energy.gov/eere/buildings/unique-building-identifier-ubid)

## Setup Instructions

This site uses Mapbox for interactive map features. To run this site locally or host it yourself, you'll need to configure your own Mapbox API credentials.

### Prerequisites

- A Mapbox account (free tier available)
- A web server to serve the static HTML files (or use GitHub Pages)

### Step 1: Get a Mapbox Access Token

1. Sign up for a free Mapbox account at [https://account.mapbox.com/auth/signup/](https://account.mapbox.com/auth/signup/)
2. Once logged in, go to your [Access Tokens page](https://account.mapbox.com/access-tokens/)
3. Copy your default public token (or create a new one)
4. Note your Mapbox username (displayed in the top-right corner of the Mapbox website)

### Step 2: Configure the API Credentials

1. Navigate to the `assets/js/` directory
2. Copy the `config.example.js` file and rename it to `config.js`:
   ```bash
   cp assets/js/config.example.js assets/js/config.js
   ```
3. Open `assets/js/config.js` in a text editor
4. Replace `YOUR_MAPBOX_ACCESS_TOKEN` with your actual Mapbox access token
5. Replace `YOUR_MAPBOX_USERNAME` with your Mapbox username

Your `config.js` file should look like this:

```javascript
window.MAPBOX_CONFIG = {
  token: 'pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImFiYzEyMyJ9.youractualtoken',
  username: 'yourusername'
};
```

### Step 3: Serve the Site

You can serve the site using any web server. Here are a few options:

#### Option 1: Using Python's built-in server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

#### Option 2: Using Node.js http-server

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

#### Option 3: Using GitHub Pages

1. Fork this repository
2. Set up your `config.js` file as described above
3. Commit and push your changes to the `master` branch
4. Enable GitHub Pages in your repository settings
5. Your site will be available at `https://yourusername.github.io/buildingid.github.io/`

**Important:** Make sure `assets/js/config.js` is listed in your `.gitignore` file so you don't accidentally commit your API keys to a public repository.

## Features

The site includes several interactive examples:

- **Cross-reference Example**: Compare two UBID codes and see how similar they are
- **Decode Example**: Decode a UBID code and view it on the map
- **Encode Example**: Create a UBID code from coordinates
- **Well Known Text Read Example**: Convert WKT format to UBID
- **Draw Rectangle Example**: Interactively draw rectangles on the map to generate UBID codes

## Security Notes

- **Never commit your `config.js` file** to a public repository
- The `.gitignore` file is already configured to exclude `config.js`
- Only commit `config.example.js` with placeholder values
- Your Mapbox token should be a **public token** (not a secret token)
- Public tokens are designed to be used in client-side applications and have usage limits

## Mapbox Free Tier Limits

Mapbox's free tier includes:
- 50,000 map loads per month
- 100,000 geocoding requests per month
- No credit card required

For most personal and demo purposes, the free tier should be sufficient. Monitor your usage at [https://account.mapbox.com/](https://account.mapbox.com/).

## Troubleshooting

### Maps not loading

If maps aren't loading, check:
1. Your `config.js` file exists in `assets/js/`
2. Your Mapbox token is correctly formatted
3. Your browser's developer console for any error messages
4. Your Mapbox account hasn't exceeded its usage limits

### 401 Unauthorized errors

This usually means:
- Your Mapbox token is invalid or expired
- Your token doesn't have the necessary permissions

## Contributing

This is a demonstration site for UBID. For issues or contributions to the core UBID library, please visit the [main UBID repository](https://github.com/pnnl/buildingid).

## License

Please refer to the main UBID repository for license information.
