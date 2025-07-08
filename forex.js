<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const plan = urlParams.get('plan');
        const method = urlParams.get('method') || 'bank';
        
        // Exchange rates (USD as base)
        const usdToNgn = 1440;    // 1 USD = 1440 NGN
        const btcToUsd = 42000;   // 1 BTC = 42000 USD
        const ethToUsd = 2800;    // 1 ETH = 2800 USD
        
        // Derived rates
        const btcToNgn = btcToUsd * usdToNgn;  // 1 BTC = ? NGN
        const ethToNgn = ethToUsd * usdToNgn;  // 1 ETH = ? NGN

        // Plan information
        const planInfo = {
            'basic': { 
                name: 'Basic Plan', 
                duration: '1 Month', 
                price: 80,
                displayPrice: '$80'
            },
            'intermediate': { 
                name: 'Basic to Advanced', 
                duration: '2 Months', 
                price: 150,
                displayPrice: '$150'
            },
            'vip': { 
                name: 'VIP Plan', 
                duration: '3 Months', 
                price: 250,
                displayPrice: '$250'
            }
        };

        // Payment method details
        const paymentDetails = {
            'bank': {
                title: 'Naira Bank Transfer (OPay)',
                icon: 'fas fa-university',
                html: (planData) => `
                    <div class="payment-details">
                        <div class="detail-row">
                            <span class="detail-label">Bank Name:</span>
                            <span class="detail-value">OPay</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Account Number:</span>
                            <span class="detail-value">9022552471</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Account Name:</span>
                            <span class="detail-value">Destiny Aituagboghiomwan</span>
                        </div>
                    </div>
                    <div class="amount-display">
                        <div class="currency-amount">
                            <span class="currency">USD:</span>
                            <span class="amount">$${planData.price}</span>
                        </div>
                        <div class="conversion-rate">
                            <span>1 USD ≈ ₦${usdToNgn.toLocaleString()}</span>
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <div class="currency-amount">
                            <span class="currency">NGN:</span>
                            <span class="amount">₦${(planData.price * usdToNgn).toLocaleString()}</span>
                        </div>
                    </div>
                `,
                instructions: (planData) => `
                    <ol>
                        <li>Transfer <strong>exactly ₦${(planData.price * usdToNgn).toLocaleString()}</strong></li>
                        <li>Use your <strong>full name</strong> as reference</li>
                        <li>Send proof to <a href="mailto:detea5050@gmail.com">detea5050@gmail.com</a></li>
                        <li>Confirmation email will be sent</li>
                    </ol>
                `
            },
            'crypto': {
                title: 'Crypto Payment (BTC/USDT)',
                icon: 'fab fa-bitcoin',
                html: (planData) => {
                    const btcAmount = planData.price / btcToUsd;
                    const nairaEquivalent = planData.price * usdToNgn;
                    return `
                    <div class="payment-details">
                        <div class="detail-row">
                            <span class="detail-label">Wallet Address:</span>
                            <span class="detail-value crypto-address">bc1qq5r8plutef5yx7c2zmesv0t6nqa5vzgq235k8f</span>
                        </div>
                        <div class="qr-code-container">
                            <img src="Images/Btc.jpeg" alt="BTC Wallet QR Code" class="qr-code">
                        </div>
                        <div class="amount-display crypto-amount">
                            <div class="currency-amount">
                                <span class="currency">Amount:</span>
                                <span class="amount">$${planData.price} USD</span>
                            </div>
                            <div class="currency-amount">
                                <span class="currency">NGN Equivalent:</span>
                                <span class="amount">₦${nairaEquivalent.toLocaleString()}</span>
                            </div>
                            <div class="conversion-rate">
                                <span>1 BTC ≈ ₦${btcToNgn.toLocaleString()}</span>
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <div class="currency-amount">
                                <span class="currency">Send:</span>
                                <span class="amount">${btcAmount.toFixed(6)} BTC</span>
                            </div>
                        </div>
                    </div>
                    `;
                },
                instructions: (planData) => {
                    const btcAmount = planData.price / btcToUsd;
                    const nairaEquivalent = planData.price * usdToNgn;
                    return `
                    <ol>
                        <li>Send <strong>${btcAmount.toFixed(6)} BTC</strong> (₦${nairaEquivalent.toLocaleString()} equivalent)</li>
                        <li>Include your <strong>email</strong> in transaction notes</li>
                        <li>Send transaction hash to <a href="mailto:detea5050@gmail.com">detea5050@gmail.com</a></li>
                        <li>Confirmation may take 10-30 minutes</li>
                    </ol>
                    `;
                }
            },
            'eth': {
                title: 'Ethereum (ETH) Payment',
                icon: 'fab fa-ethereum',
                html: (planData) => {
                    const ethAmount = planData.price / ethToUsd;
                    const nairaEquivalent = planData.price * usdToNgn;
                    return `
                    <div class="payment-details">
                        <div class="detail-row">
                            <span class="detail-label">Wallet Address:</span>
                            <span class="detail-value crypto-address">0x70fF44BB08020A164B74D8D235a32Ba08D87812b</span>
                        </div>
                        <div class="qr-code-container">
                            <img src="Images/Eth.jpeg" alt="ETH Wallet QR Code" class="qr-code">
                        </div>
                        <div class="amount-display crypto-amount">
                            <div class="currency-amount">
                                <span class="currency">Amount:</span>
                                <span class="amount">$${planData.price} USD</span>
                            </div>
                            <div class="currency-amount">
                                <span class="currency">NGN Equivalent:</span>
                                <span class="amount">₦${nairaEquivalent.toLocaleString()}</span>
                            </div>
                            <div class="conversion-rate">
                                <span>1 ETH ≈ ₦${ethToNgn.toLocaleString()}</span>
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <div class="currency-amount">
                                <span class="currency">Send:</span>
                                <span class="amount">${ethAmount.toFixed(5)} ETH</span>
                            </div>
                        </div>
                    </div>
                    `;
                },
                instructions: (planData) => {
                    const ethAmount = planData.price / ethToUsd;
                    const nairaEquivalent = planData.price * usdToNgn;
                    return `
                    <ol>
                        <li>Send <strong>${ethAmount.toFixed(5)} ETH</strong> (₦${nairaEquivalent.toLocaleString()} equivalent)</li>
                        <li>Include your <strong>email</strong> in transaction notes</li>
                        <li>Send transaction hash to <a href="mailto:detea5050@gmail.com">detea5050@gmail.com</a></li>
                        <li>Confirmation may take 3-15 minutes</li>
                    </ol>
                    `;
                }
            }
        };

        // Initialize page if valid plan is selected
        if (plan && planInfo[plan]) {
            const currentPlan = planInfo[plan];
            const currentMethod = paymentDetails[method];

            // Update plan info section
            document.getElementById('plan-info').innerHTML = `
                <p><strong>Plan:</strong> ${currentPlan.name}</p>
                <p><strong>Duration:</strong> ${currentPlan.duration}</p>
                <p><strong>Amount:</strong> ${currentPlan.displayPrice}</p>
            `;

            // Update payment details section
            const paymentContainer = document.getElementById('payment-details');
            paymentContainer.innerHTML = `
                <div class="payment-method active-method">
                    <h3><i class="${currentMethod.icon}"></i> ${currentMethod.title}</h3>
                    ${currentMethod.html(currentPlan)}
                    <div class="payment-instructions">
                        <h4><i class="fas fa-info-circle"></i> Instructions:</h4>
                        ${currentMethod.instructions(currentPlan)}
                    </div>
                </div>
            `;

            // Set active tab
            document.querySelectorAll('.payment-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('onclick').includes(method)) {
                    tab.classList.add('active');
                }
            });
        } else {
            // Handle invalid plan selection
            window.location.href = 'plans.html';
        }

        // Make tab switching function available globally
        window.showPaymentMethod = function(selectedMethod) {
            if (plan && planInfo[plan]) {
                window.location.href = `payment-details.html?plan=${plan}&method=${selectedMethod}`;
            }
        };
    });

    // Payment confirmation function
    function confirmPayment() {
        const confirmation = confirm('Have you completed your payment transfer?');
        if (confirmation) {
            alert('Thank you for your payment! We will verify and contact you shortly.');
            window.location.href = "index.html";
        }
    }
</script>