function createInvoice(services = {}) {
  let amountPaid = 0;
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      amountPaid += payment.total();
    },

    addPayments(payments) {
      payments.forEach(payment => this.addPayment(payment));
    },
    amountDue() {
      return console.log(this.total() - amountPaid);
    },
  };
}

function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount,
    total() {
      return this.amount || this.internet + this.phone;
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0