import { of } from 'rxjs';

export class MatDialogStub {
  result: boolean = true;

  setResult(val: boolean) {
    this.result = val;
  }

  open() {
    return { afterClosed: () => of(this.result) };
  }
}
