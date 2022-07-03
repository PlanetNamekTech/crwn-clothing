import { Routes, Route } from 'react-router-dom';

import Home from './componenents/routes/home/home.component';
import Navigation from './componenents/routes/navigation/navigation.component';
import Authentication from './componenents/routes/authentication/authentication.component';


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  ) 
}

export default App;
