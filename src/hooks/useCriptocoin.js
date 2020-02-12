import React, {useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCriptocoin = (label, initialState, options) => {

    //custom hook state
    const [state,updateState] = useState(initialState)

    const selectCripto = () => (
        <>
        <Label>{label} </Label>
        <Select
            onChange={e=> updateState(e.target.value)}
            value={state}
            >
            <option value='' >--Seleccione--</option>
            {options.map(option => (
                <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName }</option>
            ))}
        </Select>
        </>
    )

    //return state, interface and function
    return [state, selectCripto,updateState]
}

export default useCriptocoin