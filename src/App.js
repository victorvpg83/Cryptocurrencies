import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import axios from 'axios'
import image from './cryptomonedas.png'
import Form from './components/Form'
import Cotization from './components/Cotization'
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`


function App() {

  const [coin, saveCoin] = useState('')
  const [criptoCoin, saveCriptoCoin] = useState('')
  const [result,saveResult] = useState({})
  const [loading, saveLoading] = useState(false)

  useEffect(()=>{
    const cotizCripto = async ()=>{
          //avoid first execution
    if(coin==='') return

    const result = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`)
    
    //show spinner
    saveLoading(true)

    setTimeout(()=>{
      saveLoading(false)

      saveResult(result.data.DISPLAY[criptoCoin][coin])

    },2000)

    }
    cotizCripto()


  },[coin,criptoCoin])

  return (
    <Container>
      <div>
        <Image src={image} alt='Crypto image' />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form 
          saveCoin={saveCoin}
          saveCriptoCoin={saveCriptoCoin}
        />
        {loading? <Spinner/>:<Cotization result={result}/>}
      </div>
    </Container>
  );
}

export default App;
