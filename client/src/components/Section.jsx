import React from 'react';

function Section ({primary, secondary}) {
    return (
        <div className="row">
            <div className="col-md-6 my-4">
                {primary}
            </div>
            <div className="col-md-6 my-4">
                {secondary}
            </div>
        </div>
    )
}

export default Section;