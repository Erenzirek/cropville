import { Link } from 'react-router-dom';
import 'animate.css';
import './Home.css';

function HomePage() {
    return(
    <>
    <div>
    <div className="home-game-title">
      <div className='title-container'>
        <h1 className='animate__animated animate__bounce'>Cropville</h1>
      </div>
      <h2>Welcome to Cropville</h2>
    </div>
    <div className='level-container'>        
        <a><Link to="/board"> 
          <button className='start-play'>Start Playing</button>
        </Link> </a>
      <div class="level-array">
        <div className='levels'>
          <div class="level">Level-1</div>
          <div class="level">Level-2 🔒</div>
          <div class="level">Level-3 🔒</div>
        </div>

        <div className='levels'>  
          <div class="level">Level-4 🔒</div>
          <div class="level">Level-5 🔒</div>
          <div class="level">Level-6 🔒</div>
        </div>
       
    </div>
    </div>
    </div>
   
    </>
   )
}

export default HomePage;