import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
function App() {
  const coffees = useLoaderData();
  console.log(coffees)
  return (
    <>
      <h1 className='text-3xl font-bold text-green-400'>coffee client {coffees.length}</h1>
      <div>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
