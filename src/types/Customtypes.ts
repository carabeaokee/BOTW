// export declare interface CompendiumFetch {
//   result: Compendium[];
// }

import { ReactNode } from "react";

export declare type CompendiumItem = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export interface ItemEquipment {
  category: string;
  common_locations: string[];
}

export type FullEquipment = EquipmentItem & EquipmentProps;

export type DetailType = FullEquipment &
  CreatureType &
  MaterialType &
  MonsterType &
  TreasureType;

export declare type EquipmentItem = {
  category: string;
  common_locations: string[];
  description: string;
  id: number;
  image: string;
  name: string;
  properties: EquipmentProps;
};

export declare type EquipmentProps = {
  attack: number;
  defense: number;
};

export declare type CreatureType = {
  category: string;
  common_locations: string[];
  cooking_effect: string;
  description: string;
  edible: boolean;
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
};

export declare type MaterialType = {
  category: string;
  common_locations: string[];
  cooking_effect: string;
  description: string;
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
};

export declare type MonsterType = {
  category: string;
  common_locations: string[];
  description: string;
  drops: string[];
  id: number;
  image: string;
  name: string;
};

export declare type TreasureType = {
  category: string;
  common_locations: string[];
  description: string;
  drops: string[];
  id: number;
  image: string;
  name: string;
};

export declare type ProtectedRouteProps = {
  children: React.ReactNode;
};

export declare interface AuthContextType {
  user: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

export declare interface AuthProviderProps {
  children: ReactNode;
}

// export type CompendiumItem = EquipmentItem | CreatureType | MaterialType | MonsterType | TreasureType
