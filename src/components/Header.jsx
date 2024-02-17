import logo from "/src/assets/investment-calculator-logo.png"

import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full flex flex-col items-center' id="header">
        <Image  className="" src={logo} width={400} height={400} alt='logo' />
        <h1>Investment Calculator</h1>
    </div> 
  )
}

export default Header