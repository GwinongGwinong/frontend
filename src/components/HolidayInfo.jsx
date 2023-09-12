import React, {useState} from "react";
import styles from "../styles/HoildayInfo.module.css";
import ImageSlider from "../components/Slider";
import HeartButton from "../components/HeartButton";

const HolidayInfo = (props) => {
    const [imgUrl,setImgUrl] = useState(['/packageImg_1','/packageImg_1','/packageImg_1']);
    const starRating = '4.91';
    const marginLeftValue = '40%';
    const marginBottom = '13%';
    const data = ['임실치즈마을 모짜렐라 치즈 제조업','전라북도 임실군'];
    const hashtag = ['#임실치즈마을 리코타치즈 유통', '# 임실치즈 유통 25년차','# 연간 매출 9000만원 달성','# 리코타치즈, 모짜렐라치즈 등 많은 노하우 보유','# 파밍 홀리데이 호스트 3년차','# 자유로운 근무환경 제공'];

    const [like, setLike] = useState(false) //찜(하트) 버튼 클릭 여부
    const toggleLike = async (e) => {
        // const res = await axios.post(...) // 사용자가 좋아요를 누름 -> DB 갱신
        setLike(!like);
    };
    return (
        <>
            <div className={styles.holidayInfo}>
                {/* <div className={styles.infoTitle}> */}
                    홀리데이 정보
                {/* </div> */}
                {/* <div>
                    <HeartButton like={like} onClick={toggleLike}/>
                </div> */}
            </div>
            <div className={styles.holidayInfoBox}>
                <div className={styles.imgContainer}> 
                    <ImageSlider imgUrl={imgUrl} marginLeftValue={marginLeftValue} marginBottom={marginBottom}/>
                </div>
                <div className={styles.infoText}>
                    
                    <div className={styles.titleBox}>
                        <div className={styles.title}>
                            {data[0]}
                        </div>
                        <div>
                            <HeartButton like={like} onClick={toggleLike}/>
                        </div>
                    </div>
                    
                    <div className={styles.area}>
                        {data[1]}
                    </div>
                    {hashtag.map((hashtag, index)=>( 
                        <div key={index} className={styles.hashtag}>
                            {hashtag}
                        </div>
                    ))}
                    <div className={styles.starRating}>
                        <img
                            src={`${process.env.PUBLIC_URL}/public_assets/star.svg`}
                            alt="statRating"
                            className={styles.star}
                        /> 
                        <div className={styles.starRatingData}>
                            {starRating}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </>
    )
}

export default HolidayInfo