import { createBrowserRouter, Route } from "react-router";
import Layout from "@/layouts/Layout";
import HomePage from "@features/home/HomePage";
import ServicesPage from "@features/home/servicesPage";
import Routepath from "@routes/routes.js";
import PricePage from "@features/home/PricePage";
import AboutPage from "@features/home/AboutPage";
import ContactPage from "@features/home/ContactPage";
import FaqPage from "@features/home/faqPage";
import LearnPage from "@features/home/learnPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
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
    }
]);

export default router;