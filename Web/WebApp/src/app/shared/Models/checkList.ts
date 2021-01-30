
import { resource } from './resource';
import { Tache } from './tache';

export interface CheckList extends resource {

  id: number;
  nomCheckList: string;
  taches: Tache[];
}
