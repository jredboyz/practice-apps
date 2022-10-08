import { useState } from "react";
import { render } from "react-dom";


const App = () => {
  const [togForm1, setTogForm1] = useState(false);
  const [togForm2, setTogForm2] = useState(false);
  const [togForm3, setTogForm3] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [State, setState] = useState('')
  const [Zipcode, setZipcode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [CreditCard, setCreditCard] = useState('')
  const [ExpirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingZip, setBillingZipcode] = useState('')

  const getForm1Info = (input1, input2, input3) => {
    console.log(input1, input2, input3, 'in getForm1Info')
    setName(input1)
    setEmail(input2)
    setPassword(input3)
  }


  const toggle12 = () => {
    setTogForm1(!togForm1)
    setTogForm2(!togForm2)
  }
  const toggle23 = () => {
    setTogForm2(!togForm2)
    setTogForm3(!togForm3)
  }


  return (
    <div>
      <p>Hello, World!</p>
      <button onClick={() => setTogForm1(!togForm1)}>Checkout</button>
      {togForm1 ? <Form1 toggle12={toggle12} getForm1Info={getForm1Info}/> : null}
      {togForm2 ? <Form2 toggle23={toggle23}/> : null}
      {togForm3 ? <Form3 /> : null}
    </div>
  );
}

const Form1 = ({toggle12, getForm1Info}) => {
  const [tempName, setTempName] = useState('')
  const [tempEmail, setTempEmail] = useState('')
  const [tempPassword, setTempPassword] = useState('')

    // const handler = (e) => {
    //   e.preventDefault()
    //   getForm1Info(tempName, tempEmail, tempPassword)
    //   toggle12()
    // }


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      getForm1Info(tempName, tempEmail, tempPassword)
      toggle12()
    }}>
      <input type="text" placeholder="Name" value={tempName} onChange={(e) => setTempName(e.target.value)}/>
      <p/>
      <input type="text" placeholder="Email" value={tempEmail} onChange={(e) => setTempEmail(e.target.value)}/>
      <p/>
      <input type="text" placeholder="password" value={tempPassword} onChange={(e) => setTempPassword(e.target.value)}/>
      <p/>
      <input type="submit" value="submit" />
    </form>
  )
}

const Form2 = ({toggle23}) => {
  return (
    <form>
      <label>
        Address
        <p/>
        <input type="text" placeholder="Line1"/>
        <p/>
        <input type="text" placeholder="Line2"/>
        <p/>
        <input type="text" placeholder="City"/>
        <p/>
        <input type="text" placeholder="State"/>
        <p/>
        <input type="text" placeholder="Zipcode"/>
        <p/>
        <input type="text" placeholder="Phone Number"/>
        <p/>
        <input type="submit" value="submit" onClick={() => toggle23()}/>
      </label>
    </form>
  )
}

const Form3 = () => {
  return (
    <form>
      <input type="text" placeholder="CreditCard#"/>
      <p/>
      <input type="text" placeholder="Expiration Date"/>
      <p/>
      <input type="text" placeholder="CVV"/>
      <p/>
      <input type="text" placeholder="Billing Zipcode"/>
      <p/>
      <input type="submit" value="submit" />
    </form>
  )
}

render(<App/>, document.getElementById("root"));
