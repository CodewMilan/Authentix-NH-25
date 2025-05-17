import React from "react";
import { Bitcoin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CryptoOption = () => {
  return (
    <Card className="border-psyco-green-muted/30">
      <CardContent className="pt-6 text-white">
        <div className="space-y-4">
          <div className="flex justify-center gap-4 mb-4">
            <Bitcoin className="h-8 w-8 text-yellow-500" />
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029" alt="Ethereum" className="h-8 w-8" />
            <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=029" alt="USDT" className="h-8 w-8" />
          </div>
          <div className="text-center">
            <p className="mb-4">Pay with Bitcoin, Ethereum, or other major cryptocurrencies</p>
            <div className="glassmorphism p-4 rounded-lg my-4 mx-auto max-w-xs">
              <p className="text-sm text-gray-400 mb-2">Send payment to:</p>
              <p className="text-xs bg-psyco-black-DEFAULT p-2 rounded font-mono break-all">
                3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
              </p>
            </div>
            <p className="text-sm text-gray-400">
              After sending the payment, please email the transaction ID to verify your payment.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoOption;