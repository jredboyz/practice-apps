const {useState} = require("react")

 const Form2 = ({toggle23, getForm2Info}) => {
  const [tempLine1, setTempLine1] = useState('')
  const [tempLine2, setTempLine2] = useState('')
  const [tempCity, setTempCity] = useState('')
  const [tempState, setTempState] = useState('')
  const [tempZipcode, setTempZipcode] = useState('')
  const [tempPhoneNumber, setTempPhoneNumber] = useState('')

  const handler = (e) => {
    e.preventDefault()
    getForm2Info(tempLine1, tempLine2, tempCity, tempState, tempZipcode, tempPhoneNumber)
    toggle23()
  }

  return (
    <form onSubmit={(e) => {handler(e)}}>
      <label>
        Address
        <p/>
        <input type="text" placeholder="Line1" value={tempLine1} onChange={(e) => setTempLine1(e.target.value)}/>
        <p/>
        <input type="text" placeholder="Line2" value={tempLine2} onChange={(e) => setTempLine2(e.target.value)}/>
        <p/>
        <input type="text" placeholder="City" value={tempCity} onChange={(e) => setTempCity(e.target.value)}/>
        <p/>
        <input type="text" placeholder="State" value={tempState} onChange={(e) => setTempState(e.target.value)}/>
        <p/>
        <input type="text" placeholder="Zipcode" value={tempZipcode} onChange={(e) => setTempZipcode(e.target.value)}/>
        <p/>
        <input type="text" placeholder="Phone Number" value={tempPhoneNumber} onChange={(e) => setTempPhoneNumber(e.target.value)}/>
        <p/>
        <input type="submit" value="submit"/>
      </label>
    </form>
  )
}

export default Form2;