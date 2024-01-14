import React from "react";

export const Celestials = (props) => {
  return (
    <div id="Celestials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Celestials</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="Celestial">
                    <div className="Celestial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="Celestial-meta">  {d.name} </div>
                    <div className="Celestial-content">
                      <p>{d.text}</p>
                      
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
