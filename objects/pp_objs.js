let invoices = {
  unpaid: [],

  paid: [],


  payInvoice: function(n) {
    let remainingUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === n) {
        this.paid.push(invoice);
      } else {
        remainingUnpaid.push(invoice);
      }
    });

    this.unpaid = remainingUnpaid;
  },

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  },

  totalDue: function() {
    return this.unpaid.map(invoice => invoice.amount).reduce((total, amount) => total += amount);
  },

  totalPaid: function() {
    return this.paid.map(invoice => invoice.amount).reduce((total, amount) => total += amount);
  },



}


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive',  187.50);
invoices.add('Slough Digital',  300);


invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());

