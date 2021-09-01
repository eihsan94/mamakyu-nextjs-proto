import Image from 'next/image'
const Logo = ({ className = '', ...props }) => (
  <Image
    height={30}
    width={40}
    objectFit={'cover'}
    src={'/icon.png'}
    alt='logo.png'
  />
)

export default Logo
