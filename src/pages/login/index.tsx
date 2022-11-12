import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';

const Login = () => {
  return (
    <div className='min-h-screen grid grid-cols-2 items-center'>
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default Login;
