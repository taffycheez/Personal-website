# Image Assets

## Required Images

### Headshot (headshot.jpg)
**Location:** `assets/images/headshot.jpg`

Please add your professional headshot here with the following specifications:
- **Filename:** `headshot.jpg` (or `headshot.png`)
- **Dimensions:** Minimum 400x400px (square aspect ratio recommended)
- **Format:** JPG or PNG
- **File size:** Under 500KB for optimal performance
- **Style:** Professional, clear, well-lit photo with neutral background

If using a PNG file, update the image reference in `index.html`:
```html
<img src="assets/images/headshot.png" alt="Varya Kern" class="avatar avatar-xl">
```

## Optional Images

### Project Screenshots
Add project screenshots to `assets/images/projects/` folder for enhanced project cards.

Format:
- Dimensions: 800x600px or similar 4:3 ratio
- Optimized for web (compress before uploading)
- Descriptive filenames (e.g., `data-analysis-project.png`)

### Favicon
The site currently references `favicon.ico` in the root directory. You can:
1. Generate a favicon from your headshot or initials
2. Use a service like [favicon.io](https://favicon.io) to create one
3. Place the `favicon.ico` file in the root directory of the project

## Image Optimization Tips

Before uploading images:
1. **Compress images** using tools like TinyPNG, Squoosh, or ImageOptim
2. **Use appropriate formats:**
   - JPG for photographs
   - PNG for graphics with transparency
   - WebP for better compression (with JPG/PNG fallback)
3. **Responsive images:** Consider creating multiple sizes for different screen resolutions

## Image Accessibility

Always include descriptive alt text for images:
- Be specific and descriptive
- Avoid "image of" or "picture of"
- If image is decorative, use `alt=""`

Example:
```html
<img src="project-screenshot.png" alt="Data visualization dashboard showing climate trends">
```
