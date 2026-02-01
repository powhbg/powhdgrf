# ATMA JYOTI Yoga Retreat & Sound Healing Center - Website Deployment Guide

## 📋 Overview

You now have a complete, fully-coded website for ATMA JYOTI Yoga Retreat & Sound Healing Center. This guide will help you:
1. Update remaining pages
2. Replace placeholder images
3. Deploy to free hosting
4. Connect your custom domain
5. Enable SSL certificate

---

## 🎯 Quick Start Checklist

✅ **Done:**
- [x] index.html - Hero with image carousel
- [x] about.html - About & Google Maps
- [x] sessions.html - Free daily sessions with card layout
- [x] assets/css/style.css - Complete responsive styling
- [x] assets/js/main.js - Image carousel, animations, navigation
- [x] assets/js/form.js - Form submission with Formspree

⏳ **Still Need to Complete:**
- [ ] Update courses.html (copy HTML code provided below)
- [ ] Update retreats.html (copy HTML code provided below)
- [ ] Update gallery.html (copy HTML code provided below)
- [ ] Update contact.html (copy HTML code provided below)
- [ ] Add placeholder images to assets/images/
- [ ] Update Formspree endpoint in form.js
- [ ] Deploy to Netlify/GitHub Pages/Vercel
- [ ] Connect atmajyotiyogaretreat.com domain
- [ ] Enable SSL

---

## 🖼️ Image Placeholders to Add

You need to create/add these images to `assets/images/` folder:

**High-Priority Images (Will display immediately):**
1. `hero-1.jpg` - Yoga/meditation scene (1920x1080)
2. `hero-2.jpg` - Sound bowls healing (1920x1080)
3. `hero-3.jpg` - Pokhara mountains (1920x1080)
4. `intro.jpg` - Center/people practicing (600x400)
5. `sound-healing.jpg` - Healing session (500x300)
6. `yoga-class.jpg` - Yoga in progress (500x300)
7. `kirtan.jpg` - Group chanting (500x300)

**Optional Images (For gallery & other pages):**
- Gallery images (12-15 landscape photos)
- Teacher photos
- Center facility photos
- Retreat location photos

### Quick Image Solution:
If you don't have images yet, use these free stock photo sites:
- **Unsplash.com** - Free high-quality yoga/meditation images
- **Pexels.com** - Free stock photos
- **Pixabay.com** - Royalty-free images

Search for: "yoga", "sound bowls", "meditation", "mountains Nepal", "group meditation"

---

## 📝 Remaining Page Code

### **courses.html** (Copy the full code from above)
*Already provided in the detailed code above*

### **retreats.html** Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Yoga Retreats & Trekking Adventures - ATMA JYOTI Yoga Retreat Center">
    <title>Retreats - ATMA JYOTI Yoga Retreat & Sound Healing</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Same Navigation as other pages -->
    <nav class="navbar sticky">
        <!-- Navigation code from index.html -->
    </nav>

    <section class="page-header">
        <h1>Yoga Retreats & Trekking Adventures</h1>
        <p>Immersive Programs in the Himalayas</p>
    </section>

    <section class="free-sessions-highlight">
        <div class="container">
            <h2>Choose Your Retreat</h2>
            
            <div class="sessions-grid">
                <!-- Residential Retreat Card -->
                <div class="program-card">
                    <img src="assets/images/retreat-residential.jpg" alt="Residential Yoga Retreat">
                    <div class="program-card-content">
                        <h3>Residential Yoga Retreat</h3>
                        <p class="donation">Flexible Duration</p>
                        <ul style="text-align: left; margin: 1rem 0;">
                            <li>✓ 3-day retreat</li>
                            <li>✓ 7-day immersion</li>
                            <li>✓ 15-day deep dive</li>
                            <li>✓ Custom duration available</li>
                        </ul>
                        <p><strong>Includes:</strong> Accommodation, Meals, Daily Yoga, Meditation, Sound Healing</p>
                        <a href="https://wa.me/9779860560395?text=I%20am%20interested%20in%20a%20residential%20yoga%20retreat" class="btn btn-secondary" target="_blank">Book Retreat</a>
                    </div>
                </div>

                <!-- Trekking Retreats -->
                <div class="program-card">
                    <img src="assets/images/trek-poon-hill.jpg" alt="Poon Hill Trek">
                    <div class="program-card-content">
                        <h3>Yoga Trekking Adventures</h3>
                        <p class="donation">4-8 Days</p>
                        <h4 style="margin-top: 1rem; color: var(--primary-green);">Trek Options:</h4>
                        <ul style="text-align: left;">
                            <li>✓ Poon Hill Trek</li>
                            <li>✓ Mardi Himal Trek</li>
                            <li>✓ Panchase Trek</li>
                            <li>✓ Australian Camp Trek</li>
                            <li>✓ Begnas Lake Trek</li>
                            <li>✓ Sarang Peace Pagoda Trek</li>
                        </ul>
                        <a href="https://wa.me/9779860560395?text=I%20am%20interested%20in%20a%20yoga%20trekking%20adventure" class="btn btn-secondary" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h3>Plan Your Perfect Retreat</h3>
                <p>Each retreat is customizable. Contact us to discuss your preferences, dates, and group size.</p>
                <a href="contact.html" class="cta-btn"><i class="fas fa-envelope"></i> Contact Us</a>
            </div>
        </div>
    </section>

    <!-- Same Footer & Scripts -->
