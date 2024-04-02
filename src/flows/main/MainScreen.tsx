import React from "react";
import useMainScreen from "./hooks/useMainScreen";
import Card from "./components/card/Card";
import "./main.css";
export const MainScreen = () => {
  // const { rooms } = useMainScreen();

  const rooms = [
    {
      tittle: "casa bonita",
      images: [
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_8671764f-f954-4f3b-8bb4-4804a30f9e4d.jpg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_f67d6572-c342-4ee8-8fbe-b1b50e7b1e60.jpg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_d25679bc-3ff6-4789-b0b6-d933cd99c104.jpg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_b7d2a125-2eca-47ae-b210-c011f8b03ff0.jpg",
      ],
      price: 290,
      room_type: "privada",
      meters: 40,
      facilities: {
        elevator: true,
        private: true,
        double_bed: true,
        individual_bed: false,
        exterior: true,
        inside: false,
        accessible: true,
        swimming_pool: false,
        gym: false,
      },
      amenities: {
        television: true,
        heating: true,
        air_conditioning: true,
        dishwasher: true,
        wash_machine: true,
        wifi: true,
        dryer: false,
        balcony: true,
      },
      total_rooms: 3,
      location: [37.2124648, -3.5487084],
      available_dates: {
        start_date: "2024-06-22",
        end_date: "2024-08-29",
      },
      rules: ["No se permite fumar", "Prohibidas mascotas"],
      description:
        "¿Estás buscando un lugar donde alojarte con todo a estrenar, con las mejores calidades y en una zona céntrica? -Nos presentamos: somos un equipo de jóvenes emprendedores que ofrecemos un servicio de alquiler PREMIUM de corta o larga estancia de particular a candidat@, sin intermediarios ni comisiones.-Gestionamos el alta de internet , suministros, climatización, limpieza común o posibles averías, para que sólo tengas que preocuparte por ti.",
      about_me: {
        images: [
          "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_27_e5bba1e9-ef16-485a-90fb-647c313a5a67.jpg",
          "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_27_42a7bc14-8579-4616-bc3d-84cd84c2c9f3.jpg",
        ],
        name: "Victor",
        surname: "Molina Fajardo",
        age: 40,
        languages: ["Español", "Ingles", "Italiano"],
      },
    },
    {
      tittle: "casa fea",
      images: [
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_39501fa7-9e01-43dd-a93d-0622b7c94664.jpeg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_aafdb581-8e8c-4f15-9a95-8e3316fb53c3.jpeg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_bb492dec-7d15-4045-81ed-3893356ed225.jpeg",
        "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_263699f8-0f6b-4b64-a001-a1701e3b46c7.jpeg",
      ],
      price: 220,
      room_type: "compartida",
      meters: 35,
      facilities: {
        elevator: false,
        private: false,
        double_bed: false,
        individual_bed: true,
        exterior: false,
        inside: true,
        accessible: true,
        swimming_pool: true,
        gym: false,
      },
      amenities: {
        television: true,
        heating: true,
        air_conditioning: false,
        dishwasher: false,
        wash_machine: true,
        wifi: true,
        dryer: false,
        balcony: true,
      },
      total_rooms: 3,
      location: [37.1832421, -3.5938374],
      available_dates: {
        start_date: "2024-07-22",
        end_date: "2024-08-15",
      },
      rules: ["Se permite fumar", "Se permiten parejas"],
      description:
        "Se alquila habitación en piso de estudiantes. 4 en total, mí habitación se queda libre. El piso es muy acogedor y grande, con cocina y baños amplísimos y totalmente equipados. Mi habitación es grande y amplía también, con escritorio, armario, muebles y cama de matrimonio. Una de las habitaciones tiene baño propio y está ocupada, es decir que el otro baño se comparte entre 3 y no 4. Disponible desde ya, cuanto antes mejor. 250 alquiler más 40 de gastos, fianza de un solo mes.",
      about_me: {
        images: [
          "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_27_e5bba1e9-ef16-485a-90fb-647c313a5a67.jpg",
          "https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_27_42a7bc14-8579-4616-bc3d-84cd84c2c9f3.jpg",
        ],
        name: "Joaquín",
        surname: "Del Hoyo Villar",
        age: 40,
        languages: ["Español", "Ingles"],
      },
    },
  ];
  return (
    <div className="card_container">
      {rooms?.map((room) => {
        return <Card room={room} />;
      })}
    </div>
  );
};

export default MainScreen;
