import React, { useState } from 'react';
import SearchGuest from '../components/SearchGuest';
import SearchApplicant from '../components/SearchApplicant';
import styles from "../styles/MypageHost.module.css";
import Footer from '../components/Footer';
import MypageTopHost from '../components/MypageTopHost';
export default function MypageHost() {
    const [check,setCheck]=useState("");
    const showGuest=()=>{
        if(check==="guest"){
            return <SearchGuest />
        }else if(check==="applicant"){
            return <SearchApplicant />
        }
    };
    const getValue=(text)=>{
        setCheck(text);
    }
    return (
        <>
            <MypageTopHost getValue={getValue}/>
            <Footer />
            {check?(showGuest()):('')}
        </>
    );
}

