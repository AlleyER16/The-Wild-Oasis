import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBooking } from "../../services/apiBookings";

export default function useCheckout() {
  const queryClient = useQueryClient();

  const { isPending: isCheckingOut, mutate: checkOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess(data) {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError() {
      toast.error("There was an error while checking out");
    },
  });

  return { isCheckingOut, checkOut };
}
