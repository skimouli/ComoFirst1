import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn : "root"
})
export class CommunicationService {
  transmetreMessage: BehaviorSubject<string> = new BehaviorSubject<string>('first');
}
