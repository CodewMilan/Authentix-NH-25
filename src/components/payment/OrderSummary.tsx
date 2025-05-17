import React from "react";
import { CheckCircle } from "lucide-react";

const OrderSummary = () => {
  return (
    <div className="glassmorphism p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-psyco-green-muted/20 pb-4">
          <div className="text-white">
            <h3 className="font-medium">Coldplay Concert VIP Tickets</h3>
            <p className="text-gray-400 text-sm">A34</p>
          </div>
          <span className="text-white">4,000 ₹</span>
        </div>
        
  
        
        <div className="flex justify-between items-center border-b border-psyco-green-muted/20 pb-4">
          <div className="text-white">
            <h3 className="font-medium">Platform Fee</h3>
            <p className="text-gray-400 text-sm"></p>
          </div>
          <span className="text-white">200 ₹</span>
        </div>
        
        <div className="flex justify-between items-center pb-4">
          <span className="text-gray-300">Subtotal</span>
          <span className="text-white">4200 ₹</span>
        </div>
        
        <div className="flex justify-between items-center pb-4">
          <span className="text-gray-300">18% GST</span>
          <span className="text-white">756 ₹</span>
        </div>
        
        <div className="flex justify-between items-center border-t border-psyco-green-muted/20 pt-4">
          <span className="text-lg font-medium text-white">Total</span>
          <span className="text-xl font-bold text-psyco-green-DEFAULT">4956 ₹</span>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-psyco-black-DEFAULT rounded-lg border border-psyco-green-muted/20">
        <div className="flex items-center gap-2 text-white">
          <CheckCircle size={18} className="text-psyco-green-DEFAULT" />
          <span>Secure Payment Processing</span>
        </div>
        <div className="flex items-center gap-2 text-white mt-2">
          <CheckCircle size={18} className="text-psyco-green-DEFAULT" />
          <span>24/7 Customer Support</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
