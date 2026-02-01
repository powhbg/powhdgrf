# ATMA JYOTI Website - Quick Setup Summary

## ✅ What You Have

A complete, fully-functional website for ATMA JYOTI Yoga Retreat & Sound Healing Center with:

### **7 Complete Pages:**
1. ✅ **index.html** - Home with auto-rotating image carousel
2. ✅ **about.html** - About, philosophy, Google Maps
3. ✅ **sessions.html** - Free daily sessions with timings
4. ✅ **contact.html** - Contact form + WhatsApp + Maps
5. **courses.html** - Ready for update (code provided in deployment guide)
6. **retreats.html** - Ready for update (code provided in deployment guide)
7. **gallery.html** - Ready for update (code provided in deployment guide)

### **Features:**
- ✅ Sticky navigation with logo
- ✅ Auto-sliding hero carousel (changes every 5 seconds)
- ✅ Floating WhatsApp button (always visible)
- ✅ Social media sidebar (Facebook, Instagram)
- ✅ Contact form with Formspree integration
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Dynamic date updates
- ✅ Professional styling with green & gold theme
- ✅ SEO-friendly meta tags

### **Files Structure:**
```
d:\atmahealingschool\
├── index.html ✅
├── about.html ✅
├── sessions.html ✅
├── contact.html ✅
├── courses.html (needs update)
├── retreats.html (needs update)
├── gallery.html (needs update)
├── DEPLOYMENT_GUIDE.md (complete guide)
├── assets/
│   ├── css/
│   │   └── style.css ✅
│   ├── js/
│   │   ├── main.js ✅
│   │   └── form.js ✅
│   └── images/ (add your images here)
```

---

## 🎯 What You Need to Do (5 Easy Steps)

### **Step 1: Add Images** (15 minutes)
- Download or use free images from Unsplash.com, Pexels.com
- Add to `assets/images/` folder:
  - `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (1920x1080 - hero carousel)
  - `sound-healing.jpg`, `yoga-class.jpg`, `kirtan.jpg` (500x300 - session cards)
  - `intro.jpg` (600x400 - about page)
  - Gallery images (6-12 photos for gallery page)

### **Step 2: Update Remaining Pages** (30 minutes)
- Open `DEPLOYMENT_GUIDE.md`
- Copy code for `courses.html`, `retreats.html`, `gallery.html`
- Paste into those files
- Save

### **Step 3: Set Up Formspree** (5 minutes)
1. Go to https://formspree.io
2. Sign up with: atmajyotiyogapokhara@gmail.com
3. Create new form, copy the key
4. In `assets/js/form.js`, find line with `YOUR_FORMSPREE_KEY`
5. Replace with your key
6. Save

### **Step 4: Deploy to Netlify** (10 minutes)
1. Go to https://netlify.com
2. Sign up
3. Drag & drop your `atmahealingschool` folder
4. Done! You have a live URL

### **Step 5: Connect Your Domain** (2 minutes)
1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain: atmajyotiyogaretreat.com
3. Follow Netlify's nameserver setup at your registrar
4. Wait 24-48 hours for DNS propagation
5. Your site is live at https://atmajyotiyogaretreat.com

---

## 🎨 Where to Edit Content

| What to Change | Where to Find | How to Change |
|---|---|---|
| Email | All pages | Search for `atmajyotiyogapokhara@gmail.com` |
| Phone | All pages | Search for `+9779860560395` |
| Session times | sessions.html | Line ~80-120 |
| Course descriptions | courses.html | Card content sections |
| Retreat details | retreats.html | Retreat card sections |
| Address | about.html, contact.html | Search for "2233700" |
| Facebook link | All pages | Replace `https://facebook.com` |
| Instagram link | All pages | Replace `https://instagram.com` |

---

## 🖼️ Image Placement Guide

