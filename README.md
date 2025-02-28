# Kerala Bus App

A modern React-based web application for managing bus details. This app allows bus owners to register, log in, add bus details, and view specific bus information.

## Features

* **User Authentication:** Secure login and registration for bus owners using email or phone and password.
* **Bus Management:** Add new bus details, including fields like bus name, number, color, type, owner name, owner phone, and assistant phone.
* **Bus Information Retrieval:** View detailed information for specific buses by their unique bus ID.
* **User-Friendly Interface:** Clean and intuitive design with responsive layouts.
* **Error Handling:** Displays loading states and error messages for a better user experience.
* **Form Validation:** Ensures all required fields are filled before submitting the form.

## Technologies Used

* **React:** For building the user interface.
* **React Router DOM:** For navigation between pages.
* **Axios:** For making HTTP requests to the API.
* **CSS:** Custom styles with flexbox for a modern look. (Consider specifying if a CSS framework like Bootstrap, Tailwind, or Material UI is used)
* **Create React App:** As the build tool and development environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js and npm (or yarn) installed (Node.js v14 or higher, npm v6 or higher recommended).
* A working internet connection. (Specify API endpoint if applicable)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kerala-bus-app.git
   cd kerala-bus-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Folder Structure

```
kerala-bus-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AddBus.jsx
│   │   ├── BusDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   └── Register.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── BusDetails.css
│   │   ├── Login.css
│   │   ├── Navbar.css
│   │   └── Register.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

### Usage

1. **Register:** Create a new account using your email or phone and password.
2. **Login:** Log in to your account using your email or phone and password.
3. **Add Bus:** Fill in the bus details and submit the form to add a new bus.
4. **View Bus Details:** Navigate to a specific bus's details page using its unique bus ID.

### API Endpoints

* **Base URL:** `https://kerala-bus.onrender.com/api/owner`

* **Register:**
  * **Route:** `/register`
  * **Method:** POST
  * **Fields:** emailOrPhone, password

* **Login:**
  * **Route:** `/login`
  * **Method:** POST
  * **Fields:** emailOrPhone, password

* **Add Bus:**
  * **Route:** `/add-bus`
  * **Method:** POST
  * **Fields:** busName, busNumber, busColor, busType, ownerName, ownerPhone, assistentPhone
  * **Authorization:** Pass token in Authorization header

* **Get Bus Details:**
  * **Route:** `/get-bus/{busId}`
  * **Method:** GET
  * **Params:** busId (req.params)
  * **Authorization:** Pass token in Authorization header

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments

* Inspired by the need for better bus management in Kerala.
* Thanks to the contributors and the open-source community.
