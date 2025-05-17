import React from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type CreditCardFormProps = {
  form: any;
};

const CreditCardForm = ({ form }: CreditCardFormProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Cardholder Name</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="bg-psyco-black-DEFAULT border border-psyco-green-muted/30 text-white"
                placeholder="Full name on card"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Email</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="email"
                className="bg-psyco-black-DEFAULT border border-psyco-green-muted/30 text-white"
                placeholder="Your email address"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Card Number</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="bg-psyco-black-DEFAULT border border-psyco-green-muted/30 text-white"
                placeholder="1234 5678 9012 3456"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="expiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Expiry Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-psyco-black-DEFAULT border border-psyco-green-muted/30 text-white"
                  placeholder="MM/YY"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvc"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">CVC</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-psyco-black-DEFAULT border border-psyco-green-muted/30 text-white"
                  placeholder="123"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="saveCard"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-psyco-green-DEFAULT"
              />
            </FormControl>
            <FormLabel className="text-sm text-gray-300">
              Save this card for future payments
            </FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};

export default CreditCardForm;