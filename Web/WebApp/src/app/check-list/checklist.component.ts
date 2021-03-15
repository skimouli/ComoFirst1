import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { fromEvent, Subscription } from 'rxjs';
import { CheckList, Tache } from '../shared/Models';
import { ResourceService } from '../shared/Modules/core/services/resource.service';
import { CreatChecklistComponent } from './creat-checklist/creat-checklist.component';
import { CreatTacheComponent } from './creat-tache/creat-tache.component';
import { EdittexttacheComponent } from './edittexttache/edittexttache.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit, OnDestroy {
  checklists: CheckList[] = [];
  sub: Subscription[] = [];
  color: string='red'
  ajoutercheckList: string = 'ajouter checkList';
  constructor(private resourceService: ResourceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initiateCheckList();  
  }
  initiateCheckList() {
    const subFetch = this.resourceService.fetch<CheckList[]>('https://localhost:44363/CheckListControler')
      .subscribe(
        (data) => this.checklists = data);
    this.sub.push(subFetch);
  }

  openCreatCheckList() {
   
    const dialogRef = this.dialog.open(CreatChecklistComponent, {
      width: '450px',
      height: '300px'
    })
    const sub = dialogRef.componentInstance.creatCheckListEvent.subscribe(
      (d) => {

        this.initiateCheckList();
        dialogRef.close();
      }
    )
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  selectionChange(option: MatListOption, idChecklist: number) {
    console.log(option);
    const tache = this.checklists.find(x => x.id === idChecklist)
      .taches.find(x => x.id === option.value);

    tache.active = option.selected;
    const subUpdate =this.resourceService.update(tache, 'https://localhost:44363/Taches')
      .subscribe(data => console.log('success'));
    this.sub.push(subUpdate);

  }

  openCreatTache(idCheckList) {
    const dialogRef2 = this.dialog.open(CreatTacheComponent, {
      width: '450px',
      height: '150px',
      data: {
        idCheckList: idCheckList
      }
    });
    const sub = dialogRef2.componentInstance.creatTacheEvent
      .subscribe((d) => {
        this.initiateCheckList();
        dialogRef2.close();
      });
    dialogRef2.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  deleteTache(idCheckList: number, idTache: number) {
   const deletesub1 =  this.resourceService.delete('https://localhost:44363/Taches/' + idCheckList + '/' + idTache)
      .subscribe(d => this.initiateCheckList());
    this.sub.push(deletesub1);
  }

  deleteCheckList(CheckList: CheckList) {
    const listIdTache = [];
    CheckList.taches.forEach(x => listIdTache.push(x.id));
    
    this.resourceService.delete('https://localhost:44363/CheckListControler/' + CheckList.id, { body: listIdTache })
      .subscribe(
        (d) => {
          this.initiateCheckList();
          console.log('succes');
        })
  }

  ngOnDestroy(): void {
    this.sub.forEach(x=> x.unsubscribe());
  }

  editTache(listId: number, idTache: number) {
    //var tacheEditee: Tache = this.checklists.find(x => x.id === listId).taches.find(x => x.id === tacheId);
    //tacheEditee.text = text;
    //this.resourceService.updateWithOutBody('https://localhost:44363/Taches' + tacheId, { body: text });
    const dialogRef2 = this.dialog.open(EdittexttacheComponent, {
      width: '450px',
      height: '150px',
      data: {
        idTacheInput: idTache
      }
    });

    const sub = dialogRef2.componentInstance.eventText.subscribe(
      data => {
        let tacheEditee: Tache = this.checklists.find(x => x.id === listId).taches.find(x => x.id === idTache);
        tacheEditee.text = data;
      });
    this.dialog.afterAllClosed.subscribe(
      d => sub.unsubscribe)
  }

}
