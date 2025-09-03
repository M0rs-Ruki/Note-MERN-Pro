

import Navbar from '../components/Navbar.jsx';
import RateLimitedUl from '../components/RateLimitedUl.jsx';



const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  return (
    <div className='min-h-screen'>
      <Navbar/>

      {isRateLimited && <RateLimitedUl/>}
    </div>
  )
}

export default HomePage