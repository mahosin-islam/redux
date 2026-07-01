import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './App/store.js'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
      </Provider>
    </RouterProvider>
  </StrictMode>,
)
