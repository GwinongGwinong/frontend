import React from "react";
import styles from "../styles/Map.module.css";

const Map = (props) => {
    const location = ['전라북도 임실군 임실읍 치즈마을 1길 4 임실치즈마을'];

    return (
        <>
        <div className={styles.topContainer}>
            <div className={styles.mapInfo}>
                근무지 위치정보
            </div>
            <div className={styles.location}>
                {location}
            </div>
        </div>
            
        </>
    )
}

export default Map