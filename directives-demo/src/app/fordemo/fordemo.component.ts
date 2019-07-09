import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fordemo",
  templateUrl: "./fordemo.component.html",
  styleUrls: ["./fordemo.component.css"]
})
export class FordemoComponent implements OnInit {
  policies = [
    { id: 0, name: "policy001" },
    { id: 2, name: "policy002" },
    { id: 3, name: "policy003" },
    { id: 4, name: "policy004" },
    { id: 5, name: "policy005" }
  ];

  students: any[];

  constructor() {
    this.students = [
      {
        ID: "std101",
        FirstName: "Pranaya",
        LastName: "Rout",
        Branch: "CSE",
        DOB: "29/02/1988",
        Gender: "Male",
        Mobile: 9876543210
      },
      {
        ID: "std102",
        FirstName: "Anurag",
        LastName: "Mohanty",
        Branch: "ETC",
        DOB: "23/05/1989",
        Gender: "Male",
        Mobile: 1112223334
      },
      {
        ID: "std103",
        FirstName: "Priyanka",
        LastName: "Dewangan",
        Branch: "CSE",
        DOB: "24/07/1992",
        Gender: "Female",
        Mobile: 1234567890
      }
    ];
  }

  getStudents(): void {
    this.students = [
      {
        ID: "std101",
        FirstName: "Pranaya",
        LastName: "Rout",
        Branch: "CSE",
        DOB: "29/02/1988",
        Gender: "Male",
        Mobile: 9876543210
      },
      {
        ID: "std102",
        FirstName: "Anurag",
        LastName: "Mohanty",
        Branch: "ETC",
        DOB: "23/05/1989",
        Gender: "Male",
        Mobile: 1112223334
      },
      {
        ID: "std103",
        FirstName: "Priyanka",
        LastName: "Dewangan",
        Branch: "CSE",
        DOB: "24/07/1992",
        Gender: "Female",
        Mobile: 1234567890
      },
      {
        ID: "std104",
        FirstName: "Hina",
        LastName: "Sharma",
        Branch: "ETC",
        DOB: "19/08/1990",
        Gender: "Female",
        Mobile: 3334445550
      },
      {
        ID: "std105",
        FirstName: "Sambit",
        LastName: "Satapathy",
        Branch: "CSE",
        DOB: "12/94/1991",
        Gender: "Male",
        Mobile: 9998887770
      }
    ];
  }

  ngOnInit() {}

  trackByStudentID(student: any): string {
    return student.ID;
  }
}
