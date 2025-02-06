import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ToastContainer />
        <CssBaseline/>
        <App />
    </BrowserRouter>

)
