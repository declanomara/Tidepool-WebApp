import React from "react";
import BiColumn from "./BiColumn";
import TripleStatistics from "./TripleStatistics";


function MissionSection () {
    const style = {
        "minHeight": "50vh",
        'display': 'flex',
        'flex-direction': 'column',
        // 'align-items': 'center', /* Vertical center alignment */
        'justify-content': 'center' /* Horizontal center alignment */
    }

    const right = (
        <div className="mx-auto px-4" style={style}>
            <h2 className="font-weight-bold text-white">Our Mission.</h2>
            <p className="font-weight-light text-light">
                Tidepool is a young financial data broker and asset manager that aims to provide a suite of financial services to the common investor. We are committed to building a platform of knowledge and tools to allow everyday people to compete with the most competitive investors in the world.
            </p>

            <p className="font-weight-light text-light">
                Tidepool was built in 2022 by Declan O'Mara out of a UCLA dorm. It began as a simple personal investing suite in 2016, but after finding a severe lack of cheap data sources and other resources for amateur algorithmic investors, he felt an obligation to polish the product and release it to all. Today Tidepool aims to break down the walls of algorithmic trading and open the doors to the world of automated investing.
            </p>
        </div>
    );

    const left = (
        <div>
            <TripleStatistics className="text-white"/>
        </div>
    );

    return (
        <div>
            <BiColumn left={left} right={right}/>
        </div>
    )
}

export default MissionSection;