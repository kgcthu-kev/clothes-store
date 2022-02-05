import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const NavComponent = ({ showCart, setShowCart }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          WitSone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>

            <NavDropdown title='Category' id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/products'>
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/products/shirts'>
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/products/skirts'>
                Skirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/products/shoes'>
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <FaHeart size={25} />
            </Nav.Link>
            <Nav.Link onClick={() => setShowCart(!showCart)}>
              <FaShoppingCart size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent
