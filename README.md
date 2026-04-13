<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=InterviewX&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=AI%20Interview%20Agent&descAlignY=60&descSize=24&animation=fadeIn" width="100%"/>

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-interviewx--ai.onrender.com-6c63ff?style=for-the-badge&logoColor=white)](https://interviewx-ai.onrender.com)
&nbsp;
[![Made with React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
&nbsp;
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
&nbsp;
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)

<br/>

> **Turn your resume into a personalized interview simulation. AI-powered. Real-time. Feedback-driven.**

<br/>

</div>

---

## ✨ What is InterviewX?

**InterviewX** is a full-stack AI-powered interview preparation platform that **analyzes your resume** and generates **personalized technical & HR interview questions** — then gives you intelligent feedback to sharpen your performance.

No generic questions. No cookie-cutter prep. Just interview simulations **built around *you*.**

---

## 🎯 Core Features

| Feature | Description |
|---|---|
| 🤖 **AI Question Generation** | Dynamically generates technical & HR questions from your uploaded resume |
| 📄 **Resume Intelligence** | Parses and understands your skills, experience, and projects |
| 💡 **Smart Feedback Engine** | Provides intelligent, actionable feedback on your answers |
| 🔐 **Google Authentication** | Secure sign-in powered by Firebase Auth |
| 💳 **Credit-Based Access** | Flexible usage model with Razorpay payment integration |
| 🎨 **Smooth UI/UX** | Animated, responsive interface built with Framer Motion |
| ☁️ **Cloud Deployed** | Scalable deployment on Render |

---

## 🧠 How It Works

```
📄 Upload Resume
      ↓
🤖 AI Analyzes Skills + Experience
      ↓
❓ Personalized Questions Generated
      ↓
🎙️ You Answer in Real-Time
      ↓
📊 AI Evaluates & Provides Feedback
      ↓
🚀 You're Interview-Ready!
```

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
[![React](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)

### Database
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)

### Auth & Payments
[![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)

### Deployment
[![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)](https://render.com/)

</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account
- Firebase project (for auth)
- Razorpay account (for payments)

### 1. Clone the Repository

```bash
git clone https://github.com/vishal1238/interviewx.git
cd interviewx
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3. Configure Environment Variables

**Backend — `server/.env`**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FIREBASE_PROJECT_ID=your_firebase_project_id
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

**Frontend — `client/.env`**
```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 4. Run Locally

```bash
# Start backend server
cd server
npm run dev

# Start frontend (in a new terminal)
cd client
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

---

## 📁 Project Structure

```
interviewx/
├── client/                   # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Route-level pages
│   │   ├── hooks/            # Custom React hooks
│   │   ├── context/          # Global state (Auth, Credits)
│   │   └── utils/            # Helper functions
│   └── public/
│
├── server/                   # Node.js + Express Backend
│   ├── routes/               # API route handlers
│   ├── controllers/          # Business logic
│   ├── models/               # MongoDB schemas
│   ├── middleware/            # Auth & error middleware
│   └── utils/                # AI prompts, helpers
│
└── README.md
```

---

## 🌐 Live Demo

> 🔗 **[https://interviewx-ai.onrender.com](https://interviewx-ai.onrender.com)**

| Step | Action |
|------|--------|
| 1️⃣ | Sign in with Google |
| 2️⃣ | Upload your resume (PDF) |
| 3️⃣ | Choose interview type: Technical / HR / Mixed |
| 4️⃣ | Answer AI-generated questions |
| 5️⃣ | Get detailed performance feedback |

---

## 💳 Credit System

InterviewX uses a **credit-based model** for fair usage:

- 🆓 Free credits on signup
- 💰 Purchase additional credits via **Razorpay** (UPI, Cards, Net Banking supported)
- 🎯 Each interview session consumes credits based on depth and question count

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
# Open a Pull Request 🚀
```
---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" width="100%"/>

**Built with ❤️ by Vishal Gupta(https://github.com/vishal1238)**

⭐ **Star this repo if InterviewX helped you land your dream job!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/vishal1238/interviewx?style=social)](https://github.com/vishal1238/interviewx)
[![GitHub forks](https://img.shields.io/github/forks/vishal1238/interviewx?style=social)](https://github.com/vishal1238/interviewx)

</div>
