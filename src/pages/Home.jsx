import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/Slider";
import Titles from "../components/Titles";
export default function Home() {

    return (
        <>
        <Navbar />
        <ImageSlider />
        <Titles />
        <div>
            인기있는 파밍 홀리데이 패키지
        </div>
        <div>
            살아보고 싶은 이색 농촌 전원 주택
        </div>
        <div>
            파밍 홀리데이 순간들
        </div>
        <div>
            파밍 홀리데이 슈퍼 호스트
        </div>
        </>
    );
        
}