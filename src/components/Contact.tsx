import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import contactIllustration from '../assets/images/contact_illustration.png';
import '../assets/styles/Contact.scss';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [subjectError, setSubjectError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setSubjectError(subject === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      try {
        const response = await fetch('http://localhost:5000/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('SUCCESS!', data);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact-left">
            <h1>Let's talk about everything!</h1>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <img src={contactIllustration} alt="Contact Illustration" className="contact-img" />
          </div>
          <div className="contact-right">
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className='contact-form'
            >
              <TextField
                required
                id="name-required"
                label="Your name *"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="email-required"
                label="Email *"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="subject-required"
                label="Subject *"
                placeholder="What is this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={subjectError}
                helperText={subjectError ? "Please enter a subject" : ""}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="message-required"
                label="Write your message *"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={sendEmail}
                className="send-button"
              >
                Send Message
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;