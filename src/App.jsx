import { useState } from "react"
import LearningApi from "./component/UserForm"

function App() {

  const [user,setUser]= useState({})

  return (
   
     <>
     <LearningApi></LearningApi>
     {/* <UserForm setUser={setUser} ></UserForm>
     <MyComponent user2={user } /> */}

     {/* <Counter></Counter> */}

     {/* <Person firstName = {"Flogert"} lastName = " Ciku" age ={23} hColor = {"black"}></Person>
     <Person firstName = {"Flogert"} lastName = " Ciku" hColor = {"black"}></Person>
    <h2>this is a h2  </h2>
    <MySecondComponent valueA = {2} valueB={3} valueC = {"Flogert"}/>
    
    <MySecondComponent valueA = {5} valueB={7}  /> */}
     {/* tst */}
    </>
  )
}

export default App