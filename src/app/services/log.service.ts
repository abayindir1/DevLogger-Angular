import { Injectable } from '@angular/core';
import {Log} from '../models/log'

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs:Log[];

  constructor() { 
    this.logs=[
      {
        id:'1', text:'Generated Components', date: new Date('12/28/2019 12:54:31')
      },
      {
        id:'2', text:'Added Bootstrap', date: new Date('12/27/2019 10:52:31')
      },
      {
        id:'3', text:'Added Font Awesome', date: new Date('12/29/2019 11:14:27')
      }
    ]
   }

   getLogs(){
     return this.logs
   }
}
