import { Routes, Route } from 'react-router-dom';

import Home from './componenents/routes/home/home.component';
import Navigation from './componenents/routes/navigation/navigation.component';
import SignIn from './componenents/routes/sign-in/sign-in.component';


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  ) 
}

export default App;
