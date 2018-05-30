export class Qoutes {
  upVotes : number ;
  downVotes: number;
  constructor(public name:string ,public quote :string , public author :string)
  {
    this.upVotes=0;
    this.downVotes=0;
  }
}
