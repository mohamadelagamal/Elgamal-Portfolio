# Elgamal Portfolio

Professional portfolio website for Mohamad Elgamal - Android, Flutter & Backend Developer

## 🚀 Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Framer Motion** - Animations

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Automatic Deployment to Hostinger

This project uses GitHub Actions to automatically deploy to Hostinger when you push with a specific commit message.

### Setup Instructions:

1. **Add GitHub Secrets** (Go to your repository → Settings → Secrets and variables → Actions):
   - `FTP_SERVER` - Your Hostinger FTP server (e.g., `ftp.yourdomain.com`)
   - `FTP_USERNAME` - Your FTP username
   - `FTP_PASSWORD` - Your FTP password

2. **Deploy to Hostinger**:
   ```bash
   git add .
   git commit -m "upload to hostinger"
   git push
   ```

   The GitHub Action will automatically:
   - Build your project
   - Deploy to Hostinger via FTP
   - Update your live website

### Manual Deployment:

If you prefer to deploy manually:
```bash
npm run build
# Upload the contents of the 'dist' folder to your Hostinger public_html directory
```

## 📝 License

© 2026 Mohamad Elgamal - All rights reserved
