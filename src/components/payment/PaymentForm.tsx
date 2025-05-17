import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import PaymentOptions from "./PaymentOptions";
import CreditCardForm from "./CreditCardForm";
import RazorpayOption from "./RazorpayOption";
import CryptoOption from "./CryptoOption";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>("credit");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      saveCard: false,
      paymentType: "credit",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Payment data submitted:", data);
    console.log("Payment method used:", data.paymentType);
    // Here you would integrate with actual payment processors
  };

  // Handle payment method change and update the form value
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    form.setValue("paymentType", value);
  };

  return (
    <div className="glassmorphism p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <CheckCircle className="text-psyco-green-DEFAULT" />
        Payment Methods
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PaymentOptions 
            paymentMethod={paymentMethod} 
            onPaymentMethodChange={handlePaymentMethodChange} 
            form={form}
          />

          {paymentMethod === "credit" && <CreditCardForm form={form} />}
          {paymentMethod === "razorpay" && <RazorpayOption />}
          {paymentMethod === "crypto" && <CryptoOption />}

          <Button 
            type="submit"
            className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white py-3 flex justify-center items-center gap-2 btn-glow"
          >
            {paymentMethod === "razorpay" ? "Proceed to Razorpay" : "Pay Now"}
            <CheckCircle size={18} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
