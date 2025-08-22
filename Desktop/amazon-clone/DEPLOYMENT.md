# GitHub Pages Deployment Guide

## Fixing the "Amazon Clone" Title Issue

If your GitHub Pages site is only showing "Amazon Clone" instead of the actual website, follow these steps:

### 1. Check Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Make sure **Source** is set to **Deploy from a branch**
5. Select your main branch (usually `main` or `master`)
6. Click **Save**

### 2. Verify File Structure

Ensure your repository has this exact structure:
```
amazon-clone/
├── index.html          # MUST be at root level
├── style.css
├── script.js
├── images/
│   ├── banner1.jpg
│   ├── banner2.jpg
│   ├── banner3.jpg
│   ├── banner4.jpg
│   ├── banner5.jpg
│   ├── amazon-logo.jpg
│   ├── Prime.jpg
│   └── [other product images]
└── README.md
```

**Important**: `index.html` must be in the root directory, not in a subfolder.

### 3. Check index.html Content

Make sure your `index.html` file:
- Starts with `<!DOCTYPE html>`
- Has proper `<html>`, `<head>`, and `<body>` tags
- Contains all the website content
- Is not empty or corrupted

### 4. Force GitHub Pages Rebuild

1. Make a small change to any file (add a space, comment, etc.)
2. Commit and push the change
3. Wait 5-10 minutes for GitHub Pages to rebuild

### 5. Clear Browser Cache

- Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

### 6. Check GitHub Actions (if enabled)

1. Go to **Actions** tab in your repository
2. Look for any failed deployments
3. Check the build logs for errors

### 7. Alternative: Manual Upload

If GitHub Pages still doesn't work:

1. Download your repository as ZIP
2. Extract to a local folder
3. Verify all files are present
4. Re-upload to GitHub
5. Wait for deployment

### 8. Test Locally First

Before deploying, test your website locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### 9. Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Only title shows | Check if index.html is in root directory |
| Images not loading | Verify image paths are correct |
| Styling broken | Ensure CSS file is properly linked |
| JavaScript errors | Check browser console for errors |

### 10. Final Checklist

- [ ] `index.html` is in repository root
- [ ] All image files are present
- [ ] CSS and JS files are linked correctly
- [ ] GitHub Pages is enabled
- [ ] Source branch is selected correctly
- [ ] No build errors in Actions tab

### 11. Still Having Issues?

1. Check the **Issues** tab in your repository
2. Look for similar problems in GitHub Community
3. Verify your repository is public (for free accounts)
4. Try deploying to a different branch

### 12. Contact Support

If nothing works:
- GitHub Support: https://support.github.com/
- GitHub Community: https://github.community/
- Stack Overflow: Tag with `github-pages`

---

**Note**: GitHub Pages can take up to 10 minutes to deploy changes. Be patient and check back later.
