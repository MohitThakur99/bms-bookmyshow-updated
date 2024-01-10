import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
    const ComponentToRender = props.component;
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <ComponentToRender />
        </>
    );
};

export default DefaultLayout;