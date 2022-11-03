import React from 'react';

function Section ({index, content, id}) {
    const colors = [
        "#b2d8d8",
        "#66b2b2",
        "#008080",
        "#006666",
        "#004c4c"
    ];

    const backgroundColor = colors[index];
    const style = {
        "minHeight": "50vh",
        "backgroundColor": backgroundColor
    }

    return (
        <div id={id} style={style}>
            {content}
        </div>
    )
}

export default Section;