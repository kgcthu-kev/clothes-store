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
      {/* social media */}
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

      {/* Copyright */}
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
