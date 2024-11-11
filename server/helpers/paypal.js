const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUhQsoDSAWY_XMTqmv4HW-7twOhqaHybYuh8mfhU-6TECn1YrViUl4On8oCyi2WWsInkSxOO7OsPgFEr",
  client_secret: "EMY_1itd7AkZxDNSGWVbwed1VzCmieuCFjIISRNHyBh5Ud_3zTfcnNyO4xVoVBVgFKAJzpBZhaxcKiaj",
});

module.exports = paypal;
