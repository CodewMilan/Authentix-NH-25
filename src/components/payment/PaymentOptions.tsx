import React from "react";
import { CreditCard, Bitcoin, DollarSign } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

type PaymentOptionsProps = {
  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;
  form: any;
};

const PaymentOptions = ({ paymentMethod, onPaymentMethodChange, form }: PaymentOptionsProps) => {
  return (
    <div className="mb-6">
      <FormField
        control={form.control}
        name="paymentType"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <RadioGroup 
              onValueChange={onPaymentMethodChange}
              defaultValue="credit" 
              value={paymentMethod}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="glassmorphism p-4 flex items-center space-x-2 cursor-pointer border border-psyco-green-muted/30 rounded-lg hover:border-psyco-green-DEFAULT/50 transition-colors">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit" className="flex items-center gap-2 cursor-pointer w-full">
                  <CreditCard className="h-5 w-5" />
                  <span>Credit/Debit</span>
                </Label>
              </div>
              
              <div className="glassmorphism p-4 flex items-center space-x-2 cursor-pointer border border-psyco-green-muted/30 rounded-lg hover:border-psyco-green-DEFAULT/50 transition-colors">
                <RadioGroupItem value="razorpay" id="razorpay" />
                <Label htmlFor="razorpay" className="flex items-center gap-2 cursor-pointer w-full">
                  <DollarSign className="h-5 w-5" />
                  <span>Razorpay</span>
                </Label>
              </div>
              
              <div className="glassmorphism p-4 flex items-center space-x-2 cursor-pointer border border-psyco-green-muted/30 rounded-lg hover:border-psyco-green-DEFAULT/50 transition-colors">
                <RadioGroupItem value="crypto" id="crypto" />
                <Label htmlFor="crypto" className="flex items-center gap-2 cursor-pointer w-full">
                  <Bitcoin className="h-5 w-5" />
                  <span>Cryptocurrency</span>
                </Label>
              </div>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PaymentOptions;
