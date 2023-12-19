import './App.css'
import { Link } from "react-router-dom";

function App() {

  let navigationBar = (
    <div>
      {localStorage.getItem("ACCESS_TOKEN") ? <button color='inherit' onClick={signout}>LogOut</button> : <Link style={{color: 'white'}} to='/login'>Login</Link> }
    </div>
  );


  return (
    <>
      {navigationBar}
    </>
  )
}

export default App
