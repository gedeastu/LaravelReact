import './bootstrap';
import React from 'react'
import RootLayout from './layouts/RootLayout';
import ShopPage from './pages/ShopPage';
import ExplorePage from './pages/ExplorePage';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'
import { QueryClientProvider,QueryClient,useQuery } from '@tanstack/react-query'
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
// const container = document.getElementById('App')
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}
    </>
    // <QueryClientProvider client={queryClient}>
    // </QueryClientProvider>
  )
}

export default App
// const root = ReactDOM.createRoot(container);
// root.render(<App/>)