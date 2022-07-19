import { Routes, Route } from 'react-router-dom';

import Home from './componenents/routes/home/home.component';
import Navigation from './componenents/routes/navigation/navigation.component';
import Authentication from './componenents/routes/authentication/authentication.component';
import Shop from './componenents/routes/shop/shop.component';


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  ) 
}

export default App;
