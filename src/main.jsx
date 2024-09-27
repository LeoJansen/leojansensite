import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TermsOfUse from "/nested/terms-of-use.jsx";
import PrivacyPolicy from "/nested/privacy-policy.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/nested/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/nested/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
