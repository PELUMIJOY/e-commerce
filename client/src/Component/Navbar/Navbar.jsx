import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const products = useSelector((state) => state.cart.products)

    const [state, setState ]=useState({clicked:false})
    const handleClick = () => {
        setState(state => ({
          clicked: !state.clicked
        }));
      };


  return (
    <div className='navbar'>
 <div className="wrapper" >
    <div className="left ">
    <div className="item">
        <img src="img/en.png" alt="" />
        < KeyboardArrowDownIcon/>
    </div>
    <div className="item">
        <span>USD</span>
        < KeyboardArrowDownIcon/>
    </div>
    <div className="item">
      <Link className='link' to="/products/1"> Women </Link>
       </div>
       <div className="item">
      <Link className='link' to="/products/2"> Men </Link>
       </div>
       <div className="item">
      <Link className='link' to="/products/3"> Children </Link>
       </div>
       </div> 
   
    <div className='center show-on-lg-screen'>
          <Link className='link' to='/'>
            JOYCESTORE
          </Link>
        </div>


        <div className='show-on-lg-screen'>
        <div className='center show-on-sm-screen'>
          <Link className='link' to='/'>
            JOYCESTORE
          </Link>
        </div>

    <div className="right">
        <div id='rightNav' className={state.clicked ? "#rightNav active": "rightNav"}>
        <div className='item'>
    <Link className='link' to='/'>Homepage</Link>
</div>
<div className='item' >
    <Link className='link' to='/'>About</Link>
</div>
<div className='item' >
    <Link className='link' to='/'>Contact</Link>
</div>
<div className='item' >
    <Link className='link' to='/'>Stores</Link>   
</div>
     <div className="icons" >
        <SearchIcon/>
        <PersonOutlineOutlinedIcon/>
        <FavoriteBorderIcon/>
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
        <ShoppingCartOutlinedIcon/>
        <span>{products.length}</span>
        </div>
    </div>
        </div>
        <div id='mobile' onClick={ handleClick }>
    <i id='bar' className={state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
 </div>
 </div>
 </div>


        {/* SHOW ONLY ON MEDIUM AND SMALL SCREEN */}
        <div className='show-on-sm-screen'>
          <div className='center_right-container'>
            <div className='center'>
              <Link className='link' to='/'>
                JOYCESTORE
              </Link>
            </div>
            <div className='right'>
              <div
                id='rightNav'
                className={state.clicked ? '#rightNav active' : 'rightNav'}
              >
                <div className='item'>
                  <Link className='link' to='/'>
                    Homepage
                  </Link>
                </div>
                <div className='item'>
                  <Link className='link' to='/'>
                    About
                  </Link>
                </div>
                <div className='item'>
                  <Link className='link' to='/'>
                    Contact
                  </Link>
                </div>
                <div className='item'>
                  <Link className='link' to='/'>
                    Stores
                  </Link>
                </div>
                <div className='icons'>
                  <SearchIcon />
                  <PersonOutlineOutlinedIcon />
                  <FavoriteBorderIcon />
                  <div className='cartIcon' onClick={() => setOpen(!open)}>
                    <ShoppingCartOutlinedIcon />
                    <span>{products.length}</span>
                  </div>
                </div>
              </div>
              <div id='mobile' onClick={handleClick}>
                <i
                  id='bar'
                  className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
 {open && <Cart/>}

    </div>
  );
};



export default Navbar;