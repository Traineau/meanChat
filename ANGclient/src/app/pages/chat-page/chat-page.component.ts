import {
  Component,
  NgZone,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
import { AuthService } from "../../services/auth/auth.service";
import {Router} from "@angular/router"
PouchDB.plugin(PouchFind);

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChatPageComponent implements OnInit {
  private db: any;
  private isInstantiated: boolean;
  public messages: {
    _id: String;
    author: String;
    content: String;
  }[] = [];
  public messageInput: String;

  constructor(private router: Router, private ngZone: NgZone, private authService: AuthService) {

    if(authService.isLoggedIn() == false){
      this.router.navigate(['/'])
    }
    if (!this.isInstantiated) {
      this.db = new PouchDB('node-chat');
      this.isInstantiated = true;
    }

    const options = {
      live: true,
      retry: true,
      continuous: true
    };

    const remoteDb = 'http://localhost:5984/node-chat';

    this.db.sync(remoteDb, options);

    this.messageInput = null;
  }

  ngOnInit() {
    this.db
      .allDocs({
        include_docs: true
      })
      .then(result => {
        this.db
          .changes({
            live: true,
            since: 'now',
            include_docs: true
          })
          .on('change', change => {
            this.handleChange(change);
          });

        result.rows.map(row => {
          this.messages.push({
            _id: row.doc._id,
            author: row.doc.name,
            content: row.doc.content
          });
        });
      });
  }

  public newMessage() {
    this.db.put({
      _id: Date.now().toString(),
      name: this.authService.userName,
      content: this.messageInput
    });

    this.messageInput = "";
  }

  public handleChange(change) {
    this.ngZone.run(() => {
      let changedDoc = null;
      let changedIndex = null;

      this.messages.forEach((doc, index) => {
        if (doc._id === change._id) {
          changedDoc = doc;
          changedIndex = index;
        }
      });

      if (change.deleted) {
        this.messages.splice(changedIndex, 1);
      } else {
        if (changedDoc) {
          this.messages[changedIndex]._id = change.doc._id;
          this.messages[changedIndex].author = change.doc.name;
          this.messages[changedIndex].content = change.doc.content;
        } else {
          this.messages.push({
            _id: change.doc._id,
            author: change.doc.name,
            content: change.doc.content
          });
        }
      }
    });
  }
}
