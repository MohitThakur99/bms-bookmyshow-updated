import axios from "axios";
import React, { useState, useEffect } from "react";

// Component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  const [nowAiring, setNowAiring] = useState([]);

  useEffect(() => {
    const requestNowAiring = async () => {
      const getNowAiring = await axios.get("/tv/airing_today");
      setNowAiring(getNowAiring.data.results);
    };

    requestNowAiring();
  }, []);

  console.log({ nowAiring });
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in NCR</h2>
            <div className="flex flex-wrap">
              {nowAiring.map((image) => (
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                  <Poster
                    {...image}
                    original_title={image.original_name}
                    subtitle={image.name}
                    isDark={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Hindi", "Tamil", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
