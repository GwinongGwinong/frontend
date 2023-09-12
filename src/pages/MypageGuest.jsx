import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/MypageGuest.module.css";


export default function Mypage() {
    const profileInfo = [['리뷰','17'],['근무', '173일'],['창출','420만원']];
    const profileImg = {
        width: '50%',
    };
    const medalImg = {
        width: '20px',
        height: '20px',
    };
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
                                김희윤
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
                <div className={styles.rightTop}>
                    <div className={styles.steamed}>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

