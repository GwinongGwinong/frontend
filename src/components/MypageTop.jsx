import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/MypageTop.module.css";

const MypageTop = () => {
    const profileInfo = [['리뷰','17'],['근무', '173일'],['창출','420만원']];

    const profileImg = {
        width: '50%',
    };

    const medalImg = {
        width: '20px',
        height: '20px',
    };

    const rightBottom = {
        width: '100%',
        position: 'relative'
    };

    const rightTop = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: '25px'
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
                <div className={styles.topContent}> 
                    <div style={rightTop}>
                        <div className={styles.imgContainer}>
                            <img
                                src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/steamed.svg`}
                                alt="steamed"
                                className={styles.steamed}
                            />
                            <p className={styles.titleText}> 찜 목록 </p>
                        </div>
                        <div className={styles.imgContainer}>
                            <img
                                src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/review.svg`}
                                alt="review"
                                className={styles.steamed}
                            />
                            <p className={styles.titleText}> 리뷰 </p>
                        </div>
                    </div>
                    <div style={rightBottom}>
                        <img
                            src={`${process.env.PUBLIC_URL}/public_assets/mypageImg/appliedPackage.svg`}
                            alt="appliedPackage"
                            className={styles.steamed}
                        />
                        <p className={styles.titleText}> 신청한 파밍 홀리데이 </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageTop