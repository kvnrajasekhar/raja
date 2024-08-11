import React from 'react';

const ContactTemplate = ({ email, subject, message }) => (
  <div>
    <p>You have a new contact form submission</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);

export default ContactTemplateTemplate;
