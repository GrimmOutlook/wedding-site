import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
  console.log('process.env.VERSION', process.env.VERSION);
  console.log('process.env.PLATFORM', process.env.PLATFORM);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  return (
    <React.Fragment>
      <div className="flex__container">
          <div className="img__container">
              <img src="/dist/img/top-right.jpg" />
          </div>
          <div className="save__date">
            <div className="save__date__text">
              <h1>
              Save The Date!!
              </h1>
              <h2>September 7, 2019</h2>
              <h3>Columbia, Maryland</h3>
              <h3>More Details to Follow!</h3>
            </div>
          </div>
      </div>
      <p>Wedding Stuff</p>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
