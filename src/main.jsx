import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.js'
import { RouterProvider } from 'react-router'
import { router } from './app/routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>

    </RouterProvider>
  </Provider>
)
