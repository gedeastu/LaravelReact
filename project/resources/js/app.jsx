import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './layouts/RootLayout';
import ShopPage from './pages/ShopPage';
import ExplorePage from './pages/ExplorePage';
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'
import { QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
// console.log(queryClient)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<ShopPage/>}/>
      <Route path='/Explore' element={<ExplorePage/>}/>
    </Route>
  )
)
const container = document.getElementById('root')
const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </>
  )
}

export default App
const root = ReactDOM.createRoot(container);
root.render(<App/>)