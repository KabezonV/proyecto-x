import React, { useEffect, useState } from "react";
import { getRooms } from "../../../hooks/getRooms";

const useMainScreen = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      // Llama a la función getRooms recupera datos de la api
      const roomsData = await getRooms();
      // Actualiza el estado con los datos de las habitaciones
      setRooms(roomsData.data);
    } catch (error) {
      console.error("Error al obtener las habitaciones:", error);
    }
  };
  useEffect(() => {
    fetchRooms();
  }, []);

  return { rooms };
};

export default useMainScreen;
