import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/MypageTopHost.module.css";

export default function MypageTopHost(props) {
    const profileInfo = [['리뷰','17'],['근무', '173일'],['창출','420만원']];

    const profileImg = {
        width: '50%',
    };

    const medalImg = {
        width: '20px',
        height: '20px',
    };

    const rightTop = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: '25px'
    };
    //const [test,setTest]=useState("guest");
    const updateCheck=(text)=>{
        props.getValue(text);
    }
    return (
        <>
            <Navbar />
            <div className={styles.topContainer}>
                <div className={styles.profileCard}> 
                    <div className={styles.profileContainer}>
                        <div className={styles.col1}>
                            <div className={profileImg}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/profileEx.svg`}
                                    alt="profileImage"
                                />
                            </div>
                            
                         
                            <div className={styles.userName}>
                                김민정
                            </div>

                            <div className={styles.medal}>
                                <div className={medalImg}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/medal.svg`}
                                        alt="medal"
                                        />
                                </div>
                                <div className={styles.medalName}>
                                    게스트
                                </div>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            {profileInfo.map((profileInfo,index)=>(
                                <div key={index}>
                                    <div className={styles.infoData}>
                                        {profileInfo[1]}
                                    </div>
                                    <div className={styles.infoText}>
                                        {profileInfo[0]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className={styles.topContent}> 
                    <div style={rightTop}>
                        <div className={styles.imgContainer} onClick={()=>{updateCheck("guest")}}>
                            <img
                                src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/searchLeft.svg`}
                                alt="steamed"
                                className={styles.steamed}
                            />
                            <p className={styles.titleText}> 홀리데이</p>
                            <p className={styles.titleText2}>게스트 조회 </p>
                        </div>
                        <div className={styles.imgContainer} onClick={()=>{updateCheck("applicant")}}>
                            <img
                                src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/searchRight.svg`}
                                alt="review"
                                className={styles.steamed}
                            />
                            <p className={styles.titleText}> 홀리데이</p>
                            <p className={styles.titleText2}>신청자 조회 </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

