import './App.css'
import { Card } from './components/card/card';
import { foodData } from './interface/foodData';

function App() {
  const data: foodData[] = [];
  return (
   
      <div className='container' >
        <h1>Cardápio</h1>
        <div className='card-grid'>
       {data.map(foodData => <Card 
       price={foodData.price} 
       title={foodData.title} 
       image={foodData.image} 
       />)}
        </div>
      </div>
     
    
  )
}

export default App
