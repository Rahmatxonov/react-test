import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <h2>AboutPage</h2>
      <NavLink to={'/'}>Back to home</NavLink>
    </div>
  );
}

export default AboutPage;
