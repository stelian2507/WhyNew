import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import AddItem from './components/AddItem'
import AllItems from './components/AllItems'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link } from 'react-router-dom'




function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  return (
    <div className="App">
<nav className='logincss'> {!user.email ? <Link to="/auth"><b>Log in</b></Link> : <Link to="/profile"><b>Profile</b></Link>}
</nav>
      <h1 className='titlecss'>WhyNew</h1>
      <p><i>Why buy new overpriced if the option of slightly used exists.</i></p>
      <h4>{user.email}</h4>
      <nav className='navbarcss'>
        <Link to="/"><b>Home</b></Link>
        <Link to="all-items"><b>All Items</b></Link>
        <Link to="add-items"><b>Add Item</b></Link>
       

      </nav>


      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/all-items" render={(props) => <AllItems {...props} />} />
        <Route exact path="/add-items" render={(props) => <AddItem {...props} />} />
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />
      </Switch>

    </div>
  );
}

export default App;
