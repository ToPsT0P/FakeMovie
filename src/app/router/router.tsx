import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../pages/mainLogic/MainPage/MainPage.tsx";
import Error404Page from "../../pages/error/error404/Error404page.tsx";
import LoginPage from "../../pages/auth/LoginPage/LoginPage.tsx";
import RegistrationPage from "../../pages/auth/RegistartionPage/RegistrationPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/FakeMovie",
        element: <MainPage/>,
        errorElement: <Error404Page/>
    },
    {
        path: "/FakeMovie/login",
        element: <LoginPage/>
    },
    {
      path: "/FaKeMovie/registration",
      element: <RegistrationPage/>
    }
])