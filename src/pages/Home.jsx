import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { FaAngleDoubleRight } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://course-api.com/react-tabs-project";
        //   axios:
  const fetchData = async () => {
    try {
      const response = await axios(API_URL);
      const { data } = response;
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

        // fetch 1. method :
  // const fetchData = async () => {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     console.log(data);
  // }

        // fetch 2. method :
  //   const fetchData = () => {
  //     fetch(API_URL)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //   };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h2>Loading ....</h2>
      </section>
    );
  }
  const { company, dates, duties, id, title } = apiData[value];

  return (
    <section>
      <div>
        <h3>EXPERIENCE</h3>
      </div>

      <div className="underline"></div>
      <div className="jobs-center">
        {/* buttons  */}
        <div className="btn-container">
          {apiData.map((item, index) => {
            return (
              <Button
                item={item}
                setValue={setValue}
                index={index}
                value={value}
                key={item.id}
              />
              //   <button
              //     key={item.id}
              //     onClick={() => setValue(index)}
              //     className={`job-btn ${index === value && "active-btn"} `}
              //   >
              //     {item.company}
              //   </button>
            );
          })}
        </div>

        <h3>{title} </h3>
        <h4>{company} </h4>
        <p className="job-date">{dates}</p>

        {duties.map((item, index) => {
            return (
                <div key={index}>
                    <FaAngleDoubleRight />
                    <p>{item}</p>
                </div>
            )
        })}
      </div>
      <Footer />
    </section>

  );
};

export default Home;
