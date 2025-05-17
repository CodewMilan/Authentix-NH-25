import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentForm from "@/components/payment/PaymentForm";
import OrderSummary from "@/components/payment/OrderSummary";
import PaymentInfoSection from "@/components/payment/PaymentInfoSection";

const Payment = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Payment</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Secure payment processing for our services
            </p>
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="flex items-center gap-2 animate-fade-in animation-delay-200"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment Form Component */}
            <PaymentForm />

            {/* Order Summary Component */}
            <OrderSummary />
          </div>
        </div>
      </section>
      
      {/* Payment Info Section */}
      <PaymentInfoSection />
    </div>
  );
};

export default Payment;