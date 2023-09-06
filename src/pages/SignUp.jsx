import React from 'react';
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
    return (
        <>
            <h1>회원가입</h1>
            <hr />
            <div className={styles.wrapAll}>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>아이디 (이메일)</div>
                    <input type="text" placeholder="아이디를 입력해주세요"/>
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
                    <input type="text" />
                </form>
                <form action="" className={styles.wrapLine}>
                    <div className={styles.text}>유형</div>
                    <button className={styles.selectButton}>게스트</button>
                    <button className={styles.selectButton}>호스트</button>
                </form>
                <form action="">
                    <button className={styles.submitButton}>가입 완료</button>
                </form>
            </div>
            
        </>
    );
}

