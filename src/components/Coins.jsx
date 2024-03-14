import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import { Container, HStack, VStack, Image, Heading, Text, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import CoinCard from './CoinCard'

const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const changePage = (page) => {
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        console.log(data);
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false);
      }
    }
    fetchCoins()
  }, [currency, page])

  if (error) return <Error msg={"Error while fetching coins"} />

  return <Container maxW={'container.lg'}>
    {loading ? <Loader /> : <>
      <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
        <HStack spacing={"4"} >

          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
        </HStack>
      </RadioGroup>

      <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
        {coins.map((i) => (
          <CoinCard name={i.name}
            img={i.image}
            price={i.current_price}
            symbol={i.symbol}
            key={i.id}
            id={i.id}
            currencySymbol={currencySymbol} />
        ))}
      </HStack>
      <HStack width={"full"} overflowX={"auto"} p={"8"} >
        {
          btns.map((item, index) => {
            return <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={() => changePage(index + 1)}>{index + 1}</Button>
          })
        }

      </HStack>
    </>}
  </Container>
}




export default Coins