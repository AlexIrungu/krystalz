import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { X, Phone } from 'lucide-react';

const MpesaPayment = ({ amount, onSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const CONSUMER_KEY = "AEBDzgRcdGi5zKL68wOXR0DPZWlZ7wO14qHaNWtTPXnAiPfU";
  const CONSUMER_SECRET = "jp2790gN2mT4jGD7ZFjUWy3FcJiSNvUJQLYGVMITvyBxgsWjJ2ShGiltcfmSGf";
  const SHORTCODE = "N/A"; // Your business shortcode

  const handleMpesaPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
     // First, get the access token
     const auth = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa(CONSUMER_KEY + ":" + CONSUMER_SECRET)
      }
    });

    const { access_token } = await auth.json();

    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    
    // Make STK Push request
    const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        BusinessShortCode: SHORTCODE,
        Password: "", // Base64 encoded string of shortcode + passkey + timestamp
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: "https://your-callback-url.com/callback",
        AccountReference: "Luna Shop",
        TransactionDesc: "Payment for items" 
      })
    });

    const data = await response.json();

    if (data.ResponseCode === "0") {
      // Success - STK push sent
      onSuccess();
    } else {
      setError('Failed to initiate payment. Please try again.');
    }
  } catch (err) {
    console.error('Payment error:', err);
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

const formatPhoneNumber = (input) => {
  let number = input.replace(/\D/g, '');
  // Ensure number starts with 254
  if (!number.startsWith('254') && number.startsWith('0')) {
    number = '254' + number.slice(1);
  } else if (!number.startsWith('254')) {
    number = '254' + number;
  }
  return number;
};

const handlePhoneChange = (e) => {
  const formatted = formatPhoneNumber(e.target.value);
  setPhoneNumber(formatted);
};


  return (
    <div className="p-4">
      <form onSubmit={handleMpesaPayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            M-Pesa Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="254XXXXXXXXX"
              className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              pattern="254[0-9]{9}"
              title="Please enter a valid Safaricom number starting with 254"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Format: 254XXXXXXXXX</p>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Pay with M-Pesa'}
        </button>
      </form>
    </div>
  );
};

const Checkout = ({ totalAmount, onPaymentSuccess, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  // Handler for the close button
  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  // Handler for backdrop clicks
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="max-w-lg w-full bg-white rounded-lg shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close checkout"
        >
          <X size={24} className="text-gray-500 hover:text-gray-700" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Complete your purchase</h2>
          <div className="mb-6">
            <p className="text-lg font-medium text-gray-700">
              Total Amount: KSH {totalAmount.toFixed(2)}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex-1 py-2 px-4 rounded-lg border ${
                  paymentMethod === 'mpesa'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300'
                }`}
              >
                M-Pesa
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`flex-1 py-2 px-4 rounded-lg border ${
                  paymentMethod === 'paypal'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300'
                }`}
              >
                PayPal
              </button>
            </div>
          </div>

          {paymentMethod === 'mpesa' ? (
            <MpesaPayment amount={totalAmount} onSuccess={onPaymentSuccess} />
          ) : (
            <PayPalScriptProvider options={{ "client-id": "Ac0u-o6lpGGw7_E0ZYmBCXWNRN-LsFksMPRYxlRHwicYAfCC2oObngl6rC0bLlpbyboehVvFhFossFRW" }}>
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
                    onPaymentSuccess();
                    handleClose();
                  });
                }}
              />
            </PayPalScriptProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;