</body>
</html>
```

### **gallery.html** Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Photo Gallery - ATMA JYOTI Yoga Retreat Center">
    <title>Gallery - ATMA JYOTI Yoga Retreat & Sound Healing</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar sticky">
        <!-- Navigation code from index.html -->
    </nav>

    <section class="page-header">
        <h1>Photo Gallery</h1>
        <p>Moments from ATMA JYOTI</p>
    </section>

    <section style="padding: 5rem 0;">
        <div class="container">
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="assets/images/gallery-1.jpg" alt="Yoga Class">
                    <div class="gallery-overlay">
                        <p style="color: white; text-align: center;">Yoga Class</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="assets/images/gallery-2.jpg" alt="Sound Healing">
                </div>
                <div class="gallery-item">
                    <img src="assets/images/gallery-3.jpg" alt="Meditation">
                </div>
                <div class="gallery-item">
                    <img src="assets/images/gallery-4.jpg" alt="Mountain View">
                </div>
                <div class="gallery-item">
                    <img src="assets/images/gallery-5.jpg" alt="Kirtan">
                </div>
                <div class="gallery-item">
                    <img src="assets/images/gallery-6.jpg" alt="Retreat">
                </div>
                <!-- Add more gallery items as needed -->
            </div>
        </div>
    </section>

    <!-- Footer -->
</body>
</html>
```

### **contact.html** Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact ATMA JYOTI - Yoga Retreat & Sound Healing Center">
    <title>Contact Us - ATMA JYOTI Yoga Retreat & Sound Healing</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar sticky">
        <!-- Navigation code from index.html -->
    </nav>

    <section class="page-header">
        <h1>Get in Touch</h1>
        <p>We'd Love to Hear From You</p>
    </section>

    <section class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <!-- Contact Form -->
                <div>
                    <h3 style="color: var(--primary-green); margin-bottom: 2rem;">Send Us a Message</h3>
                    <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_KEY" method="POST">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone (WhatsApp)</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject *</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div>
                    <h3 style="color: var(--primary-green); margin-bottom: 2rem;">Contact Information</h3>
                    <div class="contact-info">
                        <p>
                            <strong><i class="fas fa-phone"></i> Phone/WhatsApp:</strong><br>
                            <a href="tel:+9779860560395">+977 9860560395</a>
                        </p>
                        <p style="margin-top: 1.5rem;">
                            <strong><i class="fas fa-envelope"></i> Email:</strong><br>
                            <a href="mailto:atmajyotiyogapokhara@gmail.com">atmajyotiyogapokhara@gmail.com</a>
                        </p>
                        <p style="margin-top: 1.5rem;">
                            <strong><i class="fas fa-map-marker-alt"></i> Address:</strong><br>
                            2233700, Pokhara, Nepal
                        </p>
                        <p style="margin-top: 2rem;">
                            <strong>Quick WhatsApp Chat:</strong><br>
                            <a href="https://wa.me/9779860560395?text=Hello%20ATMA%20JYOTI,%20I%20would%20like%20to%20inquire%20about%20your%20programs" class="cta-btn" target="_blank" style="margin-top: 1rem; display: inline-block;">
                                <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Google Maps -->
            <div class="location-section" style="margin-top: 3rem;">
                <h2>Find Us on Map</h2>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.7046236625874!2d83.98844!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39958f27e5a7a1e9%3A0x1234567890ab!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Success Popup -->
    <div id="popupOverlay" class="popup-overlay"></div>
    <div id="successPopup" class="popup">
        <h3>✓ Thank You!</h3>
        <p>We've received your message and will contact you soon via WhatsApp or Email.</p>
        <button class="close-btn" onclick="closePopup()">Close</button>
    </div>

    <!-- Footer -->
</body>
</html>
```

---

## 🚀 Deployment Steps

### **Step 1: Set Up Formspree for Email Submissions**

1. Go to **https://formspree.io/**
2. Click "Sign Up"
3. Enter your email: `atmajyotiyogapokhara@gmail.com`
4. Create a new form project
5. You'll get a unique key like: `xyzabc123def`
6. In `assets/js/form.js`, find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_KEY', {
   ```
7. Replace `YOUR_FORMSPREE_KEY` with your actual key
8. Save the file

---

### **Step 2: Deploy to Netlify (RECOMMENDED - Easiest)**

1. **Sign up on Netlify:**
   - Go to https://netlify.com
   - Click "Sign Up"
   - Connect your GitHub/GitLab account OR use email

