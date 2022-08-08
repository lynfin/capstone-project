import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import MapPage from './MapPage';

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

  return (
    <>
      <main>
        <Switch>
          <Route exact path='/login'>
            <Login onLogin={setUser} />
          </Route>
          <Route exact path='/'>
            <MapPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
