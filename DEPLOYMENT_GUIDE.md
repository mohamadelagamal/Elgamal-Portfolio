# 🚀 Deployment Guide - Hostinger Auto-Deploy Setup

## ✅ What's Been Done

1. ✅ Initialized Git repository
2. ✅ Committed all project files
3. ✅ Pushed to GitHub: https://github.com/mohamadelagamal/Elgamal-Portfolio.git
4. ✅ Created GitHub Actions workflow for automatic deployment

## 📋 Next Steps - Configure GitHub Secrets

To enable automatic deployment to Hostinger, you need to add your FTP credentials to GitHub:

### Step 1: Get Your Hostinger FTP Credentials

1. Log in to your **Hostinger control panel** (hPanel)
2. Go to **Files** → **FTP Accounts**
3. Note down:
   - **FTP Server/Host** (usually: `ftp.yourdomain.com` or an IP address)
   - **FTP Username** (usually your domain or hosting username)
   - **FTP Password** (create a new FTP account if needed)

### Step 2: Add Secrets to GitHub

1. Go to your repository: https://github.com/mohamadelagamal/Elgamal-Portfolio
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these three secrets:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: Your FTP server (e.g., `ftp.yourdomain.com`)

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: Your FTP username

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password

### Step 3: Deploy to Hostinger

Once secrets are configured, deploying is as simple as:

```bash
# Make any changes to your code
git add .
git commit -m "upload to hostinger"
git push
```

**Important:** The commit message MUST contain the text `upload to hostinger` for the deployment to trigger!

## 🔄 How It Works

1. You push code with commit message containing "upload to hostinger"
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds your React app
   - Uploads the `dist` folder to your Hostinger `public_html` directory via FTP
3. Your website is live! 🎉

## 📝 Regular Updates (Without Deployment)

If you want to push code WITHOUT deploying to Hostinger, just use a different commit message:

```bash
git add .
git commit -m "Updated about section"
git push
```

## 🛠️ Troubleshooting

### If deployment fails:

1. Check GitHub Actions logs:
   - Go to your repository → **Actions** tab
   - Click on the failed workflow run
   - Review the error messages

2. Common issues:
   - **Wrong FTP credentials**: Double-check your secrets
   - **Wrong server path**: The workflow uses `./public_html/` - adjust if your hosting uses a different path
   - **FTP port blocked**: Some hosts use different ports (default is 21)

### Adjust FTP Settings (if needed):

Edit `.github/workflows/deploy.yml` and modify:

```yaml
server-dir: ./public_html/  # Change to your hosting directory
```

Or add a custom port:

```yaml
port: 21  # Add this line if using a non-standard port
```

## 📞 Support

- **GitHub Repository**: https://github.com/mohamadelagamal/Elgamal-Portfolio
- **Hostinger Support**: https://www.hostinger.com/contact

---

**Created:** January 16, 2026
**Author:** Mohamad Elgamal
