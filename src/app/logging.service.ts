// Create the class for the service - name it as you wish (Logging Service in our case)
import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {

  // Create the desired method: logStatusChange() which in this case receives an argument (status: type string)
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }

}