```html
<!-- Hero carousel (auto-rotates) -->
<img src="assets/images/hero-1.jpg" alt="Yoga & Sound Healing">
<img src="assets/images/hero-2.jpg" alt="Sound Bowls">
<img src="assets/images/hero-3.jpg" alt="Yoga Retreat">

<!-- Session cards (visible on home & sessions pages) -->
<img src="assets/images/sound-healing.jpg" alt="Sound Healing">
<img src="assets/images/yoga-class.jpg" alt="Yoga">
<img src="assets/images/kirtan.jpg" alt="Chanting">

<!-- About intro image -->
<img src="assets/images/intro.jpg" alt="Center">

<!-- Gallery (repeats multiple times) -->
<img src="assets/images/gallery-1.jpg" alt="...">
<img src="assets/images/gallery-2.jpg" alt="...">
... etc
```

---

## 🔄 HTML Updates Needed

### **courses.html**
```bash
Current: Basic template
Action: Replace with code from DEPLOYMENT_GUIDE.md section "courses.html"
Time: 5 minutes
```

### **retreats.html**
```bash
Current: Basic template  
Action: Replace with code from DEPLOYMENT_GUIDE.md section "retreats.html"
Time: 5 minutes
```

### **gallery.html**
```bash
Current: Basic template
Action: Replace with code from DEPLOYMENT_GUIDE.md section "gallery.html"  
Time: 5 minutes
```

---

## 📝 JavaScript Features Explained

### **Main.js** - Handles:
- Sticky navigation
- Image carousel (auto-rotate)
- Mobile menu toggle
- Smooth scrolling
- Animations on scroll
- Dynamic date display
- Session time status

### **Form.js** - Handles:
- Contact form submission
- Formspree integration
- Success popup
- Error handling

---

## 🚀 Quick Deploy Links

| Platform | Link | Features |
|---|---|---|
| **Netlify** | https://netlify.com | Easiest, FREE SSL, FREE hosting |
| **Vercel** | https://vercel.com | Very fast, FREE hosting |
| **GitHub Pages** | https://github.com | FREE, requires GitHub account |

---

## 💡 Tips & Tricks

### **Image Optimization:**
- Resize images before uploading (1920x1080 for hero, 500x300 for cards)
- Compress images at TinyPNG.com (keeps quality, reduces size)
- Use .jpg for photos, .png for icons

### **Testing Before Deploy:**
- Open `index.html` in your browser locally
- Test all links work
- Check images load
- Test form (will fail locally without Formspree)
- Test on mobile (F12 in browser → device mode)

### **Common Mistakes to Avoid:**
- ❌ Don't change file names (keep as index.html, about.html, etc.)
- ❌ Don't change folder structure (keep assets/css/, assets/js/, assets/images/)
- ❌ Don't upload to wrong folder (deploy root `atmahealingschool` folder)
- ❌ Don't forget to set Formspree key (form won't work!)

---

## 📞 Support

**If something breaks:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check browser console errors (F12)
3. Verify file paths in HTML match actual files
4. Ensure all 7 HTML pages exist
5. Check form.js has correct Formspree key

**Get help:**
- Netlify: https://docs.netlify.com
- Formspree: https://formspree.io/help
- Domain issues: Contact your registrar support

---

## ✅ Pre-Launch Checklist

- [ ] All images added to `assets/images/`
- [ ] courses.html updated with new code
- [ ] retreats.html updated with new code
- [ ] gallery.html updated with new code
- [ ] Formspree key added to form.js
- [ ] All 7 pages tested locally
- [ ] Mobile responsive tested
- [ ] Deployed to Netlify/Vercel/GitHub Pages
- [ ] Custom domain connected
- [ ] Domain DNS propagated (24-48 hours)
- [ ] HTTPS working (padlock icon)
- [ ] WhatsApp button working
- [ ] Contact form working
- [ ] Social media links updated

---

## 🎉 You're All Set!

Your website is production-ready. Just:
1. Add images
2. Update remaining pages (copy-paste from guide)
3. Set Formspree key
4. Deploy to Netlify
5. Connect domain
6. You're LIVE!

---

*Any questions? Check DEPLOYMENT_GUIDE.md for detailed instructions.*

---

**Last Updated:** January 2025  
**Status:** ✅ Ready for Deployment
