import { NavLink } from 'react-router-dom';
import items from './items';
import { NavbarItem, NavbarList, NavbarWrapper } from './Navbar.styled';

const Navbar = () => {
    const elements = items.map(({ id, text, link }) => (
        <NavbarItem key={id}>
            <NavLink style={{
  textDecoration: 'none',
  color: '#171212',
            }} to={link}>{text}</NavLink>
        </NavbarItem>
    ));
    return (
        <NavbarWrapper>
            <nav>
                <NavbarList>{elements}</NavbarList>
            </nav>
        </NavbarWrapper>
    )
};

export default Navbar;