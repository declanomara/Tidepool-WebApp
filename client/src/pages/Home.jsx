import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImageBehind from '../components/ImageBehind';

function Home() {
    return (
        <div>
            {/* <Image src="https://tidepool-cdn.s3.amazonaws.com/tidepool-highres.jpg" rounded></Image> */}
            <ImageBehind></ImageBehind>
            <div className="m-4">
                <div className="w-75">
                    <h3 >Innovative investing solutions.</h3>
                    <p className="font-weight-light">
                        Tidepool finance is dedicated to always using cutting-edge technology to ensure that customers are receiving the highest quality product possible.
                        Tidepool leverages modern serverless design as well as cloud based infrastructure, so you can feel safe knowing your data is secure in the hands of industry giants.
                        Furthermore, all Tidepool algorithms are built in-house by our talented quantitative analysts to guarantee maximum alpha and minimal risk. 
                    </p>
                </div>
                <div className="w-75 mt-5 float-right">
                    <h3 className="float-right">Data driven development to ensure accuracy.</h3>
                    <p className="font-weight-light float-right">
                        Tidepool uses a wide variety of data sources allowing our algorithms to make decisions with all possible information available. This means that our trade signals are based on more information than any single human can process. Our data collection algorithms are constantly gathering new data to ensure data is accurate and up to date.
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default Home;