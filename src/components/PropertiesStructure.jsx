import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======


import { useState, useEffect } from "react";

>>>>>>> 6c2550a389a89d05885b75aa95142608d9f3c838
import Status from "./Status";


function PropertiesStructure(props) {

    const [status, setStatus] = useState("")
    return (
        <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
            <div className="card">
                <div className="card-body">
                    <h4>£{props.price}</h4><br />
                    <img id="House" src="https://lid.zoocdn.com/u/1600/1200/bac90d574c72de3647414f5c0f4a7390a4a5305d.jpg:p" width={"60%"}></img>
                    <div className="card-text">
                        <br />Address: {props.address}<br />
                        City: {props.city}<br />
                        Type: {props.type}<br />
                        Bedrooms: {props.bedrooms}<br />
                        Bathroom: {props.bathroom}<br />
                        Garden: {props.garden}<br />

<<<<<<< HEAD
=======
                        {/* <label>Status :</label> */}
                        {/* <select onSelect={e => setStatus(e.target.value) } >
                            <option  style={{ color: "green"}}value={"For Sale"}>For Sale</option>
                            <option style={{ color: "orange"}}value={"Sold"}> Sold</option>
                            <option style={{ color: "red"}}value={"Withdrawn"}>Withdrawn</option>
                        </select> */}
                        Status:{props.status}

>>>>>>> 6c2550a389a89d05885b75aa95142608d9f3c838
                        Status: {props.status}<br />
                         <br></br>

                        <Status id={props.id}/> 


                    </div>
                </div>
            </div>
        </div>
    )
}

PropertiesStructure.propTypes = {
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathroom: PropTypes.string.isRequired,
    garden: PropTypes.string.isRequired,

    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired

<<<<<<< HEAD
=======

    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired

>>>>>>> 6c2550a389a89d05885b75aa95142608d9f3c838
}

export default PropertiesStructure;