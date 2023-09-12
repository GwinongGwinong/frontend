import React, { useState } from 'react';
import styles from "../styles/SignUp.module.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUp() {
    const [clickedGuest,setClickedGuest]=useState(false);
    const [clickedHost,setClickedHost]=useState(false);
    const [value,setValue]=useState(["guest","host"]);
    const updateClick=(value)=>{
        if(value==="guest"){
            setClickedGuest(true);
            setClickedHost(false);
        }else if(value==="host"){
            setClickedGuest(false);
            setClickedHost(true);
        }
        alert(value);
    }
    const checkClick=()=>{
        alert(clickedHost);
    }
    return (
        <>
            <h1>회원가입</h1>
            <hr />
            <div className={styles.wrapAll}>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>아이디 (이메일)</div>
                    <input type="email" placeholder="아이디를 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>비밀번호</div>
                    <input type="password" placeholder="비밀번호를 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>비밀번호 확인</div>
                    <input type="password" placeholder="비밀번호를 한 번 더 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>이름</div>
                    <input type="text" placeholder="이름을 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>생년월일</div>
                    <input type="text" placeholder="생년월일 6자리를 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>휴대폰</div>
                    <input type="text" placeholder="숫자만 입력해주세요"/>
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>주소</div>
                    <input className={styles.address} type="text" placeholder="주소 검색"/>
                </form>
                <div className={styles.wrapLine}>
                    <div className={styles.text}></div>
                    <input type="text" placeholder="상세주소 입력"/>
                </div>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>유형</div>
                    <button className={`${clickedGuest===true?styles.selectOn:styles.selectOff}`} onClick={()=>{updateClick(value[0])}} type="button">게스트</button>
                    <button className={`${clickedHost===true?styles.selectOn:styles.selectOff}`} onClick={()=>{updateClick(value[1])}} type="button">호스트</button>
                </form>
                <form action="" className={styles.wrapButton}>
                    <button className={styles.submitButton} onClick={checkClick} type='button'>가입 완료</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

