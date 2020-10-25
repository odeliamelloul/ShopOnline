import React from 'react';
import FrontPage from './Components/FrontPage';
import bag from './Components/bag';
import Form from './Components/Form';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';


function App() {


        
return (
  <div>
  <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/bag" component={bag}  />
          <Route path="/Form" component={Form}  />
  </Switch>
  </div>
  );
}
export default App;
