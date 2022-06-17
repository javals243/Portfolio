import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonEnv, Container, Form, InputL, InputS, TextArea } from './ContactStyle';

const Contact = () => {
   const [checkedItems, setCheckedItems] = useState({});
   const recaptchaKey = "6LdQdAwgAAAAADYwUNsX1OBKYNT5gjf11IaSbSBu";
   const recaptchaRef = useRef();
   const [recaptchaToken, setReCaptchaToken] = useState();
  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };
  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };
  return (
    <Section>
    <Container>
     
      <SectionTitle>CONTACT</SectionTitle>
      <Form>
        <InputS type="text" placeholder="Name" />
        <InputS type="text" placeholder="Phone" />
        <InputL type="text" placeholder="Email" />
        <InputL type="text" placeholder="Subject" />
        
        <TextArea
          type="text"
          rows={6}
          placeholder="Message"
        />
         <ReCAPTCHA
            ref={recaptchaRef}
            style={{ marginTop: '10px',
                width: '100%'}}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
        <div style={{ width:'100%', marginTop:'10px',display:'flex',justifyContent:'center',  alignItems:'center'}}>
        <Button >Envoyer</Button>
        </div>
         
      </Form>

     
    </Container>
    </Section>
  );
};

export default Contact;
