import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { CheckList } from '../shared/Models';
import { ResourceService } from '../shared/Modules/core/services/resource.service';
import { CreatChecklistComponent } from './creat-checklist/creat-checklist.component';
import { CreatTacheComponent } from './creat-tache/creat-tache.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit, OnDestroy {
  checklists: CheckList[] = [];
  sub: Subscription[]=[]; 
  constructor(private resourceService: ResourceService,
    private dialog: MatDialog) { }


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


}
