import React from 'react';
import SearchGuest from '../components/SearchGuest';
import SearchApplicant from '../components/SearchApplicant';
import styles from "../styles/MypageHost.module.css";
import MypageTop from '../components/MypageTop';
export default function MypageHost() {
    return (
        <>
            <MypageTop />
            <SearchGuest />
            <SearchApplicant />
        </>
    );
}

