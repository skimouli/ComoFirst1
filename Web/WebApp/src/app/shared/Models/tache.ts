import { resource } from './resource';

export interface Tache extends resource {

  id: number;
  text: string;
  active: boolean;
  LoginUtilisateur: string;
}
