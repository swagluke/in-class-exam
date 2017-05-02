import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";

interface Post {
  abbreviation: string;
  fullname: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  formPost: Post = {
    'abbreviation': '',
    'fullname': ''
  };

  PostStream: FirebaseListObservable<Post[]>;

  constructor(private af: AngularFire) {
    this.PostStream = af.database.list("/posts");
  }

  ngOnInit() {
  }

  onSubmit(): void {
    try {
      this.PostStream.push(this.formPost);
      this.formPost = {
        'abbreviation': '', 'fullname': ''
      };
    } catch (e) {
      console.log("Submit error", e);
    }
  }

  delete(keyToDelete: string): void {
    this.PostStream.remove(keyToDelete);
  }
}
