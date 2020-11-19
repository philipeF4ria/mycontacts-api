const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Philipe Faria',
    email: 'philipe@faria.com',
    phone: '(12) 3 4455-6677',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Faria Philipe',
    email: 'faria@philipe.com',
    phone: '(77) 6 5544-3322',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name,
    email,
    phone,
    category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, {
    name,
    email,
    phone,
    category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
