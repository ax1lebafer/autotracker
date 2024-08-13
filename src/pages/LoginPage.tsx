import Login from "../components/Login";

interface LoginPageProps {
  setIsAuthenticated: (value: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated }) => {
  return <Login setIsAuthenticated={setIsAuthenticated} />;
};

export default LoginPage;
