import './App.css';
import React, { useState } from 'react'; 
import example_cafe from "./example_cafe.jpg";

function Header() {

  return (
    <div>
      <header>
        <h1 id='title'>StudySips</h1>
        <nav>
          <a class="active" href="#home">Home</a>
          <a href="#favorites">Favorites</a>
          <a href="#contact">Contact</a>
          <a href="#logout">Logout</a>
        </nav>
      </header>
    </div>
  )
}

function CalorieCounter() {
  // List to manage list of foods
  const [foods, setFoods] = useState([]);
  const [calories, setCalories] = useState('')

  // State to manage input value
  const [inputValue, setInputValue] = useState('');

  const [isEditing, setisEditing] = useState(false);

  const handleButtonClick = () => {
    setisEditing(true);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '' && calories.trim() !== '') {
      setFoods([...foods, { food: inputValue, calorie: calories}]);
      setInputValue('');
      setCalories('');
    }
  };

  const handleCancel = () => {
    setisEditing(false);
    setInputValue('');
  }

  return (
    <main>
      <div className='main-container'>
        <div className='counter-container'>

          <div className='counter-title'>
            <h2>Cafes</h2>
          </div>

          <div className='food-calorie-title-container'>
            <div className='food-title'>
              <h3>Cafe Name and Pic</h3>
            </div>

            <div className='calorie-title'>
              <h3>Captions</h3>
            </div>
          </div>
          <div className='cafe-feed-container'>
            <div className='cafe-list-container'>
              <div className='cafe-post-container'>
                <div className='cafe-name'>
                  <h3>Bonsai Cafe</h3>
                </div>
                <img src={example_cafe} alt="example cafe pic" />
              </div>
            </div>

            <div className='caption-list-container'>
              <div className='caption-post-container'>
                <>
                <div className='caption-tag'>
                  <h3>wifi</h3>
                </div>
                <div className='caption-tag'>
                  <h3>tag</h3>
                </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default function App() {
  return (
    <div>
      <Header />
      <CalorieCounter />
    </div>
  )
}
