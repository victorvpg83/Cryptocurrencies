import React from 'react'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotization = ({result}) => {
    if(Object.keys(result).length===0) return null

    return (
        <ResultDiv>
            <Price>La cotización es: <span> {result.PRICE} </span> </Price>
            <Info>Máximo: <span> {result.HIGHDAY} </span> </Info>
            <Info>Mínimo: <span> {result.LOWDAY} </span> </Info>
            <Info>Variación: <span> {result.CHANGEPCT24HOUR} </span> </Info>
            <Info>Actualizado: <span> {result.LASTUPDATE} </span> </Info>
        </ResultDiv>
    )
}

export default Cotization