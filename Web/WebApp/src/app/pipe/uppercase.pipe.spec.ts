import { UpperCasePipe } from "./uppercase.pipe"

describe('upperCase pipe spec', () => {
  it('ajouter should be AJOUTER', () => {
    const pipe = new UpperCasePipe();
    expect(pipe.transform('ajouter')).toEqual('AJOUTER');
  })
})   
