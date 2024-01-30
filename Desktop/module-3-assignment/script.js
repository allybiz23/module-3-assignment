class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

function getContactInfo() {
    const name = prompt("Enter contact name: ");
    const address = prompt("Enter contact address: ");
    const phone = prompt("Enter contact phone: ");
    return new Contact(name, address, phone);
}

function addContact(contacts, contact) {
    if (contacts.length < 10) {
        contacts.push(contact);
        console.log("Contact added successfully.");
    } else {
        console.log("Maximum number of contacts reached.");
    }
}

function displayContacts(contacts) {
    console.log("\nContacts:");
    for (const contact of contacts) {
        console.log(`Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    }
}

function main() {
    const contacts = [];

    while (contacts.length < 10) {
        const contact = getContactInfo();
        addContact(contacts, contact);

        const addMore = prompt("Do you want to add more contacts? (yes/no)").toLowerCase();
        if (addMore !== 'yes') {
            break;
        }
    }

    contacts.sort((a, b) => a.name.localeCompare(b.name));
    displayContacts(contacts);
}

main();