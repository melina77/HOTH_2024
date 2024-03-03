import './App.css';
import React, { useState } from 'react'; 

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
              <h3>Cafe and Pic</h3>
            </div>

            <div className='calorie-title'>
              <h3>Captions</h3>
            </div>
          </div>
          <div className='counter-list-container'>
            <div className='food-list-container'>
              {foods.map((food, index) => (
                <div key={index}>{food.food}</div>
              ))}
            <div className='add-item-container'>
              {isEditing ? ( 
                <div>
                  <input 
                      type="text"
                      value={inputValue}
                      placeholder="Enter Cafe Name"
                      onChange={(e) => setInputValue(e.target.value)}
                      
                    />
                  <button onClick={handleSubmit}>Submit</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                  <button onClick={handleButtonClick}>Add Food</button>
              )}
              </div>
            </div>

            <div className='calories-list-container'>
              {foods.map((food, index) => (
                <div key={index}>{food.calorie}</div>
              ))}
              {isEditing ? (
                <div>
                  <input 
                    className='calories-input' 
                    type="text"
                    value={calories}
                    placeholder="Enter caption"
                    onChange={(e) => setCalories(e.target.value)}  
                  />
                </div>
              ) : (
                null
              )}
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
