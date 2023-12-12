import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import AffineCipher from "./components/Affine";
import CaesarCipher from "./components/Ceaser";
import VigenereCipher from "./components/Vigenere";
import Home from "./components/Home";


export const routes = createBrowserRouter([
    {
        path: "", element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "/ceasercipher", element: <CaesarCipher /> },
            { path: "/affinecipher", element: <AffineCipher /> },
            { path: "/vigenerecipher", element: <VigenereCipher /> }
        ]
    }
])