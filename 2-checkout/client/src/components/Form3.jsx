const {useState} = require("react")

 const Form3 = ({toggle3summary, getForm3Info}) => {
  const [temp1, setTemp1] = useState('')
  const [temp2, setTemp2] = useState('')
  const [temp3, setTemp3] = useState('')
  const [temp4, setTemp4] = useState('')

  const handler = (e) => {
    e.preventDefault()
    getForm3Info(temp1, temp2, temp3, temp4)
    toggle3summary()
  }

  return (
    <form onSubmit={(e) => {handler(e)}}>
      <input type="text" placeholder="CreditCard#" value={temp1} onChange={(e) => setTemp1(e.target.value)}/>
      <p/>
      <input type="text" placeholder="Expiration Date" value={temp2} onChange={(e) => setTemp2(e.target.value)}/>
      <p/>
      <input type="text" placeholder="CVV" value={temp3} onChange={(e) => setTemp3(e.target.value)}/>
      <p/>
      <input type="text" placeholder="Billing Zipcode" value={temp4} onChange={(e) => setTemp4(e.target.value)}/>
      <p/>
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form3;