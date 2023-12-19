import './App.css'
import { Link } from "react-router-dom";
import { signout} from './service/ApiService'

function App() {

  let navigationBar = (
    <div>
      {localStorage.getItem("ACCESS_TOKEN") ? <button color='inherit' onClick={signout}>LogOut</button> : <Link style={{color: 'black'}} to='/login'>Login</Link> }
    </div>
  );


  return (
    <>
      {navigationBar}
    </>
  )
}

export default App
