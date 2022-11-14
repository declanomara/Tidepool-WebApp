import React, {useState, useEffect} from "react";

function secondsToDhms(seconds) {
    if(!seconds) { return false; }
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes ") : "";
    return dDisplay + hDisplay + mDisplay; // + sDisplay;
}

function StatusItem({name, endpoint}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [status, setStatus] = useState({'status': false, 'uptime': -1});

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setStatus({
                'status': true,
                'uptime': secondsToDhms(result.uptime) || "Not available"
            });
            },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [endpoint])


    const style = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    }

    if (error) {
        console.log("Error: ", error)
        return (
            <li className="list-group-item" style={{width: "100%"}}>
                <div style={style}>
                    <h6 className="text-muted">{name}</h6>
                    <h6 className="text-danger">● Severe Outage</h6>
                </div>
            </li>
        )
      } 
      else if (!isLoaded) {
        return (
            <li className="list-group-item" style={{width: "100%"}}>
                <div style={style}>
                    <h6 className="text-muted">{name}</h6>
                    <h6 className="text-muted">Loading...</h6>
                </div>
            </li>
        )
      } else {
        return (
            <li className="list-group-item" style={{width: "100%"}}>
                <div style={style}>
                    <h6 className="text-muted">{name}</h6>
                    {status.status ? (
                        <h6 className="text-success">● Operational</h6>
                    ) : (
                        <h6 className="text-danger">● Severe Outage</h6>
                    )}
                </div>
                <svg className="availability-time-line-graphic" id="uptime-component-74dvc0qj8zdp" preserveAspectRatio="none" height="34" viewBox="150 0 298 34" style={{width: "100%"}}>
                    <rect height="34" width="3" x="0" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-0" data-html="true"></rect>
                    <rect height="34" width="3" x="5" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-1" data-html="true"></rect>
                    <rect height="34" width="3" x="10" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-2" data-html="true"></rect>
                    <rect height="34" width="3" x="15" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-3" data-html="true"></rect>
                    <rect height="34" width="3" x="20" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-4" data-html="true"></rect>
                    <rect height="34" width="3" x="25" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-5" data-html="true"></rect>
                    <rect height="34" width="3" x="30" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-6" data-html="true"></rect>
                    <rect height="34" width="3" x="35" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-7" data-html="true"></rect>
                    <rect height="34" width="3" x="40" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-8" data-html="true"></rect>
                    <rect height="34" width="3" x="45" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-9" data-html="true"></rect>
                    <rect height="34" width="3" x="50" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-10" data-html="true"></rect>
                    <rect height="34" width="3" x="55" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-11" data-html="true"></rect>
                    <rect height="34" width="3" x="60" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-12" data-html="true"></rect>
                    <rect height="34" width="3" x="65" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-13" data-html="true"></rect>
                    <rect height="34" width="3" x="70" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-14" data-html="true"></rect>
                    <rect height="34" width="3" x="75" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-15" data-html="true"></rect>
                    <rect height="34" width="3" x="80" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-16" data-html="true"></rect>
                    <rect height="34" width="3" x="85" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-17" data-html="true"></rect>
                    <rect height="34" width="3" x="90" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-18" data-html="true"></rect>
                    <rect height="34" width="3" x="95" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-19" data-html="true"></rect>
                    <rect height="34" width="3" x="100" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-20" data-html="true"></rect>
                    <rect height="34" width="3" x="105" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-21" data-html="true"></rect>
                    <rect height="34" width="3" x="110" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-22" data-html="true"></rect>
                    <rect height="34" width="3" x="115" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-23" data-html="true"></rect>
                    <rect height="34" width="3" x="120" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-24" data-html="true"></rect>
                    <rect height="34" width="3" x="125" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-25" data-html="true"></rect>
                    <rect height="34" width="3" x="130" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-26" data-html="true"></rect>
                    <rect height="34" width="3" x="135" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-27" data-html="true"></rect>
                    <rect height="34" width="3" x="140" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-28" data-html="true"></rect>
                    <rect height="34" width="3" x="145" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-29" data-html="true"></rect>
                    <rect height="34" width="3" x="150" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-30" data-html="true"></rect>
                    <rect height="34" width="3" x="155" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-31" data-html="true"></rect>
                    <rect height="34" width="3" x="160" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-32" data-html="true"></rect>
                    <rect height="34" width="3" x="165" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-33" data-html="true"></rect>
                    <rect height="34" width="3" x="170" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-34" data-html="true"></rect>
                    <rect height="34" width="3" x="175" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-35" data-html="true"></rect>
                    <rect height="34" width="3" x="180" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-36" data-html="true"></rect>
                    <rect height="34" width="3" x="185" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-37" data-html="true"></rect>
                    <rect height="34" width="3" x="190" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-38" data-html="true"></rect>
                    <rect height="34" width="3" x="195" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-39" data-html="true"></rect>
                    <rect height="34" width="3" x="200" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-40" data-html="true"></rect>
                    <rect height="34" width="3" x="205" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-41" data-html="true"></rect>
                    <rect height="34" width="3" x="210" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-42" data-html="true"></rect>
                    <rect height="34" width="3" x="215" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-43" data-html="true"></rect>
                    <rect height="34" width="3" x="220" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-44" data-html="true"></rect>
                    <rect height="34" width="3" x="225" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-45" data-html="true"></rect>
                    <rect height="34" width="3" x="230" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-46" data-html="true"></rect>
                    <rect height="34" width="3" x="235" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-47" data-html="true"></rect>
                    <rect height="34" width="3" x="240" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-48" data-html="true"></rect>
                    <rect height="34" width="3" x="245" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-49" data-html="true"></rect>
                    <rect height="34" width="3" x="250" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-50" data-html="true"></rect>
                    <rect height="34" width="3" x="255" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-51" data-html="true"></rect>
                    <rect height="34" width="3" x="260" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-52" data-html="true"></rect>
                    <rect height="34" width="3" x="265" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-53" data-html="true"></rect>
                    <rect height="34" width="3" x="270" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-54" data-html="true"></rect>
                    <rect height="34" width="3" x="275" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-55" data-html="true"></rect>
                    <rect height="34" width="3" x="280" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-56" data-html="true"></rect>
                    <rect height="34" width="3" x="285" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-57" data-html="true"></rect>
                    <rect height="34" width="3" x="290" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-58" data-html="true"></rect>
                    <rect height="34" width="3" x="295" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-59" data-html="true"></rect>
                    <rect height="34" width="3" x="300" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-60" data-html="true"></rect>
                    <rect height="34" width="3" x="305" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-61" data-html="true"></rect>
                    <rect height="34" width="3" x="310" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-62" data-html="true"></rect>
                    <rect height="34" width="3" x="315" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-63" data-html="true"></rect>
                    <rect height="34" width="3" x="320" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-64" data-html="true"></rect>
                    <rect height="34" width="3" x="325" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-65" data-html="true"></rect>
                    <rect height="34" width="3" x="330" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-66" data-html="true"></rect>
                    <rect height="34" width="3" x="335" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-67" data-html="true"></rect>
                    <rect height="34" width="3" x="340" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-68" data-html="true"></rect>
                    <rect height="34" width="3" x="345" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-69" data-html="true"></rect>
                    <rect height="34" width="3" x="350" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-70" data-html="true"></rect>
                    <rect height="34" width="3" x="355" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-71" data-html="true"></rect>
                    <rect height="34" width="3" x="360" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-72" data-html="true"></rect>
                    <rect height="34" width="3" x="365" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-73" data-html="true"></rect>
                    <rect height="34" width="3" x="370" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-74" data-html="true"></rect>
                    <rect height="34" width="3" x="375" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-75" data-html="true"></rect>
                    <rect height="34" width="3" x="380" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-76" data-html="true"></rect>
                    <rect height="34" width="3" x="385" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-77" data-html="true"></rect>
                    <rect height="34" width="3" x="390" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-78" data-html="true"></rect>
                    <rect height="34" width="3" x="395" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-79" data-html="true"></rect>
                    <rect height="34" width="3" x="400" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-80" data-html="true"></rect>
                    <rect height="34" width="3" x="405" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-81" data-html="true"></rect>
                    <rect height="34" width="3" x="410" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-82" data-html="true"></rect>
                    <rect height="34" width="3" x="415" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-83" data-html="true"></rect>
                    <rect height="34" width="3" x="420" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-84" data-html="true"></rect>
                    <rect height="34" width="3" x="425" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-85" data-html="true"></rect>
                    <rect height="34" width="3" x="430" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-86" data-html="true"></rect>
                    <rect height="34" width="3" x="435" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-87" data-html="true"></rect>
                    <rect height="34" width="3" x="440" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-88" data-html="true"></rect>
                    <rect height="34" width="3" x="445" y="0" fill="#2fcc66" class="uptime-day component-74dvc0qj8zdp day-89" data-html="true"></rect>
                </svg>
                <p className="text-muted font-weight-light text-center" style={{fontSize: 14}}>Uptime: {status.uptime}</p>
            </li>
        );
      }
}

export default StatusItem;