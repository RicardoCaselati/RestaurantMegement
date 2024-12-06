# Chão Goiano CRM System


## Overview
This project is a custom-built CRM system for Chão Goiano, a small restaurant located in Valinhos, São Paulo, Brazil. The application is designed to address challenges in managing inventory, finances, sales, and staff. It leverages modern web technologies and follows a containerized architecture for easy deployment.

## Features
- **Inventory Management**: Track stock levels and manage purchases.
- **Financial Management**: Record and analyze restaurant income and expenses.
- **Sales Tracking**: Monitor daily sales and generate reports.
- Staff Management**: Keep staff information organized.
- **Responsive Interface**: Built with React for a user-friendly experience.

## Technologies Used
- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, TypeScript, Express
- **Databases**:
  - Relational: MySQL
  - NoSQL: MongoDB
- **Containerization**: Docker, Docker Compose
- **Others**: JWT for authentication, Axios for HTTP requests

## Prerequisites
Before running this project, ensure you have:
- Docker and Docker Compose installed.
- Node.js (v18 or higher) and npm installed (for development).

## Getting Started
1. Clone the Repository:
```
git clone https://github.com/your-username/chao-goiano-crm.git
cd chao-goiano-crm
```

2. Start the Application:
Run the following command to build and start all services:
```
docker-compose up --build
```
Access the frontend at http://localhost:3000 and the backend at http://localhost:3001.

3. Verify Health:
The services include health checks to ensure proper startup.

## License
This project is licensed under the MIT License. See the LICENSE file for details

## Acknowledgments
This system was developed to modernize and optimize the operations of Chão Goiano restaurant, showcasing the power of tailored software solutions for small businesses.
