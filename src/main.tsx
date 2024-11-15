import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="1002758901477-t40jtpnjl96vdkgonduq44ogantop9ki.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
)
