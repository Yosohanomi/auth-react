import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router';
import { logout } from '../../../features/Login/model/authThunks/authThunks';
import { routes } from '../../../app/routes/routes';

export default function Menu() {
    const childrenRoutes = routes[0]?.children;
    const userInfo = useSelector(state => state.auth)
    const filteredList = childrenRoutes.filter(route => {
        if (route?.meta && route?.meta.isInMenu && route?.meta.role?.length > 0 && route?.meta.role.includes(userInfo.role)) {
            return route
        }
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(logout())
        navigate("/login")
    }
  return (
    <>
    <nav>
        <ul>
            {filteredList.map((el, index) => (
                <li key={index}>
                    <NavLink to={el.path}>{el?.meta.title}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
    <button onClick={handleLogOut}>logout</button>
    </>
  )
}
