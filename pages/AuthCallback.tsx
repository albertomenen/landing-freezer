import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthCallback = () => {
  const { user, isAuthenticated } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      router.push(`/profile/${user.sub}`);
    }
  }, [isAuthenticated, user]);

  return <div>Loading...</div>;
};

export default AuthCallback;
