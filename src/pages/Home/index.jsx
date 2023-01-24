import { Link } from 'react-router-dom'
import Banner from '../../components/Banner';

function Home() {
  return (
    <>
    <Banner/>
    <Link to="/logement">Logement</Link>
    </>
  )
}

export default Home;
