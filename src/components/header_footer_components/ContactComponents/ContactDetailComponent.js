import React, { useState } from 'react';
import ContactForm, { FormRes } from 'contact-form-hexipi';
// import Form from 'customisable-contact-form'
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
import './ContactDetail.css'

const ContactDetailComponent = () => {
    const [formSubmitResult, setFormSubmitResult] = useState(FormRes.NONE);

    const onSubmit = formData => {
        //Use to call your backend/API functions (or anything else you need)
        //to send your form data.

        alert(`Form Data: ${JSON.stringify(formData)}`);
        setFormSubmitResult(FormRes.OK);
    };

    //Sets the state of the "formSubmitResult" to the default so that
    //the form could be displayed again
    const formSubmitResultReset = () => setFormSubmitResult(FormRes.NONE);

    return(
        <>
        {/* <Form>
            <Heading title={'Contact Us'}/>
            <FirstName/>
            <LastName/>
            <Email/>
            <Message/>
            <SubmitButton buttonTitle={'Send'}/>
        </Form> */}
        <ContactForm
                        submitMethod="post"

                        formData={{
                            name: 'John Smith', 
                            email: 'megaalpha200@gmail.com', 
                            phone_number: '4095555555', 
                            message: 'Testing 1,2,3...'
                        }}

                        email="info@example.com"

                    //(EITHER OR, BUT NOT BOTH!)
                        tel="+18005555555"
                    //OR
                        telWithCountryCode={["8005555555", "US"]}

                        socialMediaLinks={[
                            //Facebook link
                            "https://www.facebook.com/HexiPi.Web.Dev",

                            //Instagram Link
                            "https://instagram.com/hexipi",

                            //YouTube link
                            "https://www.youtube.com/channel/UCxJUbbqJ_3hpaL53vn2EFVA",

                            //Website Link
                            "https://hexipi.com/"

                            //...Or anything you can think of!
                        ]}
                        onSubmitCallback={onSubmit}
                        formSubmitResult={formSubmitResult}
                        formSubmitResultReset={formSubmitResultReset}
                        backgroundColor="#270941ec"
                        autoFormatPhoneNumber={
                            { shouldFormat: true, countryCode: 'US' }
                        }
                    />
        </>
    )
}

export default ContactDetailComponent;