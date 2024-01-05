# Jello-V1
Jello is a real-time chat web app with room based system.

This React Firebase Chat Application allows users to engage in real-time text-based conversations. It leverages the power of React for the user interface and Firebase for backend services, including real-time data synchronization.

## Features

- Real-time chat functionality
- User authentication
- Firebase Realtime Database integration
- Responsive design

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install dependencies: npm i

bash
Copy code
npm install
Configuration
Firebase Configuration:

Create a Firebase project: Firebase Console
Obtain Firebase configuration details (API Key, Auth Domain, Database URL, etc.)
Update configuration in the application code
Environment Variables (if applicable):

Store sensitive information like API keys securely
Example: Create a .env file and add your configuration
env
Copy code
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_DATABASE_URL=your_database_url
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
Ensure you don't commit sensitive information to version control
