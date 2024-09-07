import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as apiUpdateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: apiUpdateSetting,
    onSuccess: () => {
      toast.success("Setting successfully updated");

      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
