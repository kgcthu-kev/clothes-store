import { BsCart2 } from 'react-icons/bs'
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavComponent = () => {
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

            <NavDropdown title='Search' id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/products'>
                All Products
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to='/products/clothings'>
                Clothings
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/products/shoes'>
                Shoes
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/products/shirts'>
                Shirts
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/products/skirts'>
                Skirts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>
              <Button variant='dark'>
                <BsCart2 size={20} /> <Badge bg='primary'>9</Badge>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent
