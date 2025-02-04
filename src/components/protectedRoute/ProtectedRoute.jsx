
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem('minaDoc-app'))
    return user ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute