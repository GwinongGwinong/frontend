import React from 'react';
import styles from '../styles/Card.module.css'
export default function Card({imageTop,imageUnder,textTop,textTopRight,textMiddle1,textMiddle2,textUnderLeft,textUnderRight}) {
    return (
        <div className={styles.div}>
            <div className={styles.wrapImg}>
                <div><img src={`${process.env.PUBLIC_URL}/public_assets/package-1.png`} /></div>
                <div className={styles.heart}><img className={styles.img} src={`${process.env.PUBLIC_URL}/public_assets/heart.png`} /></div>
                <div className={styles.text}><div>모집중</div></div>
            </div>
            <div className={styles.wrapText}>
                <div>벼농사 재배 경운기</div>
                <div>전라북도 부안군</div>
                <div>2023년 8월 10일 ~ 2024년 1월 10일</div>
                <div className={styles.bottomRight}>월230/6개월</div>
            </div>
        </div>
    );
}

/*
Title. 파밍 홀리데이
이미지-하단 '모집중' | blue
텍스트-상단 '전문분야'
텍스트-중간 '지역'
텍스트 중간 '날짜'
텍스트 하단 우측 '월 200/6개월' | red
*/

/*
Title. 살아보고 싶은 이색 농촌 전원 주택
이미지-상단 '하트 이미지'
이미지-하단 '인기' | yellow
텍스트-상단 '청원 사과마을 전원주택(2/5층)'
텍스트-상단 우측 '별 이미지+평점' => 한꺼번에! 상단 우측은 전원주택에만 있으니까, 별 이미지는 자동으로 추가되도록. DB에선 평점만 받도록!
텍스트-중간 '지역+호스트'
텍스트-중간 '날짜'
텍스트-하단 좌측 '호스트 이미지'
텍스트-하단 우측 '월세10/6개월'
*/

/*
Title. 파밍 홀리데이 순간들
이미지-상단 '하트 이미지'
텍스트-상단 '6개월 체험 프로그램'
텍스트-중간 '#토마토 재배 스마트팜'
*/

/*
Title. 파밍 홀리데이 슈퍼 호스트
이미지-상단 '하트 이미지'
텍스트-상단 '전문분야+호스트 이름+호스트'
텍스트-중간 '#'
텍스트-중간 '#'
텍스트-하단 우측 '별 이미지+리뷰 개수' => 분리하는 방향으로!
*/