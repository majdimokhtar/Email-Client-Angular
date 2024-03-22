import { AuthModule } from "./auth/auth.module"
import { Component } from "@angular/core"
import { AuthService } from "./auth/auth.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  signedin = false
  constructor(private authservice: AuthService) {}
  ngOnInit() {
    this.authservice.signedin$.subscribe((signedin)=>{
      this.signedin = signedin
    })
  }
}
