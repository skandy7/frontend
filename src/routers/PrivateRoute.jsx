import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth(); // Ensure `loading` is provided by `useAuth`

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching authentication state
    }

    if (currentUser) {
        return children; // Allow access if the user is authenticated
    }

    return <Navigate to="/signin" />; // Redirect to sign-in if not authenticated
};

export default PrivateRoute;
