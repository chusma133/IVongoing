import React, {useState} from 'react';
import styled from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import HomeOne from '../images/home-1.jpg';
import HomeTwo from '../images/home-2.jpg';
import Popup from './Popup';
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0          rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Listings = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
                 

  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            View our Products
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image 
            src={HomeOne} 
            alt='home' 
            />
            <h2>Recharge</h2>
            <button onClick ={() => setButtonPopup4(true)}>Details</button>

              <Popup trigger=
              {buttonPopup4} 
              setTrigger = 
              {setButtonPopup4}>

            <h2>Recharge</h2>
            <p>These are the details</p>
              </Popup>
              <Arrow />
          </InfoWrap>
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image
              src={HomeTwo}
              alt='home' />
            <h2>Rehydrate</h2>
            <button onClick ={() => setButtonPopup3(true)}>Details</button>

              <Popup trigger=
              {buttonPopup3} 
              setTrigger = 
              {setButtonPopup3}>

            <h2>Rehydrate</h2>
            <p>These are the details</p>
              </Popup>
              <Arrow />
          </InfoWrap>

          
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image 
            src={HomeOne} 
            alt='home' />
            <h2>Repair</h2>
            <button onClick ={() => setButtonPopup2(true)}>Details</button>

              <Popup trigger=
              {buttonPopup2} 
              setTrigger = 
              {setButtonPopup2}>

            <h2>Repair</h2>
            <p>These are the details</p>
              </Popup>
              <Arrow />
            
          </InfoWrap>
          

        
          <InfoWrap
            data-aos='zoom-out-up'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'
          >
            <Image 
            src={HomeOne} 
            alt='home' />
            <h2>Revitalize</h2>         

            <button onClick ={() => setButtonPopup(true)}>Details</button>

            <Popup trigger=
            {buttonPopup} 
            setTrigger = 
            {setButtonPopup}>

              <h2>Revitalize</h2>
              <p>These are the details</p>
            </Popup>
              <Arrow />
          </InfoWrap>
        

        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
