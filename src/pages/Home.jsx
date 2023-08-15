import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/Slider";

export default function Home() {

    return (
        <>
        <Navbar />
        <ImageSlider />
        </>
    );
        
}