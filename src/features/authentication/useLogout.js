import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as apiLogout } from "../../services/apiAuth";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: apiLogout,
    onSuccess() {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { isPending, logout };
}
