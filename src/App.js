import axios from "axios";
import { useState } from "react";
function App() {
  let [deg, setdeg] = useState("0");
  let [city, setcity] = useState("");
  let [descrip, setdescrip] = useState("");
  let [inputValue, setinputValue] = useState("");

  function getData() {
    let weather = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=0b89a5cb7abcfc26e16a71ac3d80b770`
    );

    weather.then((data) => {
      console.log(data.data);

      setdeg(data.data.main.temp);
      setcity(data.data.name);
      setdescrip(data.data.weather[0].description);
    });
  }

  return (
    <div className="flex flex-row justify-center h-[100vh] items-center">
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
        }}
        className="p-10 rounded-2xl shadow"
      >
        <h2 className="font-medium text-3xl">Hey! ⛅ </h2>
        <p className="text-xl mt-3">
          Do you want to know the weather Report :)
        </p>
        <input
          type="text"
          className="rounded-md h-6 text-xl mt-2 p-5 outline-none"
          placeholder="City Name?"
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
        />

        <br />

        <button
          onClick={getData}
          className="bg-black text-white rounded-lg p-2 text-xl mt-2"
        >
          Get Report ⚡
        </button>

        <p className="text-xl mt-2">
          Degree: {deg} | City: {city} | Weather: {descrip}
        </p>
      </div>
    </div>
  );
}

export default App;
