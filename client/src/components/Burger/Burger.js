import React, {useState} from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import useWindowScrollPosition from "@rehooks/window-scroll-position";


const Burger = ({ open, setOpen, ...props }) => {
  const [change, setChange] = useState(false);
  const changePosition = 10;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style2 = {
    background: change ? "#464646" : "white" , 
  }
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger  class='burger' aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span style={style2} />
      <span style={style2} />
      <span style={style2} />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
