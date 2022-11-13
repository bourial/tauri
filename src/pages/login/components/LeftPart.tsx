import PasswordEyeOpen from '../../../assets/icons/PasswordEyeOpen';
import PasswordEyeClose from '../../../assets/icons/PasswordEyeClose';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { IUserLogin } from '../modal';
import '../styles.css';

const LeftPart = () => {
  const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    const { placeholder, value } = e.target;
    placeholder === 'Email' && setUser({ ...user, email: value });
    placeholder === 'Password' && setUser({ ...user, password: value });
  };

  const handleSubmit = () => {
    if (!user?.email) {
      setError('Email is required !');
      return;
    }
    if (!user?.password) {
      setError('Password is required !');
      return;
    }

    alert('You are logged in !');
  };

  return (
    <section className='p-14 max-w-xl mx-auto w-full'>
      <nav className='w-fit cursor-pointer'>
        <img src='/public/images/logo.svg' alt='' />
      </nav>

      <article className='mt-[15vh]'>
        <h1 className='text-[28px] font-medium'>Sign in to XXX</h1>
        <p className='text-sm text-gray-500 mt-5 mb-8'>
          Don't have account yet ?{' '}
          <Link to='/register' className='text-[#62C247] font-medium'>
            Register
          </Link>
        </p>
        <input
          type='email'
          placeholder='Email'
          value={user?.email}
          onChange={handleInputChange}
          className='w-full h-11 bg-[#f4f4f5] pl-4 rounded-md placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#62C247]'
        />
        <div className='relative mt-5'>
          <input
            type={showPass ? 'text' : 'password'}
            placeholder='Password'
            value={user?.password}
            onChange={handleInputChange}
            className='w-full h-11 bg-[#f4f4f5] pl-4 rounded-md placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#62C247]'
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
          >
            {showPass ? <PasswordEyeClose /> : <PasswordEyeOpen />}
          </button>
        </div>
      </article>

      {/* erros hondler */}
      {error && (
        <article
          className={`w-fit bg-red-500 text-white rounded-md text-xs font-medium px-4 py-1 mt-3`}
        >
          {error}
        </article>
      )}

      <article className='text-sm flex justify-between items-center my-8'>
        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            className='form-check-input appearance-none h-[18px] w-[18px] border border-gray-400 rounded-[4px] bg-white checked:bg-[#62C247] focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer'
          />
          <p>Stay connected</p>
        </div>
        <div className='cursor-pointer hover:underline text-[13px]'>
          Forgot your password ?
        </div>
      </article>

      <button
        onClick={handleSubmit}
        className='h-12 w-full block bg-[#62C247] text-white text-sm font-medium rounded-md active:scale-95 transition-all duration-150 mt-12'
      >
        Continue
      </button>
    </section>
  );
};

export default LeftPart;
