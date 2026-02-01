// ==================== CONTACT FORM HANDLER - WHATSAPP INTEGRATION ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '📱 Opening WhatsApp...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create WhatsApp message
            const whatsappMessage = `Hello! 🙏\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nSubject: ${subject}\n\nMessage:\n${message}`;
            
            // WhatsApp Business Number
            const whatsappNumber = '9779860560395';
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Show success message first
            showPopup();
            contactForm.reset();
            submitBtn.textContent = '✓ Redirecting to WhatsApp...';
            
            // Open WhatsApp after short delay
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                submitBtn.textContent = originalText;
            }, 1500);
            
        } catch (error) {
            console.error('Form error:', error);
            showErrorAlert('Error preparing message. Please try again.');
            submitBtn.textContent = originalText;
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// ==================== SUCCESS POPUP ====================
function showPopup() {
    const popup = document.getElementById('successPopup');
    const overlay = document.getElementById('popupOverlay');
    
    if (popup && overlay) {
        // Update popup text for WhatsApp
        const popupH3 = popup.querySelector('h3');
        const popupP = popup.querySelector('p');
        
        if (popupH3) popupH3.textContent = '✓ Message Ready!';
        if (popupP) popupP.textContent = 'Opening WhatsApp to send your message...';
        
        popup.classList.add('show');
        overlay.classList.add('show');
        
        // Auto-close after 3 seconds
        setTimeout(() => {
            closePopup();
        }, 3000);
    }
}

// ==================== CLOSE POPUP ====================
function closePopup() {
    const popup = document.getElementById('successPopup');
    const overlay = document.getElementById('popupOverlay');
    
    if (popup && overlay) {
        popup.classList.remove('show');
        overlay.classList.remove('show');
    }
}

// ==================== ERROR ALERT ====================
function showErrorAlert(message) {
    alert(message || 'There was an error. Please try using WhatsApp directly.');
}

// ==================== POPUP EVENT LISTENERS ====================
const popupOverlay = document.getElementById('popupOverlay');
if (popupOverlay) {
    popupOverlay.addEventListener('click', closePopup);
}

// Close popup when clicking close button
const closePopupBtn = document.querySelector('.popup .close-btn');
if (closePopupBtn) {
    closePopupBtn.addEventListener('click', closePopup);
}
