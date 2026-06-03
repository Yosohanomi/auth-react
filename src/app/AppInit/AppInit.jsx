import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { refresh } from '../../features/Login/model/authThunks/authThunks';

export default function AppInit({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.auth.loading);
    const location = useLocation();
    useEffect(() => {
        const init = async () => {
            try {
                await dispatch(refresh()).unwrap();
                if (location.pathname === "/") {
                    navigate("/home")
                }
            } catch {
                navigate("/login")
            }
        };
        init();
    }, []);
  return isLoading ? <p>Loading . . .</p> : children;
}
