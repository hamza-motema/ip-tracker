import React, { useState, useEffect } from 'react';
import './App.scss';
import MyMap from './components/my-map';

function App() {
  const [value, setValue] = useState("");
  const [submit, setSubmit] = useState("false");
  const [posts, setPosts] = useState([]);
  const [ip, setIP] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [city, setCity] = useState('');



  const fetchPost = async () => {
    console.log("Votre ip : " + ip);
    /**
     * var url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_g2FhghrbuPCUqHGa2OZt1z0MyCtVD&ipAddress=" + ip
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data.location);
     */
  };

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const response = await fetch(
      "https://geolocation-db.com/json/"
    );
    const data = await response.json();
    setIP(data.IPv4);
    setCity(data.city)
  };

  const handleChange = e => {
    if (submit === true) {
      setIP(e.target.value);
    }

  };

  const handleSubmit = () => {
    setSubmit(true);
    fetchPost();
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">IP Adresse Tracker</h1>
        <form action="/action_page.php" className="form">
          <input type="text" placeholder="Email" onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </form>


      </div>
      <div className="information">
        <div>
          <p>ip address</p> <p>{value === '' ? ip : value}</p>
        </div>
        <div>
          <p>location</p> <p>{city}</p>
        </div>
        <div>
          <p>timezone</p> <p>nan</p>
        </div>
        <div>
          <p>isp</p> <p>nan</p>
        </div>
      </div>


      <div className="map">
        {
          /*
          <MyMap lng={4.835659} lat={45.764043} />
         */
        }
      </div>
    </div>
  );
}

export default App;
