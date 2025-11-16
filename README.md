# 🟢 Mini-Project #1 – JavaScript Frameworks 25F

## 📝 Project Overview

This project is a **simple Express.js web application** that demonstrates fetching and displaying JSON data from a backend server using an API.  
The main goal is to integrate **Express.js** with frontend **JavaScript** to dynamically render JSON data in a professional layout.

---

## 📂 Folder Structure

project-root/
│
├── data/
│   └── Info.json # JSON file containing at least 6 objects
│
├── public/
│   ├── index1.html # Main page with fetch button and JSON display
│   ├── page2.html # Dummy page #2
│   └── page3.html # Dummy page #3
│
├── app.js # Express server setup
├── package.json # Project dependencies
└── README.md # Project description (this file)

---

## ✨ Features

- **Express Server**
  - Serves static HTML files from the \`public\` folder.
  - Provides an API route (\`/data/info\`) to send JSON data to the frontend.

- **Frontend (HTML + CSS + JS)**
  - Main page (\`index1.html\`) fetches JSON data asynchronously using \`fetch\` + \`async/await\`.
  - Dynamically displays JSON data in a styled list with cards and shadows.
  - Two additional dummy pages (\`page2.html\` and \`page3.html\`) to meet assignment requirements.
  - Responsive design with hover effects for buttons/links.

- **JSON Data (\`Info.json\`)**
  - Contains at least 6 objects with \`name\`, \`study\`, and \`subject\` fields.
  - Dynamically rendered on the main page.

---

## 🚀 How to Run the Project

1. **Install dependencies**
\`\`\`bash
npm install express
npm install nodemon --save-dev
\`\`\`

2. **Start the server**
\`\`\`bash
node app.js
\`\`\`

**Or with Nodemon:**
\`\`\`bash
npx nodemon app.js
\`\`\`

3. **Open in Browser**  
Go to: **http://localhost:3000/static/index1.html**

Click the **Fetch Data** button to display JSON dynamically.

## 👥 Group Members

- **Saugat Rana**  
- **Kushal Gurung**

