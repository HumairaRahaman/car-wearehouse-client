import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddItem from './components/AddItem/AddItem'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Inventory from './components/Inventory/Inventory'
import MyItem from './components/MyItem/MyItem'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Products/Products'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Signin from './components/Singin/Signin/Signin'
import Signup from './components/Singin/Signup/Signup'


const App = () => {
  return (
    <div>
    <Header></Header>
    
     <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route> 
      <Route path='/inventory/:productId' element={<RequireAuth>
        <Inventory></Inventory>
      </RequireAuth>}></Route>
      {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route> */}
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
      <Route path='/addItem' element={<RequireAuth>
        <AddItem></AddItem>
      </RequireAuth>}></Route>
     

   
    <Route path='/myItem' element={<RequireAuth>
      <MyItem></MyItem>
    </RequireAuth>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes> 
    <Footer></Footer>
  </div>
  )
}

export default App
