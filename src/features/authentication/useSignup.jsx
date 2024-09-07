import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { isPending, mutate: signUp } = useMutation({
    mutationFn: apiSignUp,
    // onSuccess(user) {
    onSuccess() {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { isPending, signUp };
}
