import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Layout";
import AuthLayout from "@/layouts/authLayout";
import HomePage from "@features/home/homePage";
import ServicesPage from "@features/home/servicesPage";
import Routepath from "@routes/routes.js";
import PricePage from "@features/home/pricePage";
import AboutPage from "@features/home/aboutPage";
import ContactPage from "@features/home/contactPage";
import FaqPage from "@features/home/faqPage";
import LearnPage from "@features/home/learnPage";
import LoginPage from "@features/auth/loginPage";
import SignupPage from "@features/auth/signupPage";
import ProtectedRoute from "../components/ProtectedRoute";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: Routepath.HOME,
                element: <HomePage />,
            },
            {
                path: Routepath.SERVICES,
                element: <ServicesPage />,
            },
            {
                path: Routepath.PRICING,
                element: <PricePage />,
            },
            {
                path: Routepath.ABOUT,
                element: <AboutPage />,
            },
            {
                path: Routepath.CONTACT,
                element: <ContactPage />,
            },
            {
                path: Routepath.FAQ,
                element: <FaqPage />,
            },
            {
                path: Routepath.LEARN,
                element: <LearnPage />,
            },
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: Routepath.LOGIN,
                element: <LoginPage />,
            },
            {
                path: Routepath.SIGNUP,
                element: <SignupPage />,
            },
        ]
    }
]);

export default router;