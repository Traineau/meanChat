import { Component, OnInit } from '@angular/core';
import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
PouchDB.plugin(PouchFind);

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  private db: any;
  private isInstantiated: boolean;
  private listener: EventEmitter<any> = new EventEmitter();
  public messages: {
    author: string;
    content: string;
  }[];

  constructor() {
    if (!this.isInstantiated) {
      this.db = new PouchDB('node-chat');
      this.isInstantiated = true;

      this.messages = [
        {
          author: 'NodeBot',
          content: 'Bonjour et bienvenue dans ce chat'
        },
        {
          author: 'NodeBot',
          content:
            'Vous pouvez envoyer des messages qui apparaitront directement pour tout utilisateur connecté'
        },
        {
          author: 'NodeBot',
          content: 'Ce chat a été fait avec angular, NodeJS et pouchDB'
        }
      ];
    }

    this.db.changes().on('change', function() {
      this.db.allDocs({ include_docs: true }, function(err, docs) {
        if (err) {
          return console.log(err);
        } else {
          console.log(docs.rows);
          /*
          this.messages += [
            {
              author: (docs.rows[0].doc.name),
              content: (docs.rows[0].doc.content)
            }
          ];*/
        }
      });
    });
  }

  public newMessage() {
    this.db.put({
      _id: Date.now().toString(),
      name: 'David', // TODO : Recuperer le pseudo du mec via son token
      content: 'yo' // TODO : Recuperer le message tapé
    });

    this.db.replicate.to('http://127.0.0.1:5984/node-chat', true);
  }

  ngOnInit() {}
}
