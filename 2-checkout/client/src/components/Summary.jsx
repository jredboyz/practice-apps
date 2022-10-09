const {useState} = require("react")

 const Summary = (props) => {
  const [name, email, password, address, city, state, zipcode, phoneNumber, creditCard, expirationDate, cvv, billingZip] = props.props
  return (
    <div>
        Summary:<br/>
        Name: {name}<br/>
        Email: {email}<br/>
        Password: {password}<br/>
        Address: {address}<br/>
        City: {city}<br/>
        State: {state}<br/>
        Zipcode: {zipcode}<br/>
        Phone Number: {phoneNumber}<br/>
        Credit Card #: {creditCard}<br/>
        Expiration Date: {expirationDate}<br/>
        CVV: {cvv}<br/>
        Billing Zipcode: {billingZip}<br/>
        IF INPUT IS WRONG, REFRESH PAGE AND START OVER! THIS AINT AMAZON...<br/>
      </div>
  )
}

export default Summary;