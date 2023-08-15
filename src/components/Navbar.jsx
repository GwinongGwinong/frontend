import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    
    return (
        <>
        <div className={styles.navBar}>
            <div className={styles.logoBox}>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/logo.png`}
                    className={styles.logo}
                    alt="Logo"
                />
            </div>
            <div className={styles.iconBox}>
                <div className={styles.icon}>
                    <img src="right_image_url"  width="50" height="50" style={{ marginRight: '10px' }} />
                    <p style={{ margin: '0', fontSize: '12px' }}>Small Text</p>
                </div>
                <div className={styles.icon}>
                    <img src="right_image_url"  width="50" height="50" style={{ marginRight: '10px' }} />
                    <p style={{ margin: '0', fontSize: '12px' }}>Small Text</p>
                </div>
            </div>
        </div>

        {/* <div className={styles.mainWrap}>
            <img
                src={`${process.env.PUBLIC_URL}/public_assets/main.png`}
                style={{ margin: 'auto' }}
                className={styles.mainImg}
                alt="main"
            />
        </div> */}
        
        </>
    );
}