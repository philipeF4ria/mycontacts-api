const { Client } = require('pg');

const client = new Client({
  host: '192.168.99.100',
  port: 5432,
  user: 'postgres',
  password: 'docker',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
