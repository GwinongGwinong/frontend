import React from 'react';
import { useState } from 'react';
import styles from '../styles/SearchGuest.module.css';

export default function SearchGuest() {
    const [total,setTotal]=useState(0);
    return (
        <div className={styles.wrap}>
            <h2>파밍 홀리데이 게스트 조회</h2>
            <div className={styles.wrapBottom}>
                <hr />
                <div className={styles.total}>{total}명의 게스트</div>
                <div className={styles.top}>
                    <div>게스트 성함</div>
                    <div>숙소</div>
                    <div>숙박 일정</div>
                    <div>월급</div>
                </div>
                <hr />
                <div className={styles.bottom}>
                    <div>김나영</div>
                    <div>
                        <div>전북 임실 치즈 전원주택</div>
                        <div>1인실</div>
                    </div>
                    <div>2023.7.30~2023.7.30</div>
                    <div>310</div>
                </div>
                <hr />
            </div>
        </div>
    );
}

