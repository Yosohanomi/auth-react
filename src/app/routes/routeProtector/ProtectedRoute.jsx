import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router'
import { routes } from '../routes';

export default function ProtectedRoute({children}) {
    const currentPath = useLocation();
    const user = useSelector(state => state.auth)
    const currentRoute = routes[0]?.children.find(route => route.path === currentPath.pathname)
    const allowedRoute = currentRoute?.meta?.role
    console.log("pathname: ", currentPath.pathname);
    console.log("currentRoute: ", currentRoute);
    console.log("allowedRoute: ", allowedRoute);
    console.log("user.role: ", user.role);
    if (!user.isInit) return <p>Loading . . .</p>;
    if (!user.accessToken) {
        return <Navigate to="/login"/>
    }

    if (allowedRoute && !allowedRoute.includes(user.role)) {
        return <Navigate to="/forbidden"/>
    }
  return (
    children
  )
}
