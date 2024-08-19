import './App.css';
import Formulaire from './component/Formulaire';
import Connexion from './component/Connexion';
import Users from './component/Users';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Formulaire />
    },
    {
      path: '/connexion',
      element: <Connexion />
    }
  ]);


  return (
    <div className="App">

      <h1>First NodeJS test</h1>
      <RouterProvider router={router} />
      <Users />
    </div>
  );
}

export default App;
