
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const RazorpayOption = () => {
  return (
    <Card className="border-psyco-green-muted/30">
      <CardContent className="pt-6 text-white">
        <div className="text-center">
          <p className="mb-4">
            You'll be redirected to Razorpay's secure payment gateway to complete your payment.
          </p>
          <div className="flex justify-center mb-4">
            <img 
              src="https://razorpay.com/assets/razorpay-glyph.svg" 
              alt="Razorpay" 
              className="h-16"
            />
          </div>
          <p className="text-sm text-gray-400">
            Razorpay supports credit/debit cards, UPI, wallets, and net banking
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RazorpayOption;
