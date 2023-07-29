// // App.js
// import React, { useState } from "react";
// import { Provider } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { UserContext } from "./app/User.Context";
// import store from "./app/store";
import backgroundImage from "./assets/pexels-anna-shvets-3786215.jpg";
// import Home from "./pages/Home";
// import AppRouter from "./routes/reactRouter.jsx";
// function App() {
//   const [user, setUser] = useState({
//     email: "init",
//     password: "init",
//   });
//   const backgroundStyle = {
//
//   };
//   const isAdmin =
//     user.email === "admin" && user.password === "admin" ? true : false;

//   return (
//     <div style={backgroundStyle}>
//       <Provider store={store}>
//         <UserContext.Provider value={{ user, setUser }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/admin"
//               element={
//                 isAdmin ? <div>authorized</div> : <Navigate to="/admin" />
//               }
//             />
//             <Route path="/*" element={<AppRouter />} />
//           </Routes>
//         </UserContext.Provider>
//       </Provider>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "./app/User.Context";
import store from "./app/store";
import Login from "./components/login/Login";
import Signup from "./components/signin/Signin";
import Home from "./pages/Home";
import AppRouter from "./routes/reactRouter.jsx";

function App() {
  const [user, setUser] = useState({
    email: "init",
    password: "init",
    role: "", // Add role to the user state
  });

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    marginRight: "1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const isAdmin = user.role === "admin"; // Check the role for admin

  return (
    <div style={backgroundStyle}>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/admin"
              element={isAdmin ? <Signup /> : <Navigate to="/admin" />}
            />
            <Route
              path="/signin"
              element={
                user.email === "init" ? <Navigate to="/admin" /> : <Signup />
              }
            />
            <Route
              path="/login"
              element={
                user.email !== "init" ? <Navigate to="/admin" /> : <Login />
              }
            />
            <Route
              path="/signin"
              element={user.email !== "init" ? <Navigate to="/" /> : <Signup />}
            />
            <Route path="/" element={<AppRouter />} />
          </Routes>
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
