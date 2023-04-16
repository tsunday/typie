import { Observable } from "rxjs";

export class Core {
  id: number;
  projectName: String;
  constructor() {
    const smth = new Observable((subscriber) => {
      subscriber.next("FELEK");
      subscriber.next("STASIA");
      setTimeout(() => {
        subscriber.next("TOMEK");
        subscriber.complete();
      }, 2000);
    });
    smth.subscribe({
      next(x) {
        console.log(`twoje imie to ${x}`);
      },
      error(err) {},
      complete() {},
    });
    console.log("PESTO 🐶");
  }
}
