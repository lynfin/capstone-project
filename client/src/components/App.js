import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import WorkoutList from './WorkoutList';
import NewWorkout from './NewWorkout';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path='/login'>
            <Login onLogin={setUser} />
          </Route>
          <Route exact path='/new'>
            <NewWorkout user={user} />
          </Route>
          <Route exact path='/'>
            <WorkoutList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
