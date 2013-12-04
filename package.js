Package.describe({
  summary: "Stripe.js and Node-Stripe brought to Meteor."
});

Npm.depends({ "stripe": "2.2.2" });

Package.on_use(function (api) {
  api.export('Stripe');
  api.add_files('stripe_client.js', 'client');
  api.add_files('stripe_checkout.js', 'client');
  api.add_files('stripe_server.js', 'server');
});
