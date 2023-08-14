const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allList = await contacts.listContacts();
      console.table(allList)
      break;

    case 'get':
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case 'remove':
    const contactToDelete = await contacts.removeContact(id);
    console.log(contactToDelete);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);

// invokeAction({action: 'list'})
// invokeAction({ action: 'get', id: "vza2RIzNGIwutCVCs4mCL" })
// invokeAction({ action: 'add', name: "me", email: "me@asd", phone: "12345" })
// invokeAction({ action: 'remove', id: "P7Y-nPnSSOHQYXAEvKfqD" })
