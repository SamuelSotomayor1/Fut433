import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './shared/Home'
import { Player } from './shared/Player';
import './index.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/player",
      element: <Player/>
    },
  ]);

  return (
  <>
      <RouterProvider router = {router}/>
  </>
  )
}

export default App
