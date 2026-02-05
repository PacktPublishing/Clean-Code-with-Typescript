// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { usePostAuthLogin } from '@devjobs/api-client';
// import { useAuth } from '../../context/AuthContext';

// export function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { login } = useAuth();
//     const navigate = useNavigate();

//     const loginMutation = usePostAuthLogin();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//           const response = await loginMutation.mutateAsync({
//             data: { email, password },
//           });

//           login(response.data.access_token);
//           navigate('/jobs');
//         } catch (error) {
//           console.error('Login failed:', error);
//         }
//       };
// }

export function Login() {
  return <div>Login Component</div>;
}
