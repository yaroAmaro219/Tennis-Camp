import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
// import Dropdown from 'react-dropdown';
// import insta from '../../images/instagram1.svg'
// import drop from '../../images/drop-down-arrow.svg'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <div >
    <StyledMenu open={open}  id="nav" aria-hidden={!isHidden} {...props}>
      {/* <div class='dropdown-title' id="myDiv" > */}
      <a href="/services" > 
        Services</a>
        {/* <span aria-hidden="true"><img class='arrow' src={drop}/></span> */}
        {/* </div> */}
      <a href="/portfolio" >
        <span aria-hidden="true"></span>
        Work
      </a>
      <a href="/about" >
       About Us
        </a>
        <a href="/team" >
       Our Team
        </a>
      <a href="/contact" >
        <span aria-hidden="true"></span>
        Contact
        </a>
        {/* <div class='footer'>
        <h2>Glass Top © </h2>
        <div class='social-container'>
          <a class='social' href='https://www.instagram.com/glasstop.io/' target="_blank" rel="noopener noreferrer" >
          
          <svg class='insta-img'  width="35" height="35" viewBox="0 0 35 35" fill="none"  xmlns="http://www.w3.org/2000/svg">
<path d="M24.4507 2.87656H10.0679C6.09616 2.87656 2.87646 6.09625 2.87646 10.068V24.4507C2.87646 28.4224 6.09616 31.6421 10.0679 31.6421H24.4507C28.4223 31.6421 31.642 28.4224 31.642 24.4507V10.068C31.642 6.09625 28.4223 2.87656 24.4507 2.87656Z" stroke="black" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.0124 16.3532C23.1899 17.5502 22.9854 18.7727 22.4281 19.8468C21.8707 20.9209 20.9889 21.792 19.908 22.336C18.8271 22.8801 17.6022 23.0694 16.4075 22.8772C15.2128 22.6849 14.1091 22.1209 13.2534 21.2652C12.3978 20.4095 11.8337 19.3058 11.6414 18.1111C11.4492 16.9164 11.6386 15.6915 12.1826 14.6106C12.7266 13.5297 13.5977 12.6479 14.6718 12.0905C15.7459 11.5332 16.9684 11.3287 18.1654 11.5062C19.3864 11.6873 20.5167 12.2562 21.3896 13.1291C22.2624 14.0019 22.8313 15.1322 23.0124 16.3532Z" stroke="black" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.1699 9.34882H25.1843" stroke="black" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          
          </a>
          <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/GlassTop'><svg width="35" height="25" viewBox="0 0 35 35" fill="black" stroke='black' xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a>
        </div>
      
          </div> */}

    </StyledMenu>
    </div>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
