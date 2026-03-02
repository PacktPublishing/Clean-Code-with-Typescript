import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostAuthLogin } from '@devjobs/api-client';
import { useAuth } from '../../context/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = usePostAuthLogin();
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!email || !password) return;

      const response = await loginMutation.mutateAsync({
        data: { email, password },
      });

      login(response.access_token);

      navigate('/jobs');
    } catch (error) {
      // you can use your custom loggers here to handle the error in a better way
      console.error('Login failed:', error); //
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-sm'>
        <h1 className='text-xl font-semibold'>Login</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='email' className='text-sm'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='border px-3 py-2 rounded'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='password' className='text-sm'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className='border px-3 py-2 rounded'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' disabled={loginMutation.isPending}>
            {loginMutation.isPending ? 'Logging in...' : 'Login'}
          </button>
          {loginMutation.isError && (
            <p className='text-sm'>
              Login failed. Please check your email and password.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
