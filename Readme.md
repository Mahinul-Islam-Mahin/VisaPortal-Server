# VisaPortal Backend 🖥️🌍

This is the backend server for **VisaPortal**, a comprehensive visa application
management platform. The server provides APIs for user authentication, visa
details management, and visa application processing. It integrates seamlessly
with the VisaPortal frontend to deliver a smooth and efficient user experience.

---

## 🌟 Key Features

### **1. User Management 👤**

- **Create Users**: Add new users to the database.
- **Retrieve Users**: Fetch a list of all registered users.

### **2. Visa Management 🛂**

- **Add Visa Details**: Insert new visa information.
- **View All Visas**: Retrieve a comprehensive list of visas.
- **View Visa Details**: Fetch detailed information about a specific visa by its
  ID.
- **Update Visa**: Edit visa information as needed.
- **Delete Visa**: Remove outdated or irrelevant visa details.

### **3. Application Management 📑**

- **Submit Applications**: Allow users to apply for visas by submitting
  necessary details.
- **Prevent Duplicates**: Ensure no user submits duplicate applications for the
  same visa.
- **View Applications**: Retrieve all submitted applications or a specific one
  by ID.
- **Cancel Applications**: Enable users to delete their visa applications.

### **4. Hosting ☁️**

- Hosted on **Vercel** for high performance, scalability, and easy deployment.

---

## 🔧 Technologies Used

### **1. Backend Framework 🖧**

- **Express.js**: Lightweight and efficient framework for building RESTful APIs.

### **2. Database 🗃️**

- **MongoDB**: NoSQL database for storing and managing users, visas, and
  applications.

### **3. Middleware 🛠️**

- **CORS**: Handles Cross-Origin Resource Sharing to enable frontend-backend
  communication.
- **Express.json()**: Parses incoming requests with JSON payloads.

### **4. Environment Management ⚙️**

- **dotenv**: Manages sensitive information securely using `.env` files.

### **5. Deployment 🚀**

- **Vercel**: Deployed and hosted for high availability and performance.

---

## 🌍 Root API URL

The root URL for the **VisaPortal Backend** is hosted on **Vercel** and can be
accessed via:

- **[VisaPortal](https://visaease.vercel.app)**

---

## API Endpoints 🚀

### User Routes

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | /Users   | Create a new user |
| GET    | /Users   | Fetch all users   |

### Visa Routes

| Method | Endpoint  | Description                    |
| ------ | --------- | ------------------------------ |
| POST   | /Visa     | Add new visa details           |
| GET    | /Visa     | View all visas                 |
| GET    | /Visa/:id | View a specific visa by its ID |
| PUT    | /Visa/:id | Update visa details            |
| DELETE | /Visa/:id | Delete a visa by its ID        |

### Application Routes

| Method | Endpoint          | Description                           |
| ------ | ----------------- | ------------------------------------- |
| POST   | /Applications     | Submit a new visa application         |
| GET    | /Applications     | View all visa applications            |
| GET    | /Applications/:id | View a specific application by its ID |
| DELETE | /Applications/:id | Cancel a visa application             |

---

Built with 💙 and 🌍 by
[Sarafat Karim](https://www.linkedin.com/in/sarafat-karim/)
