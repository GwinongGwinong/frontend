import React from 'react';
import { useState } from 'react';
import styles from '../styles/SearchApplicant.module.css';
import swal from "sweetalert2";

export default function SearchApplicant() {
    const [total,setTotal]=useState(0);
    const handleClickYes=()=>{
        swal.fire({
            title:'수락하였습니다!',
            confirmButtonColor: 'var(--color-yellow)',
            confirmButtonText:'확인',
            customClass:'myCustomClass'
        }).then((value)=>{
            if(value){
                
            }
        });
    }
    const handleClickNo=()=>{
        swal.fire({
            title:'거절하였습니다!',
            confirmButtonColor: 'var(--color-yellow)',
            confirmButtonText:'확인',
            customClass:'myCustomClass'
        }).then((value)=>{
            if(value){
                
            }
        });
    }
    return (
        <div className={styles.wrap}>
            <h2>파밍 홀리데이 신청자 조회</h2>
            <div className={styles.wrapBottom}>
                <hr />
                <div className={styles.total}>{total}개의 신청서</div>
                <div className={styles.top}>
                    <div>신청자 성명</div>
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
                    <button className={styles.buttonYes} type='button' onClick={handleClickYes}>수락</button>
                    <button className={styles.buttonNo} type='button' onClick={handleClickNo}>거절</button>
                </div>
                <hr />
            </div>
        </div>
    );
}

