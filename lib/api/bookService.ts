import { BookingData } from "@/types/type";
import { db } from "../firebase";
import { push, ref, set } from "firebase/database";

export const createBooking = async (bookingData: BookingData) => {
  const bookingsRef = ref(db, "bookings");
  const newBookingRef = push(bookingsRef);

  return await set(newBookingRef, {
    ...bookingData,
    createdAt: new Date().toString(),
  });
};
