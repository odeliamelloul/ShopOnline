import React, { useState } from "react";


const Form = (props) => {
  const flag=false;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback("template_lshur4o", {
      name:name,
      phone:phone,
      email:email,
      message:message,
      product:props.location.data && props.location.data.map((item)=>item.title),
    },true);
    sendFeedback("template_lohpcks", {
      name:name,
      email:email,
      product:props.location.data && props.location.data.map((item)=>item.title),
      price:props.location.data && props.location.data.reduce((x,y) => parseInt(x)+ parseInt(y.price),0),
    },false);
  };

  const sendFeedback = (templateId, variables,flag) => {
    window.emailjs.send("service_j3vmcyj", templateId, variables) .then((res) => {
      if(flag)
      {alert('הפרטים שלך נשלחו אלינו בהצלחה')}

        console.log('success !');
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
<div className="Formulaire">
    <form className="contact-form">
      <h2>Best Product</h2>
      <h4>הכנס פרטיך ונחזור אליך בהקדם</h4>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="שם מלא"
          value={name}
          autoComplete="off"
          dir="rtl"
        />

        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="טלפון"
          value={phone}
          dir="rtl"
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
          dir="rtl"
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="מייל"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="אם יש לך בקשה מסויימת כתוב אותה כאן"
          value={message}
          dir="rtl"
        />
 </div>

      <input
        className="button"
        type="button"
        value="שליחה"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>

</div>
  );
};

export default Form;