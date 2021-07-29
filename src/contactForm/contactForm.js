import React, {useState, useRef} from 'react'

export const ContactForm = () =>{
    const myFormRef = useRef(null)
    const [errors, setErrors] = useState({})
    const [isPasswordReady, setIsPasswordReady] = useState(false)
    const [passwordData, setPasswordData] = useState({
        password : '',
        passwordConfirm : ''
    })

    const handleInputChange = (event)=>{
        const val = event.target.value ? event.target.value : ''
        const name = event.target.name

        if (name == 'passwordConfirm') {
            const currentPw = passwordData.password
            if (currentPw !== val){
                setIsPasswordReady(false)
                setErrors( {passwordConfirm : 'Passwords must match!!'})
            }else{
                if (currentPw.length > 1){
                    setIsPasswordReady(true)
                    setErrors( {passwordConfirm : ''})
                }
            }

        }
        setPasswordData(prevState =>{
            let newData = {...passwordData}
            newData[name] = val
            return newData    
        })
    }

    const handleSubmit = (event) =>{
        if (event) {event.preventDefault()}
        if (myFormRef && isPasswordReady){
            const fd = new FormData(myFormRef.current)
            const fdObject = Object.fromEntries(fd)
            const jsonData = JSON.stringify(fdObject)
            const headers = {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
            const options = {
                method : 'POST',
                headers : headers,
                body : jsonData,
            }
            const url = "https://httpbin.org/anything"

            fetch(url, options).then(response => response.json()).
            then(x => console.log(x)).catch(err => console.log(err))

            //console.log(myFormRef.current, fdObject)
        }

    }

    return <form ref = {myFormRef} onSubmit = {handleSubmit}>  
        <p> {errors.passwordConfirm}</p>

        <input type= 'text' name = 'firstName' onChange = {handleInputChange} 
            placeholder= 'Fisrt name'/>
        <input type= 'text' name = 'lastName' onChange = {handleInputChange} 
            placeholder= 'Last name'/>

        <input type= 'password' required name = 'password' onChange = {handleInputChange} 
            value = {passwordData.password} placeholder= 'password'/>
        <input type= 'password' required  name = 'passwordConfirm' onChange = {handleInputChange} 
            value = {passwordData.passwordConfirm} placeholder= 'Confirm password'/>

        <button >Send</button>
    </form>
}