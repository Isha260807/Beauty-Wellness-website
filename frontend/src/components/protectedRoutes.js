import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ role, children }) {
  const user = useSelector((state) => state.user.userData);

  if (!user) return <Navigate to="/register" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}
