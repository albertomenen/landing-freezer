import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { user, isLoading, error } = useAuth0();
  const router = useRouter();
  const { id } = router.query;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // Check if the ID in the URL matches the logged-in user's ID
  if (user && user.sub !== id) {
    return <div>Access Denied</div>; // Prevent access to other users' profiles
  }

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;
