import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImageBehind from '../components/ImageBehind';
import Section from '../components/Section';
import TripleStatistics from '../components/TripleStatistics';

function Home() {
    const sections = [
        {
            primary: (
                <div>
                    <h2 className="font-weight-bold"> Our Mission </h2>
                    <p className="font-weight-light">
                        Tidepool finance aims to provide customers with an <span className="font-weight-bold">hassle-free</span> path into algorithmic trading.
                    </p>
                    <p className="font-weight-light">
                        Hedge funds and ultra-wealthy individuals make <span className="font-weight-bold">billions</span> of dollars every year with algorithms they hide from the public.
                        Here at Tidepool, we aim to break down the walls of Wall Street and make algorithmic trading available to all.
                    </p>
                </div>
            ),
            secondary: (
                <TripleStatistics></TripleStatistics>
            )
        },
        {
            primary: (
                <div></div>
            ),
            secondary: (
                <div>
                    <h2 className="font-weight-bold"> Sick and tired of sleazy investment advisors? </h2>
                    <p className="font-weight-light">
                        No worries! Tidepool's algorithms are developed by a hand-picked team of expert <span className="font-weight-bold">physicists</span> and <span className="font-weight-bold">data scientists</span> from the top of their field,
                        meaning your money is in the hands of scientists, not opportunistic portfolio managers.
                    </p>
                    <p className="font-weight-light">
                        Most firms structure fees in such a way that <span className="font-weight-bold">you</span> bare the burden of all debts. Tidepool instead uses an innovative fee structure meaning when you lose, we lose, and we really hate losing money.
                    </p>
                </div>
            )
        }
    ]
    return (
        <div>
            {/* <Image src="https://tidepool-cdn.s3.amazonaws.com/tidepool-highres.jpg" rounded></Image> */}
            <ImageBehind></ImageBehind>
            <div className="m-4">
                {sections.map((data) => {
                    return <Section primary={data.primary} secondary={data.secondary}/>
                })}
            </div>  
        </div>
    );
}

export default Home;