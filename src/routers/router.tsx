import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { LoginForm, SignUpForm } from "../components/login-signup.component"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider authType={'cookie'}
        authName={'auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={
              <RequireAuth loginPath={'/login'}>
                <App />
              </RequireAuth>
            } />
            <Route path={'/login'} element={<LoginForm />} />
            <Route path={'/signup'} element={<SignUpForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}