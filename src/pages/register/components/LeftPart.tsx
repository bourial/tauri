import PasswordEyeOpen from '../../../assets/icons/PasswordEyeOpen';
import PasswordEyeClose from '../../../assets/icons/PasswordEyeClose';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import { IUserRegister } from '../modal';

const LeftPart = () => {
  const [user, setUser] = useState<IUserRegister>({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    const { placeholder, value } = e.target;
    placeholder === 'Name' && setUser({ ...user, name: value });
    placeholder === 'Username' && setUser({ ...user, username: value });
    placeholder === 'Email' && setUser({ ...user, email: value });
    placeholder === 'Password' && setUser({ ...user, password: value });
  };

  const handleSubmit = () => {
    if (!user?.name) {
      setError('Name is required !');
      return;
    }
    if (!user?.username) {
      setError('Username is required !');
      return;
    }
    if (!user?.email) {
      setError('Email is required !');
      return;
    }
    if (!user?.password) {
      setError('Password is required !');
      return;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) === false
    ) {
      setError('Set a valid email !');
      return;
    }

    alert('Youre account has been created !');
  };

  return (
    <section className='p-14 max-w-xl mx-auto w-full'>
      <nav className='w-fit cursor-pointer'>
        <img src='/public/images/logo.svg' alt='' />
      </nav>

      <article className='mt-[15vh]'>
        <h1 className='text-[28px] font-medium'>Sign up to XXX</h1>
        <p className='text-sm text-gray-500 mt-5 mb-8'>
          Already have account ?{' '}
          <Link to='/' className='text-[#62C247] font-medium'>
            Login
          </Link>
        </p>
      </article>

      <article>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Name'
            value={user.name}
            onChange={handleInputChange}
            className='w-full h-11 bg-[#f4f4f5] pl-4 rounded-md placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#62C247]'
          />
          <input
            type='text'
            placeholder='Username'
            value={user.username}
            onChange={handleInputChange}
            className='w-full h-11 bg-[#f4f4f5] pl-4 rounded-md placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#62C247]'
          />
        </div>
        <input
          type='email'
          placeholder='Email'
          value={user.email}
          onChange={handleInputChange}
          className='w-full h-11 bg-[#f4f4f5] pl-4 rounded-md placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#62C247] my-5'
        />
        <div className='relative'>
          <input
            type={showPass ? 'text' : 'password'}
            placeholder='Password'
            value={user.password}
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

      <button
        onClick={handleSubmit}
        className='h-12 w-full block bg-[#62C247] text-white text-sm font-medium rounded-md active:scale-95 transition-all duration-150 mt-8 mb-5'
      >
        Confirm
      </button>

      <article className='text-[13px] font-light text-gray-600'>
        By clicking Confirm, you agree to our{' '}
        <span className='underline text-black font-medium cursor-pointer'>
          Privacy Policy
        </span>{' '}
        applicable to the processing of your personal data.
      </article>
    </section>
  );
};

export default LeftPart;
