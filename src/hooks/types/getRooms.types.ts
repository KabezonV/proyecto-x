export interface Property {
  images: string[];
  price: number;
  room_type: string;
  meters: number;
  facilities: {
    elevator: boolean;
    private: boolean;
    double_bed: boolean;
    individual_bed: boolean;
    exterior: boolean;
    inside: boolean;
    accessible: boolean;
    swimming_pool: boolean;
    gym: boolean;
  };
  amenities: {
    television: boolean;
    heating: boolean;
    air_conditioning: boolean;
    dishwasher: boolean;
    wash_machine: boolean;
    wifi: boolean;
    dryer: boolean;
    balcony: boolean;
  };
  total_rooms: number;
  location: [number, number];
  available_dates: {
    start_date: string;
    end_date: string;
  };
  rules: string[];
  description: string;
  about_me: {
    images: string[];
    name: string;
    surname: string;
    age: number;
    languages: string[];
  };
}
