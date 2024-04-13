import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Superior Science Academy</h1>
      <p className="text-lg mb-4 text-center">Have a question or want to learn more about our programs? We'd love to hear from you!</p>
      <div className="flex flex-col md:flex-row mt-6">
        <div className="mt-4 md:mt-0 md:pl-4 pl-10">
          <h2 className="text-xl font-semibold mb-2">Our Information</h2>
          <p className="mb-2"><span className="font-semibold">Address:</span> Daulatpur Sindh pakistan 67190</p>
          <p className="mb-2"><span className="font-semibold">Phone:</span> 
0301 3998955</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> <a href="https://mail.google.com/mail/u/0/#search/arbaba314%40gmail.com" target='_blank' className="text-blue-500">arbaba314@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
