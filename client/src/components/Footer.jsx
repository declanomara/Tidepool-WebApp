import React from "react";


function Footer () {
    const outerStyle = {
        "backgroundColor": "#001a1a",
        "height": "100%",
    }

    const innerStyle = {
        "minHeight": "30vh",
        "display": "flex",
        "flexDirection": "column",
        "verticalAlign": "center",
        "marginTop": "10vh",
    }

    return (
        <div className="p-2" style={outerStyle}>
            <div style={innerStyle}>
                <div className="row w-50 mx-auto">
                    <div className="col-md-6 text-muted text-center">
                        <h5 className="font-weight-bold">Headquarters</h5>
                        <p className="m-0">10995 Le Conte Ave, Los Angeles, CA 90024</p>
                        <h5 className="font-weight-bold mt-4">Contact</h5>
                        <p className="m-0">support@tidepool.finance</p>
                    </div>
                    <div className="col-md-6 text-muted text-center">
                        <h5 className="font-weight-bold">Community</h5>
                        <a className="m-0 text-reset" href="/roles">Open Roles</a>
                    </div>
                </div>
            </div>
            
            <p className="text-muted text-center m-2">&copy; 2022 Declan O'Mara</p>
        </div>
    )
}

export default Footer;