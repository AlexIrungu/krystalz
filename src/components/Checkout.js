import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';



const Checkout = ({ totalAmount, onPaymentSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Ac0u-o6lpGGw7_E0ZYmBCXWNRN-LsFksMPRYxlRHwicYAfCC2oObngl6rC0bLlpbyboehVvFhFossFRW" }}>
      <div className="max-w-lg mx-auto bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Complete your purchase</h2>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalAmount.toFixed(2),
                },
              }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
              // Call the onPaymentSuccess function passed from the parent component
              onPaymentSuccess();
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;