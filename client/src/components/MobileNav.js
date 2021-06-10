import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import  Burger from './Burger';
import  Menu from './Menu'
import FocusLock from 'react-focus-lock';
import Totally from './../images/Totally Tennis Logo.png'

function Nav1() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  

  return (
      <div class='mobile-nav'> 
        
      <div class='burger-container'>
        <ThemeProvider class='theme' theme={theme}>
          <div>
            <GlobalStyles />
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </div>
          </div>
        </ThemeProvider>
        </div>
    </div>
  );
}

export default Nav1;
