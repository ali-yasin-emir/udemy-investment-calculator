"use client"

const Investment = ({userInputObject, onChange}) => {

//   const [initialInvestment, setInitialInvestment] = useState("")
//   const [annualInvestment, setAnnualInvestment] = useState("")
//   const [expectedReturn, setExpectedReturn] = useState("")
//   const [duration, setDuration] = useState("")

  
// const handleChangeInitialInvestment = (e) => {
//   setInitialInvestment(e.target.value)
// }

// const handleChangeAnnualInvestment = (e) => {
//   setAnnualInvestment(e.target.value)
// }

// const handleChangeExpectedReturn = (e) => {
//   setExpectedReturn(e.target.value)
// }
// const handleChangeDuration = (e) => {
//   setDuration(e.target.value)
// }

// const allFunctions = () => {

// }


  return (
    <div className="w-full rounded-lg h-64 bg-gradient-to-t from-[#307e6c] to-[#2b996d] flex flex-col justify-center items-center mb-12">
      <div className="input-group">
        <div id="user-input">
            <label htmlFor="">INITIAL INVESTMENT</label>
            <input value={userInputObject.initialInvestment} onChange={(e)=> onChange("initialInvestment", e.target.value)} type="number" />
        </div>
        <div id="user-input">
            <label htmlFor="">ANNUAL INVESTMENT</label>
            <input value={userInputObject.annualInvestment} onChange={(e)=> onChange("annualInvestment", e.target.value)} type="number" />
        </div>
        </div>
        <div className="input-group">
        <div id="user-input">
            <label htmlFor="">EXPECTED RETURN</label>
            <input value={userInputObject.expectedReturn} onChange={(e)=> onChange("expectedReturn", e.target.value)} type="number" />
        </div>
        <div id="user-input">
            <label htmlFor="">DURATION</label>
            <input value={userInputObject.duration} onChange={(e)=> onChange("duration", e.target.value)} type="number" />
        </div>
        </div>
      </div>

  )
}

export default Investment