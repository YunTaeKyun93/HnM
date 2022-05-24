import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }
    // const navigate = useNavigate();
    // const showDetail = () => {
    //   navigate(`/product/${item.id}`);
    // };
  return (
    <div className='productCard' key={item.id} onClick={showDetail}>
        <img src={item?.img} width="300px" />
        <div>{item?.choice === true ? 'Concious Choice' : ''}</div>
        <div className='productTitle'>
        {item?.title}
        </div>
        <div>${item?.price}</div>
        <div>{item?.new === true ? '신제품' : ''}</div>

    </div>
  )
}

export default ProductCard