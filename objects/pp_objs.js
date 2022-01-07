let invoices = {
  unpaid: [],

  paid: [],

  add(name, amount) {
    this.unpaid.push({name, amount});
  },

  payInvoice(name) {
    let unpaidInvoices = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        unpaidInvoices.push(invoice);
      }
      this.unpaid = unpaidInvoices;
    })
  },

  totalPaid() {
    return this.paid.map(invoice => invoice.amount).reduce((a, b) => a += b);
  },

  totalDue() {
    return this.unpaid.map(invoice => invoice.amount).reduce((a, b) => a += b);
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

