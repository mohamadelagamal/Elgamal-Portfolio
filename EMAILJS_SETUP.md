# EmailJS Setup Guide for Contact Form

## 🚀 Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** 
4. Click **Connect Account** and authorize with your Gmail (`mohamad.elgamal.tech@gmail.com`)
5. Copy the **Service ID** (something like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (something like `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (something like `user_xxxxxxxxxxxxxxxx`)

### Step 5: Update Your Code
In your `src/App.jsx`, replace these placeholders:

```javascript
// Line ~20
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

// Line ~35-36
'YOUR_SERVICE_ID', // Replace with your service ID
'YOUR_TEMPLATE_ID', // Replace with your template ID
```

### Step 6: Test the Form
1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your Gmail inbox for the message

## 📧 Example Configuration

```javascript
// Initialize EmailJS
emailjs.init('user_1a2b3c4d5e6f7g8h9i');

// Send email
await emailjs.send(
  'service_gmail123',
  'template_contact456',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'mohamad.elgamal.tech@gmail.com'
  }
);
```

## 🎯 Features Added
- ✅ Form validation (all fields required)
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ Form reset after successful send
- ✅ Automatic status clear after 5 seconds
- ✅ Professional email template

## 🔧 Troubleshooting
- **Error 400**: Check your service ID and template ID
- **Error 401**: Verify your public key
- **Error 403**: Ensure Gmail service is properly connected
- **No email received**: Check spam folder and template configuration

## 📝 Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms