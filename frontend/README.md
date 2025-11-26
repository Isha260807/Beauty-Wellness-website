# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



















import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Booking from  "./pages/Booking";
import Services from  "./pages/Services";
import Login from  "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
       <Navbar>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
              <Routes path= "/services" element = {<Services/>} />
              <Route path="/login" element={<Login />} />
              <Route  path="/register" element= {<Register/>}/>
          </Routes>
       </Navbar>
    </div>
  );
}

export default App;




// Beauty & Wellness Project - Full Frontend Structure (React + Redux Toolkit + React Router)

// This file provides the complete project structure and core code for a Beauty & Wellness frontend.
// Use create-react-app or Vite to start.









/* ============================
   📁 PROJECT STRUCTURE
============================
beauty-wellness-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── CustomerDashboard.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── userSlice.js
│   │   └── serviceSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── package.json
└── vite.config.js
*/

/* ============================
   🎨 TAILWIND SETUP (recommended)
============================ */
// Install: npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// tailwind.config.js: set content paths

/* ============================
   🧭 ROUTING (App.jsx)
============================ */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/* ============================
   🧩 NAVBAR COMPONENT
============================ */
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-600">Beauty & Wellness</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

/* ============================
   🏠 HOME PAGE
============================ */
export function Home() {
  return (
    <section className="text-center p-20 bg-pink-50">
      <h2 className="text-4xl font-bold text-pink-600 mb-4">Welcome to Our Beauty & Wellness Spa</h2>
      <p className="text-lg text-gray-600">Relax, Refresh, Rejuvenate</p>
    </section>
  );
}

/* ============================
   💆 SERVICES PAGE (Cloudinary Images from Backend)
============================ */
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";

export function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {services.map((s) => (
        <ServiceCard key={s._id} service={s} />
      ))}
    </div>
  );
}

/* ============================
   💅 SERVICE CARD COMPONENT
============================ */
export function ServiceCard({ service }) {
  return (
    <div className="shadow-md rounded-xl p-4 bg-white hover:scale-105 transition">
      <img src={service.imageUrl} className="rounded-md h-48 w-full object-cover" />
      <h3 className="text-lg font-bold mt-3">{service.name}</h3>
    </div>
  );
}

/* ============================
   🔐 PROTECTED ROUTE COMPONENT
============================ */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ role, children }) {
  const user = useSelector((state) => state.user.userData);

  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}

/* ============================
   🔥 REDUX STORE SETUP
============================ */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import serviceReducer from "./serviceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    services: serviceReducer,
  },
});

/* ============================
   👤 USER SLICE
============================ */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userData: null },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

/* ============================
   📦 SERVICE SLICE
============================ */
import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "services",
  initialState: { list: [] },
  reducers: {
    setServices: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
