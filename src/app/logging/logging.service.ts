import {Injectable} from '@angular/core';

@Injectable()
// this is optional but recommended
// number one it lets me know I am injecting this somewhere
// number two next v of angular it might matter
export class LoggingService {
  logStatusChange(status: Event) {
    console.log('Server status has changed', {'clientX': status['clientX'], 'clientY': status['clientY']});
  } 
}
