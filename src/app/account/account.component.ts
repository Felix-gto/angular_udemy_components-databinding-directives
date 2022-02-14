import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';

// Import the service
import { LoggingService } from '../logging.service';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]

  // Provide the service
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  // Constructor needed to use the service: type mandatory and is the class that you want to get injected. - informs angular that we need an instance of the Logging Service class (argument)
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    // Using the service: this.constructorMethod.serviceMethod(pass argument)
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    this.accountsService.statusUpdated.emit(status);
  }
}
