import React from 'react';
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
    return (
        <>
            <h1>회원가입</h1>
            <hr />
            <div className={styles.WrapAll}>
                <form action="">
                    <label htmlFor="">아이디(이메일)</label>
                    <input type="text" value="아이디를 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">비밀번호</label>
                    <input type="password" value="비밀번호를 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">비밀번호 확인</label>
                    <input type="password" value="비밀번호를 한 번 더 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">이름</label>
                    <input type="text" value="이름을 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">생년월일</label>
                    <input type="text" value="생년월일 6자리를 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">휴대폰</label>
                    <input type="text" value="숫자만 입력해주세요"/>
                </form>
                <form action="">
                    <label htmlFor="">주소</label>
                    <input type="text" />
                </form>
                <form action="">
                    <label htmlFor="">유형</label>
                    <button>게스트</button>
                    <button>호스트</button>
                </form>
                <form action="">
                    <button>가입 완료</button>
                </form>
            </div>
            
        </>
    );
}

