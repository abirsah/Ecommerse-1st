import React from 'react'
import Images from '../components/Images'
import Banner from '../assets/banner1.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refresh from '../assets/refresh.png'

const Home = () => {
  return (
    <section>
      <Images className='w-full' src={Banner}/>
      <Container>
         <Flex className='justify-between'>
              <Flex className='item-center gap-x-8 py-[30px]'>
          <Images src={Two}/>
          <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
        </Flex>
        <Flex className='item-center gap-x-8 py-[30px]'>
          <Images src={Car}/>
          <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
        </Flex>
        <Flex className='item-center gap-x-8 py-[30px]'>
          <Images src={Refresh}/>
          <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
        </Flex>

         </Flex>
      </Container>
    </section>
  )
}

export default Home                      