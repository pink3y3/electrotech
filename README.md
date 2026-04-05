# Electrotech Services - Website

Official website for **Electrotech Services Inc.**, Mangalore.  
Built with a React frontend and Spring Boot backend.

## Project Structure

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, CSS, Typed.js |
| Backend | Java, Spring Boot, Spring Web |

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`

### Backend
```bash
cd backend
./mvnw spring-boot:run
```
Runs on `http://localhost:8080`

## Features
- Company info, services, and contact details
- Google Maps integration
- Feedback form with star rating
- REST API to handle form submissions

## Before Deploying
- Update the fetch URL in `frontend/src/components/Contact.jsx`
- Update `@CrossOrigin` in `FeedbackController.java` with the production domain
- Add database credentials to `application.properties`

## Developed by
atisha
