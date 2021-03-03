import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tache } from '../../shared/Models';
import { ResourceService } from '../../shared/Modules/core/services/resource.service';

@Component({
  selector: 'app-creat-tache',
  templateUrl: './creat-tache.component.html',
  styleUrls: ['./creat-tache.component.scss']
})
export class CreatTacheComponent implements OnInit {
  idCheckList: number;
  myForm: FormGroup;
  tacheAjoutee: Tache;
  creatTacheEvent: EventEmitter<any> = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private resourceService: ResourceService) {
  }

  ngOnInit(): void {
    this.idCheckList = this.data;
    this.creatForm();
  }

  creatForm() {
    this.myForm = this.fb.group({
      textTache: ['']
    });
  }
  OnClick() {
    this.tacheAjoutee = {
      active: false,
      text: this.myForm.get('textTache').value,
      id: 0,
      LoginUtilisateur: 'coco'
    };
    this.resourceService.creat(this.tacheAjoutee, 'https://localhost:44363/Taches/' + this.data.idCheckList)
      .subscribe(data => {
        this.creatTacheEvent.emit();
      });
  }
}
