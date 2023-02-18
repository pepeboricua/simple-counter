import React from "react";

//create your first component
const Home = () => {
  return (
    <div className="page">
      <div className="container justify-content-flex">
        <div className="row">
          <div className="col">
            <div className="clock">
              <i className="fa-solid fa-clock"></i>
            </div>
          </div>
          <div className="col">
            <div className="onehunthous">1</div>
          </div>
          <div className="col">
            <div className="tenthous">1</div>
          </div>
          <div className="col">
            <div className="thous">1</div>
          </div>
          <div className="col">
            <div className="hunds">1</div>
          </div>
          <div className="col">
            <div className="tens">1</div>
          </div>
          <div className="col">
            <div className="ones">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
