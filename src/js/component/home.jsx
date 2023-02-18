import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		setCounter((prevCounter) => prevCounter + 1)
	}, [])
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
            <div className="onehunthous">
				{counter}
			</div>
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
