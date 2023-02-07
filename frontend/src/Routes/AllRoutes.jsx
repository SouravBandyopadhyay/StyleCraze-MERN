import { Route, Routes } from "react-router-dom";
import ExerciseDetail from "../Components/Exercise/ExerciseDetail";
import ProductDetail from "../Components/ProductDetail";
import Blog from "../Pages/Blog";
import Cart from "../Pages/Cart";
import ExercisePage from "../Pages/ExercisePage";
import Healthwellness from "../Pages/HeatlhWellness";
import HomePage from "../Pages/HomePage";
import Makeup from "../Pages/Makeup";
import ProductPage from "../Pages/ProductPage";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/UserLogin";
import ProtectedRoute from "./ProtectedRoute";
function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/health" element={<Healthwellness />} />
        <Route path="/prod" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fit" element={<ExercisePage />} />
        <Route path="/fit/:id" element={<ExerciseDetail />} />
        <Route path="/makeup/:id" element={<ProductDetail />} />
        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
        
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
