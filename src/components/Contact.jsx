import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Superior Science Academy</h1>
      <p className="text-lg mb-4 text-center">Have a question or want to learn more about our programs? We'd love to hear from you!</p>
      <div className="flex flex-col md:flex-row mt-6">
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text-xl font-semibold mb-2">Feedback</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md p-2 w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-md hover:bg-blue-600">Send</button>
          </form>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4">
          <h2 className="text-xl font-semibold mb-2">Our Information</h2>
          <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street, Cityville, State, Zip Code</p>
          <p className="mb-2"><span className="font-semibold">Phone:</span> (123) 456-7890</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:info@superiorscienceacademy.com" className="text-blue-500">info@superiorscienceacademy.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
