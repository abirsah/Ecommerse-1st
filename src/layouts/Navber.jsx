import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import Logo from '../assets/logo.png'
import List from '../components/List'

const Navber = () => {
  return (
    <nav className='py-8'>
     <Container>
         <Flex>
             <div className='w-5/12'>
                   <Images src={Logo}/>
             </div>
                 <div className='w-7/12'>
                 
                     <ul className='flex gap-x-10'>
                    
                        <List text="Home"/>
                        <List text="Shop"/>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                    
                      </ul>
               </div>
         </Flex>

     </Container>
    </nav>
  )
}

export default Navber