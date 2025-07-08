Forex Alchemist Payment Gateway

https://via.placeholder.com/800x400?text=Forex+Alchemist+Payment+Page

A responsive payment gateway for Forex Alchemist that supports multiple payment methods including bank transfers and cryptocurrency payments.
Features

    Multiple Payment Options:

        Naira Bank Transfer (OPay)

        Bitcoin (BTC/USDT)

        Ethereum (ETH)

    Dynamic Amount Calculation:

        Automatic conversion between USD and Naira

        Crypto amounts calculated based on current rates

    Interactive UI:

        Tab-based payment method selection

        Animated transitions between payment methods

        Responsive design for all devices

    Payment Confirmation Flow:

        Clear instructions for each payment method

        Confirmation button with processing state

        Success message display

Installation

    Clone the repository:
    bash

    git clone https://github.com/yourusername/forex-alchemist-payment.git

    Open the Forex.html file in your browser.

Usage

    Select a plan (Basic, Intermediate, or VIP)

    Choose your preferred payment method

    Follow the on-screen instructions for your selected payment method

    Click "I've Made the Payment" after completing the transaction

Configuration

The payment page can be configured by modifying the following constants in the JavaScript:
javascript

// Exchange rates (update these as needed)
const EXCHANGE_RATE = 1440; // USD to Naira
const BTC_RATE = 42000;     // BTC to USD
const ETH_RATE = 2800;      // ETH to USD

// Plan information
const planInfo = {
    'basic': { 
        name: 'Basic Plan', 
        duration: '1 Month', 
        price: 80,
        features: ['Daily signals', 'Basic training', 'Email support']
    },
    // ... other plans
};

Payment Details
Bank Transfer (OPay)

    Bank Name: OPay

    Account Number: 9022552471

    Account Name: Destiny Aituagboghiomwan

Cryptocurrency

    BTC Address: bc1qq5r8plutef5yx7c2zmesv0t6nqa5vzgq235k8f

    ETH Address: 0x70fF44BB08020A164B74D8D235a32Ba08D87812b

Support

For any issues with payments, please contact:

    Email: detea5050@gmail.com

License

This project is licensed under the MIT License.