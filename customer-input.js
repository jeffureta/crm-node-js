const readline = require('readline');
const fs = require('fs');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user and collect customer information
function promptUser() {
    rl.question('Enter your email address: ', (email) => {
        rl.question('Enter your first name: ', (firstName) => {
            rl.question('Enter your last name: ', (lastName) => {
                rl.question('Enter your sex: ', (sex) => {
                    rl.question('Enter your date of birth (YYYY-MM-DD): ', (dob) => {
                        // Create a JSON object with the customer information
                        const customer = {
                            email: email,
                            firstName: firstName,
                            lastName: lastName,
                            sex: sex,
                            dob: dob
                        };

                        // Save the customer information to a file
                        saveCustomer(customer);

                        rl.close();
                    });
                });
            });
        });
    }
    );

    // Function to save the customer information to a file
    function saveCustomer(customer) {
        fs.readFile('customers.json', 'utf8', (err, data) => {
            if (err) {
                // If the file doesn't exist, create a new array for customers
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
                // If the file already exists, parse the JSON data and add the new customer
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
}
// Start the program
promptUser();
