import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tache } from '../../shared/Models';
import { ResourceService } from '../../shared/Modules/core/services/resource.service';



@Component({
  selector: 'app-edittexttache',
  templateUrl: './edittexttache.component.html',
  styleUrls: ['./edittexttache.component.scss']
})
export class EdittexttacheComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private resourceService: ResourceService,
    private fb: FormBuilder) { }
  myForm: FormGroup;
  @Output() eventText: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.creatForm();
  }
  creatForm() {
    this.myForm = this.fb.group({
      textTache: [{ value: 'aaa', disabled: false }, Validators.required]
    })      
  }
  OnClick() {
    const text: string = this.myForm.get('textTache').value;
    this.resourceService.updateWithOutBody('https://localhost:44363/Taches/' + this.data.idTacheInput, text )
      .subscribe(data => { this.eventText.emit(text);})
  }
}
