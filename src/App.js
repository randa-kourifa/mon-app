// import React, { useState } from "react";
// import { Provider } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { UserContext } from "./app/User.Context";
// import store from "./app/store";
import backgroundImage from "./assets/pexels-anna-shvets-3786215.jpg";
import Home from "./pages/Home";
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
//
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
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "./app/User.Context";
import store from "./app/store";
import Admin from "./pages/admin.jsx";
import Login from "./pages/login.jsx";
import Signin from "./pages/signin.jsx";
import { PrivateRoute } from "./routes/PrivateRoute";
function App() {
  const [user, setUser] = useState({
    email: "init",
    password: "init",
    role: "",
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

  // const isAdmin = user.role === "admin"; // Check the role for admin

  return (
    <div style={backgroundStyle}>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