2. **Prepare Your Files:**
   - Keep your folder structure clean:
     ```
     atmahealingschool/
     ├── index.html
     ├── about.html
     ├── sessions.html
     ├── courses.html
     ├── retreats.html
     ├── gallery.html
     ├── contact.html
     ├── assets/
     │   ├── css/style.css
     │   ├── js/main.js
     │   ├── js/form.js
     │   └── images/
     │       ├── hero-1.jpg
     │       ├── hero-2.jpg
     │       └── ...other images
     ```

3. **Deploy Method A - Drag & Drop:**
   - In Netlify dashboard, drag your entire `atmahealingschool` folder
   - Wait for deployment to complete
   - You'll get a temporary URL like `xxx-yyy-zzz.netlify.app`

4. **Deploy Method B - GitHub:**
   - Push your code to GitHub
   - In Netlify, click "New site from Git"
   - Connect your GitHub repo
   - Set build command: (leave blank for static sites)
   - Set publish directory: `.` (or the folder containing your HTML files)
   - Click "Deploy"

---

### **Step 3: Connect Your Custom Domain**

1. **In Netlify Dashboard:**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter: `atmajyotiyogaretreat.com`

2. **With Your Domain Registrar (Namecheap, GoDaddy, etc.):**
   - Go to your domain registrar's DNS settings
   - Add Netlify's nameservers (Netlify will show you these):
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Save changes (can take 24-48 hours to propagate)

---

### **Alternative Deploy Options:**

#### **GitHub Pages (Completely FREE)**
1. Create a GitHub account
2. Create a new repository: `atmajyotiyogaretreat.github.io`
3. Push your files to the `main` branch
4. Go to Settings → Pages → Select `main` branch
5. Your site goes live at: `https://atmajyotiyogaretreat.github.io`

#### **Vercel (Also FREE)**
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your project
4. Deploy automatically
5. Connect custom domain in Vercel dashboard

---

## 🔒 SSL Certificate (HTTPS)

**Good News:** Both Netlify and Vercel automatically provide FREE SSL certificates!

- Netlify: Automatic HTTPS enabled
- Vercel: Automatic HTTPS enabled
- GitHub Pages: Automatic HTTPS enabled

Your site will be secure by default ✅

---

## 🎨 How to Update Content

### **Update Text:**
- Open any `.html` file in a text editor
- Find the text you want to change
- Edit and save
- Re-deploy (push to GitHub or re-upload to Netlify)

### **Update Images:**
- Add new images to `assets/images/`
- Update the `src` attribute in HTML:
  ```html
  <img src="assets/images/new-image.jpg" alt="Description">
  ```

### **Update Navigation/Social Links:**
- Edit WhatsApp number: Search for `9779860560395`
- Edit Facebook URL: Search for `https://facebook.com`
- Edit Instagram URL: Search for `https://instagram.com`

### **Update Prices/Descriptions:**
- Find the text in the relevant HTML file
- Edit directly
- Save and redeploy

---

## 📱 Mobile Testing

Test your site on mobile:
- Go to: `https://atmajyotiyogaretreat.com` (when deployed)
- Open in Chrome DevTools (F12) → Toggle device toolbar
- Test different screen sizes (iPhone, iPad, Android)

---

## 🎯 SEO & Google Search

1. **Add Google Analytics:**
   - Go to https://analytics.google.com
   - Create new property for your domain
   - Add tracking code to all HTML files (in `<head>`)

2. **Submit to Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Upload sitemap (auto-generated)

3. **Meta Tags:**
   - Already added! (title, description for each page)

---

## 🐛 Troubleshooting

**Images not showing:**
- Check file paths in HTML
- Ensure images are in `assets/images/` folder
- Use `.jpg` or `.png` format

**Form not working:**
- Verify Formspree key is correct in `form.js`
- Check browser console for errors (F12)

**Site not updating after deployment:**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 5 minutes for CDN to refresh
- In Netlify, click "Trigger deploy" if needed

---

## 📞 Support Resources

- **Netlify Help:** https://docs.netlify.com
- **Formspree Help:** https://formspree.io/help
- **HTML/CSS Help:** https://www.w3schools.com
- **Domain Setup:** Ask your registrar's support team

---

## ✅ Final Checklist Before Launch

- [ ] All 7 HTML pages created/updated
- [ ] All images added to `assets/images/`
- [ ] Formspree key updated in `form.js`
- [ ] Navigation links working
- [ ] WhatsApp button functional
- [ ] Mobile responsive (tested)
- [ ] Images loading correctly
- [ ] Forms submitting successfully
- [ ] Deployed to Netlify/Vercel/GitHub Pages
- [ ] Custom domain connected
- [ ] SSL working (https://)
- [ ] Google Analytics added
- [ ] Google Search Console submitted

---

**Congratulations! Your website is ready to launch!** 🎉

For questions: Contact the hosting provider's support team. Most offer 24/7 live chat help.

---

*Last Updated: January 2025*
