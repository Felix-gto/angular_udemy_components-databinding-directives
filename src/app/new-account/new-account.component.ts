import { Component  } from '@angular/core';

// Import the services
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],

  // Provide the service
  providers: [LoggingService],
})

export class NewAccountComponent {
  // Constructor needed to use the service: type mandatory and is the class that you want to get injected. - informs angular that we need an instance of the Logging Service class (argument)
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {

    // subscribe to the event emitted in the AccountsService
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // Using the service: this.constructorMethod.serviceMethod(pass argument)
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
