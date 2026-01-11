# TalkTayo Setup Guide for John

## Prerequisites

Before you start, make sure you have these installed:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify: Open terminal and run `node --version`

2. **MongoDB Community Server**
   - Download from: https://www.mongodb.com/try/download/community
   - Install and make sure MongoDB service is running

3. **Git** (to clone the repository)
   - Download from: https://git-scm.com/

## Step 1: Clone the Repository

Open your terminal (Command Prompt or PowerShell) and run:

```bash
git clone https://github.com/docurev111/Chatroom-Activity-8.git
cd Chatroom-Activity-8
```

## Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 3: Install Frontend Dependencies

Open a NEW terminal window and run:

```bash
cd frontend
npm install
```

## Step 4: Start MongoDB

**Windows:**
- MongoDB should start automatically as a service
- If not, search for "Services" in Windows and start "MongoDB Server"

**Mac/Linux:**
```bash
brew services start mongodb-community
# or
sudo systemctl start mongod
```

## Step 5: Start the Backend

In the backend terminal:

```bash
npm run start:dev
```

You should see:
```
Application is running on: http://localhost:3000
Swagger documentation available at: http://localhost:3000/api/docs
```

## Step 6: Start the Frontend

In the frontend terminal:

```bash
npm run dev
```

You should see:
```
Local: http://localhost:5173/
```

## Step 7: Open the App

Open your browser and go to:
```
http://localhost:5173
```

## Usage

1. Enter your username
2. Create a new room or join an existing one
3. Start chatting!

## Troubleshooting

**Backend won't start:**
- Make sure MongoDB is running
- Check if port 3000 is available
- Run `npm install` again in the backend folder

**Frontend won't start:**
- Check if port 5173 is available
- Run `npm install` again in the frontend folder

**"Cannot connect to database" error:**
- Make sure MongoDB service is running
- Check MongoDB Compass to verify it's running on port 27017

## Updating to Latest Version

To get the latest updates:

```bash
cd Chatroom-Activity-8
git pull origin main
cd backend
npm install
cd ../frontend
npm install
```

Then restart both servers.
