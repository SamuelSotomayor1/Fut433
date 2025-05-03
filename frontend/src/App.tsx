import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './shared/Home'
import { Player } from './shared/Player';

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
