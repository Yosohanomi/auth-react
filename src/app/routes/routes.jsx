import LoginLayout from "../../shared/layoutes/LoginLayout";
import MainLayout from "../../shared/layoutes/MainLayout";
import AppInit from "../AppInit/AppInit";
import { appRoles } from "../roles/appRoles";
import ProtectedRoute from "./routeProtector/ProtectedRoute";
import Home from "../../pages/Home/Home";
import AdminPage from "../../pages/AdminPage/AdminPage";
import About from "../../pages/About/About";
import ForbiddenPage from "../../pages/ForbiddenPage/ForbiddenPage";
import Page404 from "../../pages/page404/Page404";
import Login from "../../features/Login/ui/Login";
export const routes = [
    {
        path: "/",
        element: (<AppInit>
            <MainLayout/>
        </AppInit>),
        children: [
            {
                path: "/home",
                element: (
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                ),
                meta: {
                    isInMenu:true,
                    title:"Home",
                    role: [appRoles.admin, appRoles.manager, appRoles.client]
                },
            },
            {
                path: "/about",
                element: (
                    <ProtectedRoute>
                        <About/>
                    </ProtectedRoute>
                ),
                meta: {
                    isInMenu:true,
                    title:"About",
                    role: [appRoles.admin, appRoles.manager, appRoles.client]
                }
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute>
                        <AdminPage/>
                    </ProtectedRoute>
                ),
                meta: {
                    isInMenu:true,
                    title:"Admin Page",
                    role: [appRoles.admin]
                }
            },
            {
                path: "/forbidden",
                element: (
                    <ProtectedRoute>
                        <ForbiddenPage/>
                    </ProtectedRoute>
                ),
                meta: {
                    isInMenu:false,
                }
            },
            {
                path: "*",
                element: <Page404/>,
                meta: {
                    isInMenu:false,
                }
            },
            {
                path: "/login",
                element: <LoginLayout/>,
                children: [
                    {
                        index: true,
                        element: <Login/>,
                        meta: {
                            isInMenu: false,
                        }
                    }
                ]
            },
        ]
    }
]