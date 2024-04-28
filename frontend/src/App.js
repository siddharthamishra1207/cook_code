import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Recipes from './Pages/Recipes';
import SignUp from './Pages/SignUp';
import  Login  from './Pages/Login';
import Profile from './Pages/Profile';
import AddR from './Pages/AddR';
import View from './Pages/View';
import Res from './Pages/Res';
import Try from './Pages/Try';
import RecipeDetail from './Pages/RecipeDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Recipes" element={<Recipes/>} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile/:_id" element={<Profile/>} />
      <Route path="/AddR" element={<AddR/>} />
      <Route path="/View" element={<View/>} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    
    </Routes>
  );
}

export default App;