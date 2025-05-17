import React from "react";

const PaymentInfoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Payment Information</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn more about our payment process and policies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism p-6 text-center">
            <h3 className="text-xl font-medium text-white mb-4">Secure Payments</h3>
            <p className="text-gray-300">
              All payments are processed securely using industry-standard encryption.
            </p>
          </div>
          
          <div className="glassmorphism p-6 text-center">
            <h3 className="text-xl font-medium text-white mb-4">Refund Policy</h3>
            <p className="text-gray-300">
              Cancellations made 30+ days in advance receive a full refund.
            </p>
          </div>
          
          <div className="glassmorphism p-6 text-center">
            <h3 className="text-xl font-medium text-white mb-4">Support</h3>
            <p className="text-gray-300">
              Need help with your payment? Contact our support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfoSection;
