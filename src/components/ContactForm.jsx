import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
function ContactForm() {
  const [state, handleSubmit] = useForm('mjvlpwpk');
  if (state.succeeded) {
    return <p>Thanks for contact me! Soon I will be reach you</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='full-name'>Full Name</label>
      <input
        type='text'
        name='name'
        id='full-name'
        placeholder='First and Last'
        required=''
      />
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='email@domain.tld'
        required=''
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        placeholder='Please leave the message here'
        required=''
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
