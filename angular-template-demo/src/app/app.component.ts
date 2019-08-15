import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "template-demo";
  fontSizePx = 10;
  isUnchanged = true;
  currentClasses = {};
  imageUrl = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light";
  actionName = "myAction";
  isSpecial = true;
  canSave = true;
  clickMessage = "";

  ngOnInit() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      error: true
    };
  }

  onSave(event?: KeyboardEvent) {
    let evtMsg = event
      ? " Event target is " + (<HTMLElement>event.target).textContent
      : "";
    this.alert("Saved." + evtMsg);
    this.clickMessage = "onSave";
    if (event) {
      event.stopPropagation();
    } // avoid double-clicked
  }

  onReset(event?: KeyboardEvent) {
    let evtMsg = event
      ? " Event target is " + (<HTMLElement>event.target).textContent
      : "";
    this.alert("Saved." + evtMsg);
    this.clickMessage = "onReset";
    if (event) {
      event.stopPropagation();
    } // avoid double-clicked
  }

  alert(msg?: string) {
    window.alert(msg);
  }

  displayCounter(count: number) {
    console.log(count);
  }

  changeFontSize(event?: KeyboardEvent) {
    this.fontSizePx = 20;
  }
}
