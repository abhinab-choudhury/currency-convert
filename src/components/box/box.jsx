import { useState } from 'react';
import './box.css'
import Loading from '../loading';

import CurrencyAPI from '@everapi/currencyapi-js'

export default function box() {
  const [new_amount, setNew_Amount] = useState("...");
  const [loading, setloading] = useState(false);
  return (
    <div>
      <div className="center-box">
        <div className="box">
          <h1 style={{ marginLeft: "7px" }}>Currency Converter</h1>

          <form onSubmit={submitHandler}>
            <div className="input-area">
              <select className='text-muted' name="have" id="cur_have">
                <option defaultValue=""> Choose </option>
                <option value="INR">Indian Rupees</option>
                <option value="JPY">Japanese Yen</option>
                <option value="BRL">Brazilian real </option>
                <option value="FJD">Fijian dollar</option>
                <option value="BGN">Bulgarian lev</option>
                <option value="NZD">New Zealand dollar</option>
                <option value="AUD">Australian dollar</option>
                <option value="BND">Brunei dollar</option>
                <option value="SGD">Singapore dollar</option>
                <option value="CAD">Canadian Dollars</option>
                <option value="BMD">Bermudian dollar</option>
                <option value="PAB"> Panamanian balboa</option>
                <option value="USD">US Dollars</option>
                <option value="CHF">Swiss Franc</option>
                <option value="EUR">Euro</option>
                <option value="GBP">British Pound</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="KWD">Jordanian Dinar</option>
              </select>
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              <select className='text-muted' name="want" id="cur_want" >
                <option defaultValue=""> Choose </option>
                <option value="INR">Indian Rupees</option>
                <option value="JPY">Japanese Yen</option>
                <option value="BRL">Brazilian real </option>
                <option value="FJD">Fijian dollar</option>
                <option value="BGN">Bulgarian lev</option>
                <option value="NZD">New Zealand dollar</option>
                <option value="AUD">Australian dollar</option>
                <option value="BND">Brunei dollar</option>
                <option value="SGD">Singapore dollar</option>
                <option value="CAD">Canadian Dollars</option>
                <option value="BMD">Bermudian dollar</option>
                <option value="PAB"> Panamanian balboa</option>
                <option value="USD">US Dollars</option>
                <option value="CHF">Swiss Franc</option>
                <option value="EUR">Euro</option>
                <option value="GBP">British Pound</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="KWD">Jordanian Dinar</option>
              </select>
            </div>
            <input className='amount-input' id='amount_input' type="number" name="amount" placeholder='0.0' />
            <button className='convert-btn' onClick={async () => {
              let cur_have = "";
              let cur_want = "";
              let amount = "";

              cur_have = document.getElementById("cur_have").value;
              cur_want = document.getElementById("cur_want").value;
              amount = document.getElementById("amount_input").value;
              if (amount === "") {
                alert("Enter a Value");
                return;
              }
              if (amount < 0) {
                alert("Amount Cannot be Negative");
                return;
              }
              if (cur_have === "" || cur_want === "") {
                alert("Select the Currency");
                return;
              }
             
              const currencyApi = new CurrencyAPI('cur_live_aAEZSLnmkhXAkRbue7O0xaS90UQ2nifCFcfMlPRf');
              let new_amount
              setloading(true)
              currencyApi.latest({
                base_currency: cur_have,
                currencies: cur_want
              }).then(response => {
                new_amount = (response.data[cur_want].value * amount).toLocaleString()
                setNew_Amount(new_amount + " " + cur_want)
                setloading(false)
              });

            }}>
              CONVERT
            </button>
          </form>

          <div className='new-amount mt-3'>
            <h1>
              {loading ? <Loading className="mt-2" /> : new_amount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function submitHandler(event) {
  event.preventDefault();
}
