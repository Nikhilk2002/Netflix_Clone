import { BrowserRouter , Route, Routes,} from 'react-router-dom';

import MainLayout from './Pages/MainLayout';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<MainLayout/>} />
        <Route path="/sign" element={ <SignIn/> } />
     
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
