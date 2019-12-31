import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Observable } from "rxjs";
import { of } from "rxjs";

import { Log } from "../models/log";

@Injectable({
  providedIn: "root"
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true)
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {
    //     id: "1",
    //     text: "Generated Components",
    //     date: new Date("12/28/2019 12:54:31")
    //   },
    //   {
    //     id: "2",
    //     text: "Added Bootstrap",
    //     date: new Date("12/27/2019 10:52:31")
    //   },
    //   {
    //     id: "3",
    //     text: "Added Font Awesome",
    //     date: new Date("12/29/2019 11:14:27")
    //   }
    // ];

    this.logs = []
    
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updLog(log: Log) {
    this.logs.forEach((cur, i) => {
      if (log.id === cur.id) {
        this.logs.splice(i, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, i) => {
      if (log.id === cur.id) {
        this.logs.splice(i, 1);
      }
    });
  }

  clearState(){
    this.stateSource.next(true)
  }
}
