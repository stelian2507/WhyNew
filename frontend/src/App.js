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

      <h1>WhyNew to the moon 🚀 </h1>
      <h4>{user.email}</h4>
      <nav>
        <Link to="/">Home</Link>
        <Link to="all-items">All Items</Link>
        <Link to="add-items">Add Item</Link>
        {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}


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
