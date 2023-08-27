import React, { useState } from 'react';
import styles from '../styles/CardLong.module.css'

export default function CardLong({image,imageTop,imageUnder,textTop,textTopRight,textMiddle1,textMiddle2,textUnderLeft,textUnderRight}) {
    return (
        <div className={styles.div}>
            <div className={styles.wrapImg}>
                <div className={styles.wrapImgDirect}><img className={styles.image} src={image} /></div>
                <div className={styles.heart}><img className={styles.img} src={imageTop} /></div>
                <div className={styles.text}>{imageUnder}</div>
            </div>
            <div className={styles.wrapText}>
                <div>{textTop}</div>
                <div>{textTopRight}</div>
                <div>{textMiddle1}</div>
                <div>{textMiddle2}</div>
                <div>{textUnderLeft}</div>
                <div className={styles.bottomRight}>{textUnderRight}</div>
            </div>
        </div>
    );
}