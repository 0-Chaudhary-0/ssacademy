import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const TermsAndPolicy = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(30);
    setProgress(100);
  }, []);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 md:px-0 py-6">
      <div className="max-w-xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6">Terms & Policy</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-gray-700">
            Welcome to Our Superior Science Academy! By using our services, you
            agree to comply with and be bound by the following terms and
            conditions of use. Please review the terms carefully. If you do not
            agree to these terms, you should not use our services.
          </p>
          {/* Add your specific terms of service content here */}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-gray-700">
            Protecting your privacy is important to us. Our Privacy Policy
            outlines how your personal information is collected, used, and
            protected when you use our services. By using our services, you
            consent to the collection and use of your information as outlined
            in this policy.
          </p>
          {/* Add your specific privacy policy content here */}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Refund Policy</h2>
          <p className="text-gray-700">
            We strive to provide the best educational experience possible. If
            you are not satisfied with our services, please contact us
            immediately to discuss your concerns. Refunds may be issued under
            certain circumstances in accordance with our Refund Policy.
          </p>
          {/* Add your specific refund policy content here */}
        </section>
      </div>
    </div>
    </>
  );
};

export default TermsAndPolicy;
