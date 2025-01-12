import { useState } from 'react'
import { InputBox } from './components' // Assuming InputBox component is already implemented
import useCurrencyInfo from './hooks/useCurrencyInfo' // Assuming useCurrencyInfo hook is correctly implemented

function App() {
  const [amount, setAmount] = useState(0) // Default to 0
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0) // Default to 0

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const handleAmountChange = (value) => {
    const numericValue = value ? parseFloat(value) : 0 // Ensure the value is parsed as a number
    if (!isNaN(numericValue) && numericValue >= 0) {
      setAmount(numericValue) // Update the amount state with numeric value
    }
  }

  const handleConvertedAmountChange = (value) => {
    const numericValue = value ? parseFloat(value) : 0 // Ensure the value is parsed as a number
    if (!isNaN(numericValue) && numericValue >= 0) {
      setConvertedAmount(numericValue) // Update the converted amount state with numeric value
    }
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2)) // Format to 2 decimals
    } else {
      alert('Conversion rate not available.')
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1 text-black">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={handleAmountChange}
                onCurrencyTypeChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 text-black">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={handleConvertedAmountChange}
                onCurrencyTypeChange={(currency) => setTo(currency)}
                amountDisable
                currencyOptions={options}
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
