# Expense Tracker with GraphQL

A full-stack expense tracking application using React, GraphQL, and Node.js. Track your income and expenses with a clean UI and GraphQL API backend.

---

## Features

- Add, update, and delete expenses and income entries
- View balance summary
- GraphQL API for flexible queries and mutations
- Secure session management with `SESSION_SECRET`
- MongoDB integration for data storage

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SHANKAR-YADAVA/Expense-Tracker-GraphQL.git
cd Expense-Tracker-GraphQL
```

2. Install dependencies for both backend and frontend:

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

3. Configure environment variables:

Create a .env file inside the backend folder with the following content:

```bash
MONGO_URI="YOUR_MONGO_URI"
SESSION_SECRET="YOUR_SECRET_KEY"
```

4. Start the development servers:

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a new terminal)
cd ../frontend
npm start
```

Usage
Open your browser and go to http://localhost:3000

Add and manage your expenses and income easily

Data is stored securely in MongoDB

Technologies Used
React
GraphQL
Node.js with Express
MongoDB
Apollo Client and Server
Passportjs for authentication

Contributing
Feel free to submit issues or pull requests if you want to improve the project!