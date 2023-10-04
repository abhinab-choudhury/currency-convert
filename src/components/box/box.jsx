import './box.css'

export default function box() {
    return (
        <div>
            <div className="center-box">
                <div className="box">
                    <h1>Currency Converter</h1>
                    
                    <form>
                        <div className="input-area">
                            <select name="have" id="cur_have">
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
                            <select name="want" id="cur_want" >
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
                        <input className='amount-input' type="number" name="amount" placeholder='amount' />
                        <button className='convert-btn' onClick={onClickHandler()} >CONVERT</button>
                    </form>

                    <div className='new-amount'>
                        <h1>1200.99</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

function onClickHandler() {
    let cur_have = ""
    let cur_want = ""
    let amount = ""

    document.addEventListener('onchange', async() => {
        cur_have = document.getElementById("cur_have").value
        cur_want = document.getElementById("cur_want").value
        amount = document.getElementById("amount-input").value

        fetch_data(cur_have, cur_want, amount)

    })
}

async function fetch_data(have, want, amount) {
    const URI = `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`
    fetch(`${URI}`,{
        method:"get",
        headers: {
            'X-Api-Key':'02BFCzuyhkWx0ylOXJUPVw==VO0ncgVPC77S8tLL'
        },
        body: JSON.stringify({ key: 'value' }),
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}