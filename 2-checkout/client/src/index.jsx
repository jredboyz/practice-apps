import { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import Form1 from "./components/Form1.jsx";
import Form2 from "./components/Form2.jsx";
import Form3 from "./components/Form3.jsx";
import Summary from "./components/Summary.jsx";


const App = () => {
  const [togForm1, setTogForm1] = useState(false);
  const [togForm2, setTogForm2] = useState(false);
  const [togForm3, setTogForm3] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingZip, setBillingZipcode] = useState('')
  const [showSummary, setShowSummary] = useState(false);

  const props = [name, email, password, address, city, state, zipcode, phoneNumber, creditCard, expirationDate, cvv, billingZip]

  const getForm1Info = (input1, input2, input3) => {
    setName(input1)
    setEmail(input2)
    setPassword(input3)
  }

  const getForm2Info = (input4, input5, input6, input7, input8, input9) => {
    setAddress(input4 + ' ' + input5)
    setCity(input6)
    setState(input7)
    setZipcode(input8)
    setPhoneNumber(input9)
  }

  const getForm3Info = (input10, input11, input12, input13) => {
    setCreditCard(input10)
    setExpirationDate(input11)
    setCvv(input12)
    setBillingZipcode(input13)
  }

  const toggle12 = () => {
    setTogForm1(!togForm1)
    setTogForm2(!togForm2)
  }

  const toggle23 = () => {
    setTogForm2(!togForm2)
    setTogForm3(!togForm3)
  }

  const toggle3summary = () => {
    setTogForm3(!togForm3)
    setShowSummary(!showSummary)
  }

  const postHandler = (e) => {
    e.preventDefault()
    console.log('working')
    axios.post('http://localhost:3000/checkout', {
      data: {
      name,
      email,
      password,
      address,
      city,
      state,
      zipcode,
      phoneNumber,
      creditCard,
      expirationDate,
      cvv,
      billingZip
    }})
    .then()
    .catch((err) => console.log('ERROR IN POST REQUEST', err))
    setShowSummary(!showSummary);
  }

  return (
    <div>
      <p>Checkout Please!</p>
      {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
      <button onClick={() => setTogForm1(!togForm1)}>Checkout</button>
      {/* <button onClick={() => console.log(name, email, password, address, city, state, zipcode, phoneNumber, creditCard, expirationDate, cvv, billingZip)}>Check State</button> */}
      {togForm1 ? <Form1 toggle12={toggle12} getForm1Info={getForm1Info}/> : null}
      {togForm2 ? <Form2 toggle23={toggle23} getForm2Info={getForm2Info}/> : null}
      {togForm3 ? <Form3 toggle3summary={toggle3summary} getForm3Info={getForm3Info}/> : null}
      {showSummary ? <><Summary props={[...props]}/>
      <button onClick={(e) => postHandler(e)}>Purchase</button></>: null}
    </div>
  );
};

render(<App/>, document.getElementById("root"));
