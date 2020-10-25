import React,{useState} from 'react';
import { render } from 'react-dom';
import Images from './Images'

function Form(props) {

    const [validation, setValidation] = useState({
        firstNameValidError: "",
        lastNameValidError: "",
        emailValidError: "",
        phoneValidError: "",
        firstNameValid: false,
        lastNameValid: false,
        emailValid: false,
        phoneValid: false
    })

    const [details , setDetails] = useState({
        firstName:"" , lastName:"" , email:"" , phone:""
    })

    const firstNameVal = (e) => {
        let reg = /^[\sa-zA-Zא-ת]+$/;
        let value = e.target.value;
        setDetails({...details , firstName: value});
        if (value == "")
            setValidation({ ...validation, firstNameValidError: "על השם אסור להיות ריק", firstNameValid: false })
        else if (value.length < 2)
            setValidation({ ...validation, firstNameValidError: "על השם להיות בעל יותר מ-2 אותיות", firstNameValid: false })
        else if (!reg.test(value))
            setValidation({ ...validation, firstNameValidError: "על השם להכיל אותיות בלבד", firstNameValid: false })
        else setValidation({ ...validation, firstNameValidError: "", firstNameValid: true })
    }
    const lastNameVal = (e) => {
        let reg = /^[\sa-zA-Zא-ת]+$/;
        let value = e.target.value;
        setDetails({...details , lastName: value});
        if (value == "")
            setValidation({ ...validation, lastNameValidError: "על שם המשפחה אסור להיות ריק", lastNameValid: false })
        else if (value.length < 2)
            setValidation({ ...validation, lastNameValidError: "על שם המשפחה להיות בעל יותר מ-2 אותיות", lastNameValid: false })
        else if (!reg.test(value))
            setValidation({ ...validation, lastNameValidError: "על שם המשפחה להכיל אותיות בלבד", lastNameValid: false })
        else setValidation({ ...validation, lastNameValidError: "", lastNameValid: true })
    }
    const emailVal = (e) => {
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let value = e.target.value;
        setDetails({...details , email: value});
        if (value == "")
            setValidation({ ...validation, emailValidError: "על המייל אסור להיות ריק", emailValid: false })
        else if (!reg.test(value))
            setValidation({ ...validation, emailValidError: "אנא הכנס מייל תקין", emailValid: false })
        else setValidation({ ...validation, emailValidError: "", emailValid: true })
    }
    const phoneVal = (e) => {
        let reg = /^0\d([\d]{0,1})([-]{0,1})\d{8}$/;
        let value = e.target.value;
        setDetails({...details , phone: value});
        if (value == "")
            setValidation({ ...validation, phoneValidError: "על הפלאפון אסור להיות ריק", phoneValid: false })
        else if (!reg.test(value))
            setValidation({ ...validation, phoneValidError: "אנא הכנס מספר פלאפון תקין", phoneValid: false })
        else setValidation({ ...validation, phoneValidError: "", phoneValid: true })
    }
    const submitForm = (e) => {
        e.preventDefault();
        let data = {
            titleProdoct: props.location.state.item.title,
            priceProduct: props.location.state.item.price,
            userFirsName: details.firstName,
            userLastName: details.lastName,
            userEmail: details.email,
            userPhone: details.phone
        }
        if (validation.firstNameValid == true && validation.lastNameValid == true && validation.emailValid == true && validation.phoneValid == true) {
            fetch('http://localhost:3001', {
                method: 'post',
                body: JSON.stringify(data)
            }).then(function (res) {
                return res.json();
            }).then(function (res) {
            });

        }
        alert('הפרטים שלך נשלחו אלינו בהצלחה ')
    }

return(
    <div >
        <div  style={{textAlign:"center"} }>
        <h1 className="GlabalTitle" >Best Product</h1>
            </div>
            <br/>
            <div className="row justify-content-center ">
            <form  className="Form" onSubmit={submitForm} >
              <h4 style={{float:"right"}} >:הכנס את פרטיך</h4> 
              <br/>  <br/>
                    <div >
                    <label  className= "FormLabel">:שם פרטי</label>
                    <input  dir="rtl" value={details.firstName}  className="FormInput" type="text"  onChange={firstNameVal} />
                    <div className="validationError" >{validation.firstNameValidError}</div>
                    </div>       
                    <br/>
                    <div >
                    <label  className= "FormLabel">:שם משפחה</label>
                    <input  dir="rtl" value={details.lastName}  className= "FormInput" type="text" onChange={lastNameVal} />
                    <div className="validationError">{validation.lastNameValidError}</div>
                    </div >   
                    <br/>    
                    <div >
                    <label  className= "FormLabel" >:מספר טלפון</label>
                    <input value={details.phone} dir="rtl" className= "FormInput" type="phone" onChange={phoneVal} />
                    <div className="validationError">{validation.phoneValidError}</div>
                    </div>   
                    <br/>    
                    <div>
                    <label  className= "FormLabel">:אימייל</label>
                    <input value={details.email} className= "FormInput" type="Email"  onChange={emailVal}/>
                    <div className="validationError">{validation.emailValidError}</div>
                    </div>
                    <br/>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block btnSubmit">שלח</button>
                    </div>
            </form>
            
            </div>
        
    </div>

) }

export default Form;