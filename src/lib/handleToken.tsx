import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../utils/helper';

export interface HandleTokenProps {
  token: string;
}

const handleToken = <P extends HandleTokenProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const HandleToken: React.FC<P> = (props) => {
    const authHeader = useAuthHeader()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    if (!isAuthenticated()) {
      navigate('/login')
    }
    const access_token = getAccessToken(authHeader());
    return <WrappedComponent {...props} token={access_token} />;
  };

  return HandleToken;
};

export default handleToken;
