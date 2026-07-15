import { RowDataPacket } from 'mysql2';
import { pool } from '@/db/db';

//homepage

interface Student {
  name: string;
  password: string;
}

async function getUsers() {
  // Use parameterized queries to defend against SQL injections
  const [rows] = await pool.query('SELECT * FROM Students');
  return rows as any[];
}

async function OnSubmit(formData: FormData) {
  'use server'; 
  const input = Object.fromEntries(formData);
  const query = "SELECT * FROM Students WHERE Student = '" + input['name'] + "'";
  console.log(query)
  const [rows] = await pool.query<Student[] & RowDataPacket[]>(query);
  //const row: Student = rows[0];
  console.log(rows);
}

export default async function Home(){
  return(
    <div id="Home" className="tabcontent">
    <center>
      <p className="font-code">Cyber Playground</p>
      <form action={OnSubmit} style={{ padding: '20px' }}>
        <input 
          type="text" 
          name="name" // Crucial for FormData extraction
          placeholder="Enter your name"
          required 
        />
        <button type="submit">Submit</button>
      </form>
      <h2 className="text-lg font-bold">Injections:</h2>
      <ul className="list-disc list-inside pl-6 md:pl-12">
        <li>&lt;name&gt;';SELECT * FROM Students;# - Gets all student names and passwords</li>
      </ul>
    </center>
    </div>
  );
}
