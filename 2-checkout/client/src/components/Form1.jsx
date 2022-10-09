const {useState} = require("react")

 const Form1 = ({toggle12, getForm1Info}) => {
  const [tempName, setTempName] = useState('')
  const [tempEmail, setTempEmail] = useState('')
  const [tempPassword, setTempPassword] = useState('')

    const handler = (e) => {
      e.preventDefault()
      getForm1Info(tempName, tempEmail, tempPassword)
      toggle12()
    }


  return (
    <form onSubmit={(e) => {handler(e)}}>
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

export default Form1;