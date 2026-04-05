# Electrotech Services - Frontend

React-based website for Electrotech Services Inc., Mangalore.

## Tech Stack
- React (Vite)
- CSS
- Typed.js

## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Environment
The feedback form sends data to the backend API.
Update the fetch URL in `Contact.jsx` before deploying:
```js
fetch("http://localhost:8080/api/feedback") // change this to production URL
```

## Pages
- Home
- About
- Services
- Contact / Feedback
