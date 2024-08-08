




const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/createOrder', checkForAuthenticationToken, async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in the smallest currency unit (paise for INR)
    currency: 'INR',
    payment_capture: 1, // Auto-capture
  };

  try {
    console.log('Creating Razorpay order with options:', options);
    const order = await razorpay.orders.create(options);
    console.log('Razorpay order response:', order);

    if (order && order.id && order.currency && order.amount) {
      res.json({
        id: order.id,
        currency: order.currency,
        amount: order.amount,
      });
    } else {
      throw new Error('Invalid response from Razorpay');
    }
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Internal Server Error');
  }
});