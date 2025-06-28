# Employee Management System

A full-stack web application for managing employee data—built with separate backend and frontend modules.

## Overview

This Employee Management System is designed to streamline core HR tasks—such as employee onboarding, editing, viewing, deleting, and searching. It features a modular architecture with a dedicated backend and frontend.

---

## Features

- ✅ Create, Read, Update, Delete (CRUD) employee records  
- 🔍 Search/filter employees 
- ✅ Create, Read, Update, Delete (CRUD) department records 
- 🛠️ Modular backend (Java Spring Boot) and frontend (React + HTML & CSS)

---

## Tech Stack

- **Backend**: Java + Spring Boot  
- **Database**: MySQL  
- **Frontend**: React / HTML, Bootstrap CSS, JavaScript   
- **Testing**: Postman / REST clients

---

## Prerequisites

- Java 17+ (for Spring Boot) or Node.js  
- MySQL Server  
 

---

## Getting Started

### Backend Setup

1. Clone the repo:  
   ```bash
   git clone https://github.com/KHALID9029/Employee-Management-System.git
   cd Employee-Management-System/ems-backend
   ```
2. Configure the database in application.properties
   ```bash
    spring.datasource.url= ****
    spring.datasource.username=****
    spring.datasource.password= ****
   ```
3. Create the DB schema
4. Run backend server


### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd /Full-stack/ems-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   

## Usage
- Open your browser to visit the frontend URL.
- Interact with the UI to add, edit, delete, and search employees.
- Changes sync with the backend database via API.
