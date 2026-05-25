<p align="center">
  <img src="https://user-images.githubusercontent.com/your-logo.png" alt="BookHive logo" width="120" />
</p>

<h1 align="center">📚 BookHive</h1>
<p align="center">
  <strong>Buy. Sell. Exchange. <br>Where Stories Find a New Home.</strong><br><br>
  <em>A modern neon marketplace for second‑hand book lovers.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success" alt="Project Status: Active" />
  <img src="https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Prisma-7.8.0-2D3748?logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
</p>

---

## 🌟 Live Preview

*Coming soon – a live version will be hosted on Vercel.*

---

## ✨ The BookHive Experience

BookHive transforms the way we buy, sell, and exchange second‑hand books.  
It’s built for readers who want to save money, reduce waste, and keep stories alive – all wrapped in a stunning, animated glassmorphism theme with neon accents.

---

## 🚀 Key Features

- **Modern Glass‑UI** – Neon‑infused glassmorphism design with smooth Framer Motion animations and floating stars.
- **User Authentication** – Secure email/password and Google OAuth via Supabase Auth.
- **Sell Your Books** – Upload multiple images (Cloudinary), set price, condition, and exchange availability.
- **Browse & Search** – Advanced filters: category, author, price range, condition, and exchange‑only.
- **Book Exchanges** – Request an exchange for books marked “Available for exchange”. Accept or reject incoming offers.
- **Real‑time Chat** – Built‑in chat system powered by Supabase Realtime, with instant messaging and live updates.
- **Personal Dashboard** – Track your listings, sales, exchanges, and favourites in one place.
- **Responsive** – Fully optimised for desktop, tablet, and mobile.
- **Monetisation‑ready** – Designed for future premium listings, transaction commissions, and ads.

---

## 🧰 Tech Stack

| Frontend | Backend & Database | Other |
|----------|-------------------|-------|
| [Next.js 16](https://nextjs.org/) (App Router) | [Supabase](https://supabase.com) (PostgreSQL, Auth, Realtime) | [Cloudinary](https://cloudinary.com) – image uploads |
| [React](https://react.dev) | [Prisma 7](https://www.prisma.io) (ORM) | [Framer Motion](https://www.framer.com/motion/) – animations |
| [Tailwind CSS](https://tailwindcss.com) | Next.js API Routes | [react‑icons](https://react-icons.github.io/react-icons/) & [react‑hot‑toast](https://react-hot-toast.com/) |
| TypeScript | | |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** ≥ 18  
- **npm** or **yarn**  
- A free [Supabase](https://supabase.com) account  
- A free [Cloudinary](https://cloudinary.com) account  

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookhive.git
cd bookhive
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add:

```env
# Supabase 
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-key

# Cloudinary 
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=bookhive_unsigned
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Also make sure `.env` contains the database URL (already present in the project):

```env
DATABASE_URL="postgresql://postgres.xxxx:password@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_DATABASE_URL="postgresql://postgres.xxxx:password@db.xxxx.supabase.co:5432/postgres?sslmode=require"
```

### 4. Set up Supabase

- Enable **Email Auth** and **Google Auth** (if desired) in your Supabase project.
- Run the SQL scripts in the `prisma` folder (or use the provided SQL editor statements) to create the required tables and seed categories.
- Enable **Realtime** on the `messages` table for chat to work.

### 5. Configure Cloudinary

- Create an **unsigned upload preset** called `bookhive_unsigned` in your Cloudinary settings (Settings → Upload → Upload presets).

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Register a new account and start exploring!

---

## 📁 Project Structure

```
bookhive/
├── app/               # Next.js App Router pages & API routes
│   ├── api/           # REST endpoints (books, categories, exchanges, etc.)
│   ├── books/         # Browse & book detail pages
│   ├── chat/          # Real‑time chat
│   ├── dashboard/     # User dashboard
│   ├── login/         # Login page
│   ├── register/      # Registration page
│   └── sell/          # Sell a book form
├── components/        # Reusable UI components (layout, home sections, UI)
├── lib/               # Helper files (Prisma client, auth, Cloudinary)
├── prisma/            # Prisma schema & migrations
├── public/            # Static assets
├── .env               # Database connection strings
├── .env.local         # Client‑side environment variables
└── tailwind.config.ts
```

---

## 🎨 Screenshots

<p align="center">
  <em>Homepage – Neon hero with floating books</em><br>
  <img src="https://via.placeholder.com/800x400/12122a/00f0ff?text=BookHive+Homepage" alt="Homepage" width="800" />
  <br><br>
  <em>Dashboard – Your listings & exchanges</em><br>
  <img src="https://via.placeholder.com/800x400/12122a/b300ff?text=BookHive+Dashboard" alt="Dashboard" width="800" />
  <br><br>
  <em>Chat – Real‑time messaging</em><br>
  <img src="https://via.placeholder.com/800x400/12122a/00f0ff?text=BookHive+Chat" alt="Chat" width="800" />
</p>

> Replace placeholders with actual screenshots.

---

## 🗺️ Roadmap

- [x] User authentication (email & Google)
- [x] Book listing with Cloudinary image upload
- [x] Browse & search with filters
- [x] Exchange request system
- [x] Real‑time chat (Supabase Realtime)
- [ ] Favourites / wishlist
- [ ] Ratings & reviews
- [ ] Admin panel
- [ ] Monetisation (featured listings, commissions)
- [ ] Mobile app (PWA or React Native)

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve BookHive, please fork the repository and submit a pull request.  
Make sure to follow the existing code style and add meaningful commit messages.

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, modify, and share it.

---

<p align="center">
  Made with ❤️ and 📚 by <a href="https://github.com/your-username">Your Name</a>
</p>
