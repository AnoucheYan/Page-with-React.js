import styles from './offer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Offer = ({ offer }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.miniContainer}>
                    <h2 className={styles.tytle}>{offer.title}</h2>
                    <span className={styles.country}>{offer.region}</span>
                </div>

                <div>
                    <img src={offer.imgSrc} alt={offer.imgAlt} className={styles.myImg} />
                </div>

                <div className={styles.miniContainer}>
                    <div className={styles.priceContainer}>
                        <div>Price:</div>
                        <div className={styles.nextIcon}>
                            <button className={styles.nextIcon}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    <div>{`Min: ${offer.min} kr.`}</div>
                    <div>{`Max: ${offer.max} kr.`}</div>
                    <div className={styles.description}> {offer.description} </div>
                    <a href="" className={styles.myLink}>{offer.link}</a>
                </div>
            </div>
        </>
    )
};


export default Offer;