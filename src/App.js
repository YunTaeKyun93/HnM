import { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';



// 1. 전체 상품페이지, 로그인, 상품 상세페이지
// 1-1 navi 만들기
// 2. 전체 상품페이지에서는 전체 상품볼수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 로그인 안될 시 상세 페이지 못보고 로그인 페이지 나옴
// 5. 로그아웃 버튼 클릭을 하면 로그아웃이 된다.



function App() {
  const [authenticate,setAuthenticate] = useState(false); //true 로그인
  useEffect(()=>{
    console.log('first',authenticate);
  },[authenticate])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
