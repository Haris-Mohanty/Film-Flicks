import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Movie from "./components/Movies/Movie";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";

function App() {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("Admin", isAdminLoggedIn);
  console.log("User", isUserLoggedIn);
  return ( 
    <>
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
