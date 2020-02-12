import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import Error from './Error'

import useCoin from '../hooks/useCoin'
import useCriptocoin from '../hooks/useCriptocoin'

import axios from 'axios'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`



const Form = ({saveCoin, saveCriptoCoin } ) => {

    //cripto state

    const [criptoList, saveCriptoList] = useState([])
    const [error,saveError] = useState(false)

    const COINS = [
        {code:'USD', name:'US Dólar'},
        // {code:'MXN', name:'Peso Mexicano'},
        {code:'EUR', name:'Euro'},
        {code:'GBP', name:'Libra esterlina'},
    ]

    //usecoin
    const [coin, SelectCoins] = useCoin('Elige tu moneda','',COINS)

    //useCriptocoin

    const [criptoCoin, SelectCripto] = useCriptocoin('Elige la criptomoneda','',criptoList)

    //API Consult

    useEffect(()=> {
        const consultAPI = async () => {

            const result = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')

            saveCriptoList(result.data.Data)
        }
        consultAPI()
    },[])

    const cotizCoin = e=>{
        e.preventDefault()

        if(coin==='' || criptoCoin==='') {
            saveError(true)
            return
        }

        saveError(false)
        saveCoin(coin)
        saveCriptoCoin(criptoCoin)
    }

    return (
        <form
            onSubmit={cotizCoin}
        >
            {error? <Error message='Todos los campos son obligatorios' />:null}
            <SelectCoins />
            <SelectCripto />
            <Button 
                type= 'submit'
                value='Calcular'
            />
        </form>
    );
};

export default Form;