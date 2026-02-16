# Alt Tales - RJ Stenson Author Website

A clean, static website for author RJ Stenson featuring The Shadow Index book series. Built with React + Vite and optimized for Netlify hosting with Supabase database.

## Features

- **Email Signup**: Collect emails for newsletter and first chapter downloads
- **Contact Form**: Working contact form that saves to Supabase
- **Responsive Design**: Mobile-friendly noir urban fantasy aesthetic
- **Static Hosting**: Optimized for Netlify with serverless functions
- **Database Integration**: Supabase PostgreSQL for data storage

## Tech Stack

- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM
- **Hosting**: Netlify (static hosting + serverless functions)
- **Database**: Supabase PostgreSQL
- **Version Control**: GitHub

## Project Structure

```
alt-tales-clean/
├── netlify/
│   └── functions/          # Netlify serverless functions
│       ├── subscribe.js    # Email subscription handler
│       └── contact.js      # Contact form handler
├── public/
│   └── images/             # Static images (book covers, etc.)
├── src/
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Series.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app with routing
│   └── App.css             # Global styles
├── netlify.toml            # Netlify configuration
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Supabase Database

You already have a Supabase project. Make sure these tables exist:

**email_subscribers table:**
```sql
CREATE TABLE email_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50),
  subscribed_at TIMESTAMP DEFAULT NOW()
);
```

**users table** (for contact form):
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  open_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Configure Environment Variables in Netlify

After deploying to Netlify, add these environment variables in your Netlify dashboard:

- `SUPABASE_URL`: Your Supabase project URL (e.g., `https://lcuqehfhifuigrtxskfz.supabase.co`)
- `SUPABASE_ANON_KEY`: Your Supabase anonymous/public key

**Where to find these:**
1. Go to your Supabase project dashboard
2. Click on "Settings" → "API"
3. Copy the "Project URL" and "anon/public" key

### 4. Local Development

```bash
pnpm run dev
```

**Note:** Forms won't work locally without Netlify Functions. To test locally, you can use Netlify CLI:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Run with Netlify Dev (simulates serverless functions)
netlify dev
```

### 5. Deploy to Netlify

#### Option A: Connect GitHub Repository (Recommended)

1. Push this code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - clean rebuild"
   git remote add origin https://github.com/xxzabxx/alt-tales-website.git
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings should auto-detect:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Add environment variables (SUPABASE_URL and SUPABASE_ANON_KEY)
7. Click "Deploy site"

#### Option B: Manual Deploy

```bash
# Build the project
pnpm run build

# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### 6. Connect Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `alt-tales.com`
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

## Testing Forms

After deployment:

1. **Test Email Signup**: Go to homepage, enter email, click "Get First Chapter"
2. **Test Contact Form**: Go to /contact, fill out form, submit
3. **Verify in Supabase**: Check your Supabase tables to confirm data was saved

## Database Connection String

Your Supabase connection details:
- **Connection String**: `postgresql://postgres.lcuqehfhifuigrtxskfz:iSxEmtCRI8WzBEWW@aws-0-us-east-1.pooler.supabase.com:6543/postgres`
- **Project URL**: Extract from connection string above
- **Database**: `postgres`

## Troubleshooting

### Forms Not Working

1. Check Netlify Function logs in dashboard
2. Verify environment variables are set correctly
3. Ensure Supabase tables exist with correct schema
4. Check browser console for errors

### Build Failures

1. Ensure all dependencies are installed: `pnpm install`
2. Check Node.js version (should be 18+)
3. Review build logs in Netlify dashboard

### Database Connection Issues

1. Verify Supabase project is active
2. Check that SUPABASE_URL and SUPABASE_ANON_KEY are correct
3. Ensure tables exist in Supabase SQL Editor

## Future Enhancements

- Add music player for resonance tracks
- Implement TikTok feed integration
- Add FAQ page with magic system details
- Email notifications for form submissions

## License

© 2026 RJ Stenson. All rights reserved.
