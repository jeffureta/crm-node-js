const fs = require('fs');

function saveCustomer(customer) {
  fs.readFile('customers.json', 'utf8', (err, data) => {
    if (err) {
      const customers = [customer];
      const jsonData = JSON.stringify(customers);

      fs.writeFile('customers.json', jsonData, 'utf8', (err) => {
        if (err) {
          console.error('Error saving customer information:', err);
        } else {
          console.log('Customer information saved successfully!');
        }
      });
    } else {
      const customers = JSON.parse(data);
      customers.push(customer);
      const jsonData = JSON.stringify(customers);

      fs.writeFile('customers.json', jsonData, 'utf8', (err) => {
        if (err) {
          console.error('Error saving customer information:', err);
        } else {
          console.log('Customer information saved successfully!');
        }
      });
    }
  });
}

module.exports = {
  saveCustomer
};
