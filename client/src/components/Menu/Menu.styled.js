import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => 'white'};
  width: 100%;
  text-align: left;
  padding: 3rem 3rem 16rem 6rem;
  position: absolute;
  top: 0;
  right: 0;
 
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: !important 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;
    align-items: center;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: left;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;


  
