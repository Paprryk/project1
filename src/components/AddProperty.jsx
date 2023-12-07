import axios from "axios";
import { useState } from "react";

function AddProperty() {
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [garden, setGarden] = useState("");
    const [picture, setPicture] = useState("");

    return (<form onSubmit={e => {
        e.preventDefault()
        axios.post("http://localhost:3000/properties", { address, type, city, price, bedrooms, bathroom, garden})
            .then(response => {
                setAddress("");
                setType("");
                setCity("");
                setPrice("");
                setBedrooms("");
                setBathroom("");
                setGarden("");
                setPicture("");

            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="address" className="form-label">Address</label>
        <input size="50"
            id="address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />
        <label htmlFor="type" className="form-label">Type</label>
        <input
            id="type"
            className="form-control"
            type="text"
            value={type}
            onChange={e => setType(e.target.value)}
            required
        />
                <label htmlFor="city" className="form-label">City</label>
        <input size="50"
            id="city"
            className="form-control"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
        />
                <label htmlFor="price" className="form-label">Price</label>
        <input size="50"
            id="price"
            className="form-control"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
        />
                <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
        <input size="50"
            id="bedrooms"
            className="form-control"
            type="text"
            value={bedrooms}
            onChange={e => setBedrooms(e.target.value)}
            required
        />
                <label htmlFor="bathroom" className="form-label">Bathroom</label>
        <input size="50"
            id="bathroom"
            className="form-control"
            type="text"
            value={bathroom}
            onChange={e => setBathroom(e.target.value)}
            required
        />
                <label htmlFor="garden" className="form-label">Garden</label>
        <input size="50"
            id="garden"
            className="form-control"
            type="boolean" 
            value={garden}
            onChange={e => setGarden(e.target.value)}
            required
        />



                <label htmlFor="picture" className="form-label">Picture</label>
        <input size="50"
            id="picture"
            className="src"
            type="src" 
            value={picture}
            onChange={e => setPicture(e.target.value)}
            required
        />


        
        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>


    </form>);
}

export default AddProperty;