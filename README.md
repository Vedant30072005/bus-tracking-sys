# 🚌 Where Is My Bus — Real-Time Bus Tracking System

**[🟢 Live Demo on Vercel](https://bus-tracking-sys.vercel.app)** | **[💻 GitHub Repository](https://github.com/Vedant30072005/bus-tracking-sys)**

A full-stack real-time bus tracking web application that lets passengers track buses live on a map, view bus schedules/timings, see driver information, and register/login.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + Vite |
| **Styling** | Vanilla CSS (Premium Dark Mode) |
| **Maps** | Leaflet.js + OpenStreetMap (Free, No API Key) |
| **Backend** | Node.js + Express.js |
| **Database** | In-Memory (No Setup Needed) |
| **Real-time** | Socket.io |
| **Auth** | JWT + bcrypt |

## 🚀 Quick Start

### 1. Start Backend
```bash
cd backend
npm install
npm start
```
## 🧭 Monitoring & Logging

I added structured logging (Winston) and request logging (Morgan) to the backend. You can optionally enable Sentry for error reporting by setting `SENTRY_DSN` in your `.env`.

Quick start:

```bash
# set SENTRY_DSN in .env (optional)
cd backend
npm install
npm start
```

Logs are JSON-formatted in production and human-readable in development. For production, forward logs to a centralized service (Logstash/Fluentd/Cloud logging).
Server runs on `http://localhost:5000`

### 2. Start Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5173`

## 🔑 Demo Login

- **Admin**: `admin@whereismybus.com` / `admin123`
- **User**: Register a new account from the Login page

## 📋 Features

- ✅ Live bus tracking on interactive map (OpenStreetMap + Leaflet)
- ✅ 10 realistic Indian bus routes with schedules and stops
- ✅ 12 buses with driver information and amenities
- ✅ Real-time bus movement simulation via Socket.io
- ✅ ETA calculation using Haversine distance formula
- ✅ Search routes by From/To cities
- ✅ Expandable schedule/timetable view
- ✅ User registration and login (JWT)
- ✅ Admin panel to manage buses and routes
- ✅ Premium dark-mode UI with glassmorphism
- ✅ Responsive design (mobile & desktop)

## 📍 Sample Routes

| Route | Distance | Duration |
|---|---|---|
| Mumbai → Pune | 150 km | 3h 30m |
| Delhi → Jaipur | 280 km | 5h 30m |
| Bangalore → Chennai | 350 km | 6h 00m |
| Hyderabad → Vijayawada | 275 km | 5h 00m |
| Ahmedabad → Udaipur | 260 km | 5h 00m |
| Kolkata → Digha | 185 km | 4h 00m |
| Lucknow → Varanasi | 320 km | 6h 30m |
| Pune → Goa | 450 km | 9h 00m |
| Chennai → Coimbatore | 505 km | 8h 30m |
| Delhi → Chandigarh | 250 km | 4h 30m |

## 🆓 Free APIs Used

- **OpenStreetMap** — Free map tiles (no API key)
- **Leaflet.js** — Map rendering library
- **DiceBear Avatars** — Free avatar generation for driver photos
- **Browser Geolocation API** — Built-in GPS (free)

## ▶️ Start Both Servers (one command)

If you want to launch the backend and frontend together, use one of the helper scripts included at the repository root.

- **PowerShell (Windows)** — runs in two PowerShell windows and installs deps if needed:

```powershell
.\start-all.ps1
```

- **Batch (Windows cmd)** — opens two cmd windows and installs deps if needed:

```cmd
start-all.bat
```

These scripts assume the repository layout is unchanged (folders `backend` and `frontend` at the repo root).

## 📦 Docker & Persistent DB

You can run the app with Docker Compose — a `mongo` service is included for a persistent database. To use it:

1. Copy `.env.example` to `.env` and adjust `MONGODB_URI` if needed.
2. Run:

```bash
docker-compose up --build
```

The backend will be available on `http://localhost:5000` and frontend on `http://localhost:5173`.

Note: The app still uses an in-memory seed DB by default. Migrating routes/models to use MongoDB is a follow-up task.

## 🔐 HTTPS (Local development)

The backend can optionally run over HTTPS when you provide SSL certificate and key paths via environment variables. This is useful for testing service workers, secure cookies, or mixed-content issues.

1. Create a self-signed cert (example using OpenSSL):

```bash
mkdir certs && cd certs
openssl req -x509 -newkey rsa:4096 -nodes -keyout localhost-key.pem -out localhost-cert.pem -days 365 -subj "/CN=localhost"
```

2. Set environment variables (copy to `.env`):

```
SSL_KEY_PATH=./certs/localhost-key.pem
SSL_CERT_PATH=./certs/localhost-cert.pem
```

3. Start the backend (it will detect the certs and run HTTPS):

```bash
cd backend
npm start
```

If cert paths are not provided or files are missing, the server falls back to HTTP. For production, obtain valid certificates and terminate TLS at your reverse proxy/load balancer.
