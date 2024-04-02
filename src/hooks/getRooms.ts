import axios from "axios";
import { Property } from "./types/getRooms.types";

const url = "https://api.sandapi.com/user_g4Zit4/rooms";

export const getRooms = async () => {
  try {
    const response = await axios.get<Property[]>(url);
    return response;
  } catch (error) {
    console.error("Error al realizar la llamada:", error);
    return error;
  }
};
