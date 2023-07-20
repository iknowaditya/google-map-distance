# Google Map Distance Tracker

The Google Map Distance Tracker is a web application designed to help users calculate distances between two or more locations on Google Maps. This app leverages modern web technologies and follows a client-server architecture to provide a seamless and interactive user experience.

## Features

- Calculate distances between multiple locations on Google Maps.
- Interactive map interface for selecting and visualizing locations.
- CRUD (Create, Read, Update, Delete) operations for saved locations.
- User-friendly and intuitive design.
- Responsive layout for various devices.

## Tech Stack

The Google Map Distance Tracker is built using the following technologies:

### Frontend

- HTML, CSS, and JavaScript: The core building blocks of the frontend, providing the structure, style, and interactivity of the app.
- React.js: A popular JavaScript library for building user interfaces, allowing for component-based development and reusability.

### Backend

The backend of the Google Map Distance Tracker is powered by **Node.js** and **Express.js**. Node.js provides the runtime environment for server-side JavaScript, while Express.js is a lightweight web framework used to build the server and handle CRUD operations.

## Getting Started

To run the Google Map Distance Tracker locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your computer.

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/google-map-distance-tracker.git
```

2. Navigate to the project directory.

```bash
cd google-map-distance-tracker
```

3. Install the frontend and backend dependencies.

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

4. Start the backend server.

```bash
# From the 'backend' directory
npm start
```

5. Start the frontend development server.

```bash
# From the 'frontend' directory
npm start
```

6. Access the app in your browser at `http://localhost:3000`.

## Backend CRUD Operations

The backend server handles CRUD operations for saved locations. It provides API endpoints to perform the following operations:

- **Create**: Add a new location to the database.
- **Read**: Retrieve a list of saved locations or details of a specific location.
- **Update**: Modify the details of an existing location.
- **Delete**: Remove a location from the database.

The frontend app communicates with the backend server through HTTP requests to perform these operations.

## Contribution

Contributions to the Google Map Distance Tracker are welcome! If you encounter any bugs, have feature requests, or want to contribute code, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

The Google Map Distance Tracker is open-source and distributed under the [MIT License](LICENSE).

---

Thank you for using the Google Map Distance Tracker! If you have any questions or need further assistance, please don't hesitate to contact us at iknowaditya22@gmail.com. Happy tracking! 🗺️
