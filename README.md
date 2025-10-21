# UBID (Unique Building Identification) Demo Site

This is a demo website for the Unique Building Identification (UBID) system, which allows you to identify the location and extent of any physical object on the surface of the Earth.

## About UBID

UBID provides a standardized way to encode geographic coordinates for buildings and other structures. For more information, visit:
- [UBID on GitHub](https://github.com/pnnl/buildingid)
- [UBID on Energy.gov](https://www.energy.gov/eere/buildings/unique-building-identifier-ubid)

## Quick Start

This is a static website - no build process or server-side code required. Just clone, configure, and deploy.

### Prerequisites

- A Mapbox account (free tier available at [mapbox.com](https://www.mapbox.com))
- A static file server (Python, Node.js, or GitHub Pages)

## Deployment Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/buildingid/buildingid.github.io.git
cd buildingid.github.io
```

### Step 2: Get a Mapbox Access Token

1. Sign up for a free Mapbox account at [https://account.mapbox.com/auth/signup/](https://account.mapbox.com/auth/signup/)
2. Once logged in, go to your [Access Tokens page](https://account.mapbox.com/access-tokens/)
3. Copy your **default public token** (or create a new one)
4. Note your **Mapbox username** (displayed in the top-right corner)

### Step 3: Configure Mapbox Credentials

Create your configuration file from the example template:

```bash
# Copy the example configuration
cp assets/js/config.example.js assets/js/config.js
```

Edit `assets/js/config.js` and replace the placeholder values:

```javascript
window.MAPBOX_CONFIG = {
  token: 'pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImFiYzEyMyJ9.youractualtoken',  // Your actual token
  username: 'yourusername'  // Your Mapbox username
};
```

**Important:** The `config.js` file is already in `.gitignore` to prevent accidentally committing your API credentials.

### Step 4: Deploy the Site

Choose one of the following deployment methods:

#### Option A: Local Development Server

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```

**Using Node.js:**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

#### Option B: GitHub Pages

1. Fork or clone this repository to your GitHub account
2. Create and configure your `config.js` file as described in Step 3
3. **Do not commit `config.js` to your repository** (it's already gitignored)
4. Instead, create a GitHub Actions secret:
   - Go to Settings > Secrets and variables > Actions
   - Create a new secret named `MAPBOX_TOKEN` with your token
   - Create another secret named `MAPBOX_USERNAME` with your username
5. The deployment workflow will automatically inject these values
6. Enable GitHub Pages in repository Settings > Pages
7. Set source to "Deploy from a branch" and select the `master` branch
8. Your site will be available at `https://yourusername.github.io/repositoryname/`

**Note:** The repository includes a `.gitignore` file that prevents `config.js` from being committed.

#### Option C: Other Static Hosting

This site works with any static hosting provider:
- **Netlify**: Drag and drop the folder (set environment variables for Mapbox)
- **Vercel**: Import the repository (set environment variables)
- **Cloudflare Pages**: Connect your GitHub repository
- **Amazon S3**: Upload files and configure static website hosting
- **Any web server**: Upload files to your web root directory

For services that support environment variables, you can modify `assets/js/common.js` to read from `process.env` or create a build script to inject the tokens.

## Site Structure

```
buildingid.github.io/
├── index.html              # Main landing page
├── examples/               # Interactive demo pages
│   ├── crossref-example.html
│   ├── decode-example.html
│   └── encode-example.html
├── gov/                    # Custom government implementations
│   └── maryland/
│       └── mde.html       # Maryland Dept of Environment
├── assets/
│   ├── js/
│   │   ├── pnnl-buildingid.js         # Core UBID library
│   │   ├── pnnl-buildingid-mapbox.js  # Mapbox integration
│   │   ├── common.js                   # Shared utilities
│   │   ├── config.example.js           # Configuration template
│   │   └── config.js                   # Your config (not in git)
│   └── images/            # Screenshots and assets
├── .gitignore            # Excludes config.js
└── README.md
```

## Features

The site includes several interactive examples:

- **Cross-reference Example**: Compare two UBID codes and see how similar they are
- **Decode Example**: Decode a UBID code and view it on the map
- **Encode Example**: Create a UBID code from coordinates
- **Custom Government Pages**: Specialized implementations for specific agencies

## Security and API Usage

### Protecting Your API Credentials

- **Never commit `config.js`** - Already excluded in `.gitignore`
- Only commit `config.example.js` with placeholder values
- Use **public tokens** (not secret tokens) for client-side apps
- Public tokens are safe to expose in browser code and have usage limits

### Mapbox Token Types

- **Public Token**: Safe for client-side use, has rate limits, suitable for this project
- **Secret Token**: Server-side only, never expose in client-side code

### Mapbox Free Tier Limits

Mapbox's free tier includes:
- 50,000 map loads per month
- 100,000 geocoding requests per month
- No credit card required
- Sufficient for most demo and personal projects

Monitor your usage at [account.mapbox.com](https://account.mapbox.com/).

## Troubleshooting

### Maps not loading

Check the following:
1. `config.js` exists in `assets/js/` directory
2. Mapbox token is correctly formatted (starts with `pk.`)
3. Browser developer console for error messages
4. Mapbox account usage hasn't exceeded free tier limits

### 401 Unauthorized errors

Common causes:
- Invalid or expired Mapbox token
- Token missing required permissions
- Token not a public token (need public, not secret)

### Configuration not found

If you see "Mapbox configuration not found" alert:
1. Verify `config.js` exists (not just `config.example.js`)
2. Check that `config.js` exports `window.MAPBOX_CONFIG` object
3. Clear browser cache and reload page

## Contributing

This is a demonstration site for UBID. For issues or contributions to the core UBID library, please visit the [main UBID repository](https://github.com/pnnl/buildingid).

## License

Please refer to the main UBID repository for license information.
