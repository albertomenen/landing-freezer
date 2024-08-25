import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently, isLoading, error } = useAuth0();
  const [userMetadata, setUserMetadata] = useState<any>(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e: any) {
        console.error("Error fetching user metadata:", e.message);
      }
    };

    if (isAuthenticated) {
      getUserMetadata();
    }
  }, [getAccessTokenSilently, isAuthenticated, user?.sub]);

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div>Error loading profile: {error.message}</div>;

  return (
    isAuthenticated ? (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <img src={user?.picture} alt={user?.name} style={{ borderRadius: '50%', width: '100px' }} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          <p>No user metadata defined.</p>
        )}
      </div>
    ) : null
  );
};

export default Profile;
