import { Client } from 'pg'
 
const client = new Client({
  host: 'studysips-db.cbkocewoeib2.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'studysips-db',
  user: 'postgres',
  password: 'secretpassword!!',
})
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()