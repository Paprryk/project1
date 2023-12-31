import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import Status from "./Status";
import { useNavigate } from "react-router";

function PropertiesStructure(props) {

    console.log(props)
    const navigate = useNavigate();

    if (props.status === "For Sale") {
        return (
            <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
                <div className="card">
                    <div className="card-body">
                        <h4>£{Number(props.price).toLocaleString("EN-UK")}</h4><br />
                        <img id="House" src={props.image} width={"70%"}></img>
                        <button style={{ margin:"10px"}} className="btn btn-primary" type="submit" onClick={() => navigate("/Bookings/" + props.id)}>
                                Bookings
                            </button>
                        <div className="card-text">
                            Address: {props.address}<br />
                            City: {props.city}<br />
                            Type: {props.type}<br />
                            Bedrooms: {props.bedrooms}<br />
                            Bathroom: {props.bathroom}<br />
                            Garden: {props.garden}<br />
                            Status: {props.status}<br />
                            <br></br>
                            <Status id={props.id} getProperties={props.getProperties} />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


else {
    return (
        <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
            <div className="card">
                <div className="card-body">
                    <h4>£{Number(props.price).toLocaleString("EN-UK")}</h4><br />
                    <img id="House" src={props.image} width={"70%"}></img>
                    <button disabled={true} style={{ margin:"10px"}} className="btn btn-primary" type="submit" onClick={() => navigate("/Bookings/" + props.id)}>
                            Bookings
                        </button>
                    <div className="card-text">
                        Address: {props.address}<br />
                        City: {props.city}<br />
                        Type: {props.type}<br />
                        Bedrooms: {props.bedrooms}<br />
                        Bathroom: {props.bathroom}<br />
                        Garden: {props.garden}<br />
                        Status: {props.status}<br />
                        <br></br>
                        <Status id={props.id} getProperties={props.getProperties} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}}

PropertiesStructure.propTypes = {
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathroom: PropTypes.string.isRequired,
    garden: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
}

export default PropertiesStructure;