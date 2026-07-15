import { pool } from '@/db/db';

//homepage

interface Student {
  name: string
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
  const row = (await pool.query(query))[0];
  console.log(row);
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
    </center>
    </div>
  );
}
