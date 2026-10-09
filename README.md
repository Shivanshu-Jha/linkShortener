# 🔗 URL Shortener 
A fast, secure, and scalable URL shortening service built with the modern web stack. This application allows users to transform long, cumbersome links into neat, shareable URLs while providing tracking and secure user management.

## 🌐 Live Demo
Check it out here: [link-shortener-gold.vercel.app](https://link-shortener-gold.vercel.app)



## ✨ Key Features
- 🔔 Instant Shortening: Generate compact links in seconds using Next.js API routes.

- 📚 Custom Analytics: Integrated tracking to monitor click-through rates and link performance.

- 🔐 Secure Authentication: Implemented NextAuth for GitHub/Google login to protect user dashboards.

- 🎞 Scalable Storage: Powered by MongoDB for high-speed lookups and persistent data storage.

- 🎨 Responsive UI: A mobile-first design crafted with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication** NextAuth.js
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account (or local MongoDB)
- GitHub Developer Account (for NextAuth)


### Installation

```bash
# Clone the repo
git clone https://github.com/Shivanshu-Jha/URL-Shortener.git
cd URL-Shortener
```


# Install dependencies
```bash
npm install
```

### 🌍Set up environment variables Create a .env.local file in the root directory:


```bash
# Code Snippet
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```




```bash
# Run the development server
npm run dev
```



## 📐 System Architecture

The application uses Next.js API Routes as a serverless backend. When a short link is accessed, the server performs a $O(1)$ or $O(\log n)$ lookup in MongoDB to retrieve the original URL and performs a 302 Redirect to track the click before the user reaches the destination.

🧠 Author
Shivanshu Shekhar Jha 

📄 License
This project is open-source and available under the MIT License.
