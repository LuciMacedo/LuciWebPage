import { Route, Routes} from 'react-router-dom'
import { AdditionalProjects } from './assets/components/pages/additionalProjects/AdditionalProjects';
import { Home } from './assets/components/pages/home/Home';

export function Router() {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/additionalprojects' element={<AdditionalProjects/>}/>
    </Routes>
   );
}

