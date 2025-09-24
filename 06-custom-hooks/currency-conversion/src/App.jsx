import { use, useState } from 'react'
import {InputBox} from './Components/Index'
import useCurrecyInfo from './hooks/useCurrencyInfo'
import currencyBg from './assets/currencyBg.png'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrecyInfo(from);
  const options = ["usd", "inr", "eur", "gbp", "jpy"];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4"
      style={{
      backgroundImage: `url(${currencyBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}

    >
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Currency Converter
          </h1>
          <p className="text-gray-600">
            Convert currencies with live exchange rates
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {/* From Currency */}
              <div>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* Swap Button */}
              <div className="flex justify-center py-2">
                <button 
                  type="button"
                  onClick={swap}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-blue-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>

              {/* To Currency */}
              <div>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              {/* Convert Button */}
              <button 
                onClick={convert}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 focus:ring-4 focus:ring-blue-200 shadow-md"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>

            {/* Exchange Rate Info */}
            {amount && convertedAmount && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Exchange Rate</p>
                  <p className="font-semibold text-gray-800">
                    1 {from.toUpperCase()} = {(currencyInfo[to] || 0).toFixed(4)} {to.toUpperCase()}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Connect your currency API for live exchange rates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;