import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import StarRating from './StarRating';
import { useState } from 'react';

// use movie rating in other component so pass the rating as props
function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' maxRating={10} setMovieRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={3}
    />
    <StarRating maxRating={10} className='test' />
    <StarRating />
    <Test />
  </React.StrictMode>
);
