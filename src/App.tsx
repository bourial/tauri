import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './setup/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
