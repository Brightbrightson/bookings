import Nav from './nav';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <Nav/>
    <div>Welcome</div>

{/* <a href="/book" role="button">Book a table</a> */}
<Link to="/Form">Book a Table</Link>
</>
  );
}

export default Home;
