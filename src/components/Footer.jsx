import { Form } from 'react-bootstrap'
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white'>
      <section className='mb-4 container p-4'>
        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='#!'
          role='button'
        >
          <FaFacebook />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='#!'
          role='button'
        >
          <FaTwitter />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='#!'
          role='button'
        >
          <FaGithub />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='#!'
          role='button'
        >
          <FaLinkedin />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='#!'
          role='button'
        >
          <FaInstagram />
        </a>
      </section>
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form>
      <div className='text-center p-3'>
        © 2022 Copyright by{' '}
        <a
          className='text-white text-decoration-none'
          href='https://github.com/kgcthu-kev'
        >
          kgcthu
        </a>
      </div>
    </footer>
  )
}

export default Footer
