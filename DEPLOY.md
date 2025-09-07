PLOYComplete Deployment Guide
🏠 Local Development (Windows/WSL/Ubuntu)
Prerequisites
You'll need Node.js installed. Choose your environment:
Option A: Windows (Native)

Download Node.js from https://nodejs.org/ (LTS version recommended)
Install with default settings
Open Command Prompt or PowerShell

Option B: WSL/Ubuntu
bash# Update package list
sudo apt update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
Setting Up the Project Locally

Create a new directory and navigate to it:

bashmkdir chemistry-consultancy
cd chemistry-consultancy

Copy the files from the artifact into your project structure:

chemistry-consultancy/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
└── src/
    └── app/
        ├── globals.css
        ├── layout.tsx
        └── page.tsx

Install dependencies:

bashnpm install

Run the development server:

bashnpm run dev

Open your browser to:

http://localhost:3000
Local Development Commands
bash# Start development server (with hot reload)
npm run dev

# Build for production (test your build locally)
npm run build

# Start production server (after build)
npm start

# Export static files (creates 'out' folder)
npm run export

# Lint your code
npm run lint

🚀 GitHub Pages Deployment
GitHub Actions Pricing

✅ Completely FREE for public repositories
✅ 2,000 minutes/month free for private repos
✅ No credit card required

Step-by-Step GitHub Deployment
1. Create GitHub Repository

Go to https://github.com and sign in
Click "New" repository
Repository name: chemistry-consultancy (or your preferred name)
Make it Public (for free GitHub Pages)
Don't initialize with README (we'll add our own)
Click "Create repository"

2. Configure Your Project
Before pushing, update next.config.js with your repository name:
javascript// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Replace 'your-repo-name' with your actual repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chemistry-consultancy' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/chemistry-consultancy' : '',
}

module.exports = nextConfig
3. Initialize Git and Push
bash# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Chemistry consultancy website"

# Add your GitHub repository as origin (replace with your username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/chemistry-consultancy.git

# Push to GitHub
git push -u origin main
4. Enable GitHub Pages

Go to your repository on GitHub
Click "Settings" tab
Scroll down to "Pages" in left sidebar
Under "Source", select "GitHub Actions"
That's it! GitHub will automatically use the workflow file

5. Monitor Deployment

Go to "Actions" tab in your repository
You'll see the deployment workflow running
First deployment takes 2-3 minutes
Once complete, your site will be available at:
https://YOUR-USERNAME.github.io/chemistry-consultancy/


Making Updates
After initial deployment, any time you push changes:
bash# Make your changes to the code
# Then commit and push
git add .
git commit -m "Update website content"
git push
GitHub Actions will automatically redeploy your site!

🔧 Troubleshooting
Common Local Issues
"command not found: npm"

Node.js not installed correctly
Restart terminal after installation
On WSL: make sure you installed in WSL, not Windows

Port 3000 already in use:
bash# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
Module not found errors:
bash# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
Common GitHub Issues
GitHub Pages not working:

Repository must be public (or have GitHub Pro)
Check "Actions" tab for error messages
Ensure next.config.js has correct repository name
Wait 5-10 minutes after first deployment

Build failing:

Check "Actions" tab for detailed error logs
Ensure all files are properly committed
Test build locally first: npm run build

404 errors on deployed site:

Double-check repository name in next.config.js
Ensure you're using the correct URL format
Clear browser cache


📁 File Structure Reference
Your final project should look like this:
chemistry-consultancy/
├── .git/                          # Git repository data
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions workflow
├── node_modules/                  # Dependencies (auto-generated)
├── out/                          # Built static files (auto-generated)
├── src/
│   └── app/
│       ├── globals.css           # Global styles
│       ├── layout.tsx            # App layout
│       └── page.tsx              # Main page component
├── .gitignore                    # Files to ignore in git
├── next.config.js                # Next.js configuration
├── package.json                  # Project dependencies
├── package-lock.json             # Lock file (auto-generated)
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
└── tailwind.config.js            # Tailwind CSS configuration

🎯 Quick Start Summary
For Local Development:
bashmkdir chemistry-consultancy && cd chemistry-consultancy
# Copy all files from the artifact
npm install
npm run dev
# Open http://localhost:3000
For GitHub Pages:
bash# After setting up locally
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/chemistry-consultancy.git
git push -u origin main
# Enable GitHub Pages in repository settings
Your live site will be at:
https://YOUR-USERNAME.github.io/chemistry-consultancy/

💡 Pro Tips

Test locally first - Always run npm run build before pushing to catch errors
Use descriptive commit messages - Makes tracking changes easier
Check Actions tab - Monitor deployments and catch issues early
Custom domain - You can add a custom domain in GitHub Pages settings
HTTPS by default - GitHub Pages provides free SSL certificates

Need help with any of these steps? Let me know!