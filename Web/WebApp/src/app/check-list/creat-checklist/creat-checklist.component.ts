import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckList, Tache } from '../../shared/Models';
import { ResourceService } from '../../shared/Modules/core/services/resource.service';
@Component({
  selector: 'app-creat-checklist',
  templateUrl: './creat-checklist.component.html',
  styleUrls: ['./creat-checklist.component.scss']
})
export class CreatChecklistComponent implements OnInit {
  myForm: FormGroup;
  checkListCree: CheckList;
  tacheCree: Tache[] = [];
  creatCheckListEvent: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder,
    private resourceService: ResourceService) { }

  ngOnInit() {
    this.creatForm();
  }

  creatForm() {
    this.myForm = this.fb.group({
      nomCheckList: ['', Validators.required],
      taches: this.fb.array([new FormControl('', Validators.required)])
    })
  }

  get taches(): FormArray {
    return this.myForm.get('taches') as FormArray;
  }

  creatTache() {
    this.taches.push(new FormControl('', Validators.required));
  }

  deleteTache(i: number) {
    this.taches.removeAt(i);
  }

  ajouterCheckList() {

    this.taches.controls.forEach(x =>
      this.tacheCree.push({
        id: 0,
        active: false,
        LoginUtilisateur: 'inconnu',
        text: x.value
      }));

    this.checkListCree = {
      nomCheckList: this.myForm.get('nomCheckList').value,
      id: 0,
      taches: this.tacheCree
    };

    this.resourceService.creat<CheckList>(this.checkListCree, 'https://localhost:44363/CheckListControler')
      .subscribe(data => {
        
        console.log('succes');
        this.creatCheckListEvent.emit();
        this.myForm.reset();
      });


  }
  getErrorMessage() {
    if (this.myForm.get('nomCheckList').hasError('required')){
      return 'ce champs est obligatoir'
    }
    else return null;
  }

}
