import { useEffect } from "react";
import { Header } from "./pages/HomePage/Header";
import { Statics } from "./pages/HomePage/Statics";
import { Intro } from "./pages/HomePage/Intro";
import { DetailsOne } from "./pages/HomePage/DetailsOne";
import { DetailsTwo } from "./pages/HomePage/DetailsTwo";
import { Services } from "./pages/HomePage/Services";
import { Invitation } from "./pages/HomePage/Invitation";
import { Testimonial } from "./pages/HomePage/Testimonial";
import { ContactUs } from "./pages/HomePage/ContactUs";
import { Footer } from "./pages/HomePage/Footer";


export function Home() {

    useEffect(()=>{
        document.title ="Home"; 
    });


    return (
        <>
        
            <Header/>
            <Statics/>
            <Intro />
            <DetailsOne/>
            <DetailsTwo/>
            <Services/>       
            <Invitation/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
                           
        </>
        );
}