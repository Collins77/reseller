import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check for token in cookies
        const token = Cookies.get('token');

        // If no token is found, redirect to the login page
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    // If authenticated, render the requested route
    return <Outlet />; // Render nothing or a loading indicator while redirecting
};

export default ProtectedRoute;
