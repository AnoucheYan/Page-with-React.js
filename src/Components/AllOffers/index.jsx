import React from 'react';
import styles from './allOffers.module.css';
import Offer from '../Offer';
import Empty from '../Empty';
import idGenerator from '../../helpers/idGenerator';


class AllOffers extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            offers: [
                {
                    _id: idGenerator(),
                    title: "Iceland Hotel / Fosshotel",
                    region: "Reykjavik",
                    imgSrc: "../../assets/images/off2.png",
                    imgAlt: "Iceland Hotel's picture",
                    min: "6,578",
                    max: "23,480",
                    description: "Íslandshotels offer winter rates in the summer, so you only have to pay 1 guest this summer at a three star.",
                    link: "islandshotel.js"
                },
                {
                    _id: idGenerator(),
                    title: "Hotel Keflavik",
                    region: "North",
                    imgSrc: "../../assets/images/off4.png",
                    imgAlt: "Hotel Keflavik's picture",
                    min: "6,578",
                    max: "23,480",
                    description: "Included in hotel price:<\br>Breakfast (open 5-10pm), wireless internet, access to fitness and steam and shuttle to the stadium upon departure as provided.",
                    link: "islandshotel.js"
                },
                {
                    _id: idGenerator(),
                    title: "Hotel Edda",
                    region: "East",
                    imgSrc: "../../assets/images/off1.png",
                    imgAlt: "Hotel Edda's picture",
                    min: "11,900",
                    max: "19,900",
                    description: `Each ticket is valid for double occupancy in a double room with a washbasin for one night. Breakfast is not included.</br> <br>
                    The payment methods may be used by the Edda hotels, which are 3 in the summer of 2020`,
                    link: "edda.is"
                },

                {
                    _id: idGenerator(),
                    title: "Center Hotels",
                    region: "Reykjavik",
                    imgSrc: "../../assets/images/off3.png",
                    imgAlt: "Center Hotel`s picture",
                    min: "14,900",
                    max: "19,900",
                    description: "Valid for double occupancy per night with breakfast at the following Center Hotels",
                    link: "islandshotel.js"
                }
            ]
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const Offers = this.state.offers.map(offer => {
            return (
                <div key={offer._id}
                >
                    <Offer
                        offer={offer}
                    />
                </div>
            )
        })

        return (
            <>
                <h1 className={styles.heading}>Offers</h1>
                <div className={styles.offersContainer}>
                    {Offers}
                    {this.state.width >= 1263 && <Empty />}
                    {this.state.offers.length % 3 == 1 && <Empty />}
                </div>
            </>
        )
    }
};


export default AllOffers;