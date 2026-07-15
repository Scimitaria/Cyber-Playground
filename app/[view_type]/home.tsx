import { pool } from '@/db/db';

//homepage

async function getUsers() {
  // Use parameterized queries to defend against SQL injections
  const [rows] = await pool.query('SHOW TABLES');
  return rows as any[];
}

export default async function Home(){
  const users = await getUsers();
  console.log(users);

  return(
    <div id="Home" className="tabcontent">
    <center>
      <p className="font-code">Cyber Playground</p>
    </center>
    </div>
  )
}