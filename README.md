# Quote of the Day: 
A web application that displays a random quote of the day fetched from a backend API. Users can also search for quotes by author name. This project is built with React for the frontend and Spring Boot for the backend, and is styled using the Aceternity UI design system.
----
### Features : 
 - Display a random quote of the day
 - Search for quotes by author name
 - Responsive and modern UI styled with Aceternity UI
   
----
### Technologies Used:
  - Frontend:
    - React
    - Tailwind CSS
      
  - Backend:
    - Spring Boot
    - Java
      
  - Database:
    - MySQL

----     
### Getting Started:
  **Prerequisites :**
    - Java 11 or later
    - Node.js and npm (or yarn)
    - Setting Up the Backend
    
  **Clone the repository:**
  
  bash : 
```
git clone https://github.com/yourusername/quote-of-the-day.git
cd quote-of-the-day
```
  Navigate to the backend directory:

bash:
```
cd backend
Build and run the Spring Boot application:
```
bash:
```
./mvnw spring-boot:run
```
Ensure the Spring Boot application is running on `http://localhost:8080`.

**Setting Up the Frontend**

Navigate to the frontend directory:

bash
```
cd ../frontend
```
Install dependencies:

bash
```
npm install
```
Start the React application:

bash
```
npm start
```
The React application will be available at `http://localhost:3000`.

Running the Application

Open http://localhost:3000 in your browser to view the Quote of the Day web app.

API Endpoints

Random Quote:
 - Endpoint: GET /api/quotes/random
 - Description: Fetches a random quote of the day.
Search Quotes by Author:
 - Endpoint: GET /api/quotes/search
 - Query Parameters:

`author`: Name of the author to search for.

`Description`: Searches for quotes by the specified author.

**Project Structure**

quote-of-the-day/
│
├── backend/               # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── [Other backend files]
│
└── frontend/              # React frontend
    ├── src/
    ├── public/
    ├── package.json
    └── [Other frontend files]

Contact
Author: Bhawna Pillai
Email: bhawnapillai751@gmail.com
