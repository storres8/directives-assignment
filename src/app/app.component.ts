import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "directives-assignment";
  notClicked = true;
  display = "Display";

  array = [];

  handleClick() {
    this.notClicked = !this.notClicked;
    this.notClicked ? (this.display = "Display") : (this.display = "Hide");
    this.array.push("Lorem");
    // console.log(this.array);
  }

  getColor(i) {
    return i + 1 >= 5 ? "blue" : "transparent";
  }
  setText(i) {
    if (i + 1 >= 5) {
      return true;
    }
    return false;
  }
}
