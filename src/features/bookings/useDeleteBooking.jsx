import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => apiDeleteBooking(bookingId),
    onSuccess() {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError() {
      toast.error("Error deleting booking");
    },
  });

  return { isDeleting, deleteBooking };
}
