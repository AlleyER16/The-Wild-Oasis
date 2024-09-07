import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isAuthenticated, isPending } = useUser();

  // 2. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. If there is NO authenticated user, redirect to the /login
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // 4. If there IS a user, render the App
  if (isAuthenticated) return children;

  return null;
}
