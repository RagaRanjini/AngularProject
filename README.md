# AngularProject

## Project Overview
This Angular project was developed during my Internship period at Dedalus, Chennai. The project was an integral part of my learning journey and helped me master the Angular frontend framework. Upon the successful completion of this project and various associated demos, I received the certification for "Mastering Angular Frontend Framework," which subsequently led to a full-time employment opportunity at Dedalus.

## Project Details
JSON Database
This project utilizes a JSON database named Database.json. This file serves as a mock database and is hosted by a JSON server. The JSON server must be started on a specific port before running the Angular project. This setup allows for a seamless development experience by providing a simple and efficient way to manage and manipulate data during development.

## NGINX
NGINX is a powerful, high-performance web server that is used in this project for several key purposes:

Reverse Proxy: NGINX can act as a reverse proxy server, forwarding client requests to backend services, such as the JSON server or the Angular application. This setup enhances the security and performance of the application.
Load Balancing: By distributing incoming traffic across multiple servers, NGINX ensures that no single server becomes overwhelmed. This results in improved reliability and scalability.
Static File Serving: NGINX efficiently serves static files, such as HTML, CSS, JavaScript, and images, reducing the load on the backend and improving the overall response time.
Caching: NGINX can cache responses from backend servers, reducing the need to process repeated requests and significantly improving performance.
I have included the local NGINX configuration within the project folder, so you can utilize the configurations and setup for the application as needed.

# Getting Started
## Prerequisites
Before running the project, ensure you have the following installed:

1) Node.js (with npm)
2) Angular CLI
3) JSON Server
4) NGINX

# Setup Instructions
## Clone the Repository
git clone https://github.com/your-username/your-repository.git
cd your-repository

## Install Dependencies
npm install

## Start JSON Server
json-server --watch Database.json --port 4500

## Start Angular Development Server
ng serve

## Configure and Start NGINX
Use the provided nginx.conf file and start the NGINX server:
sudo nginx -c /path/to/your/project-folder/nginx/nginx.conf
