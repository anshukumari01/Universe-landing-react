import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Universe and it's Celestial Object</h2>
          <p>
            Universe is a mystry in itself. There are many more things for you to know. Click on Learn More button to gain more knowledge.          </p>
        </div>
        <div className="row">
          <div className="gallery-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      Image={d.Image}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
