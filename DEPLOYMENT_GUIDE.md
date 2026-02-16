# Alt Tales Website - Complete Deployment Guide

## 🎉 What's Been Done

I've completely rebuilt your website from scratch as a **clean, simple static site** optimized for Netlify hosting. No more Express server, no tRPC complexity, no OAuth code - just a straightforward React app with Netlify Functions for your forms.

### ✅ What's Working

- **Clean React + Vite app** with routing (Home, About, Series, Contact pages)
- **Netlify Functions** for email signup and contact forms
- **Supabase integration** ready to connect
- **All your content** (book cover, text, styling)
- **Pushed to GitHub**: https://github.com/xxzabxx/alt-tales-website

### 📁 Project Structure

```
alt-tales-clean/
├── netlify/functions/     # Serverless functions for forms
│   ├── subscribe.js       # Email signup handler
│   └── contact.js         # Contact form handler
├── public/images/         # Book cover and assets
├── src/
│   ├── pages/             # All your pages
│   ├── App.jsx            # Main app with navigation
│   └── *.css              # Styling
└── netlify.toml           # Netlify configuration
```

---

## 🚀 Step-by-Step Deployment to Netlify

### Step 1: Verify Supabase Tables

Your Supabase database should already have these tables. Let's verify:

1. Go to https://supabase.com and log into your project
2. Click on **SQL Editor** in the left sidebar
3. Run this query to check if tables exist:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('email_subscribers', 'users');
```

If tables are missing, create them:

```sql
-- Email subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50),
  subscribed_at TIMESTAMP DEFAULT NOW()
);

-- Users table (for contact form)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  open_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Step 2: Get Supabase Credentials

1. In your Supabase project dashboard, click **Settings** (gear icon in bottom left)
2. Click **API** in the settings menu
3. Copy these two values (you'll need them in Step 4):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

### Step 3: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your repository: **alt-tales-website**
5. Netlify should auto-detect the settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`
6. Click **"Deploy site"**

### Step 4: Add Environment Variables in Netlify

**IMPORTANT**: Your forms won't work until you add these!

1. In your Netlify site dashboard, go to **Site configuration** → **Environment variables**
2. Click **"Add a variable"** → **"Add a single variable"**
3. Add these two variables:

   **Variable 1:**
   - Key: `SUPABASE_URL`
   - Value: (paste your Project URL from Step 2)

   **Variable 2:**
   - Key: `SUPABASE_ANON_KEY`
   - Value: (paste your anon/public key from Step 2)

4. Click **"Save"**
5. Go to **Deploys** and click **"Trigger deploy"** → **"Deploy site"**

### Step 5: Connect Your Domain

1. In Netlify dashboard, go to **Domain management**
2. Click **"Add a domain"**
3. Enter: `alt-tales.com`
4. Netlify will show you DNS settings
5. Go to your domain registrar (where you bought alt-tales.com)
6. Update DNS records as Netlify instructs
7. Wait for DNS propagation (can take up to 48 hours, usually much faster)
8. Netlify will automatically provision SSL certificate

---

## ✅ Testing Your Site

Once deployed:

### Test Email Signup Form
1. Go to your homepage
2. Enter an email address
3. Click "Get First Chapter"
4. You should see "Success! Check your email for the first chapter."
5. Verify in Supabase: Go to **Table Editor** → **email_subscribers** → you should see the email

### Test Contact Form
1. Go to `/contact` page
2. Fill out name, email, message
3. Click "Send Message"
4. You should see "Thank you for your message!"
5. Verify in Supabase: Go to **Table Editor** → **users** → you should see the entry

---

## 🐛 Troubleshooting

### Forms Not Working

**Check Netlify Function Logs:**
1. Go to Netlify dashboard
2. Click **Functions** in the left sidebar
3. Click on `subscribe` or `contact` function
4. Check the logs for errors

**Common Issues:**
- ❌ Environment variables not set → Go back to Step 4
- ❌ Supabase tables don't exist → Go back to Step 1
- ❌ Wrong Supabase credentials → Double-check Step 2

### Build Failures

1. Check **Deploys** → Click on failed deploy → View logs
2. Most common issue: Missing dependencies
3. Solution: Make sure `package.json` has all dependencies

### Database Connection Errors

1. Verify Supabase project is active (not paused)
2. Check environment variables are exactly correct (no extra spaces)
3. Ensure tables exist with correct schema

---

## 📝 Future Updates

When you want to make changes to your site:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/xxzabxx/alt-tales-website.git
   cd alt-tales-website
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Make your changes** to files in `src/`

4. **Test locally** (optional):
   ```bash
   pnpm run dev
   ```

5. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```

6. **Netlify auto-deploys** - Your site updates automatically!

---

## 🎨 What's Next?

Your site is now ready to go! Here are some future enhancements you might want:

- [ ] Add music player for resonance tracks
- [ ] Implement TikTok feed integration
- [ ] Add FAQ page with magic system details
- [ ] Set up email notifications when forms are submitted
- [ ] Add Google Analytics or other tracking

---

## 📧 Your Database Connection

For reference, here's your Supabase connection string:
```
postgresql://postgres.lcuqehfhifuigrtxskfz:iSxEmtCRI8WzBEWW@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

**Project URL**: `https://lcuqehfhifuigrtxskfz.supabase.co`

---

## 🎯 Summary

1. ✅ Code pushed to GitHub
2. ⏳ Deploy to Netlify (follow Step 3)
3. ⏳ Add environment variables (Step 4)
4. ⏳ Connect domain (Step 5)
5. ⏳ Test forms (Testing section)

**You're almost there!** Just follow Steps 3-5 above and your site will be live.

---

Need help? Check the troubleshooting section or review the logs in Netlify dashboard.
