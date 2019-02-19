import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
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
    author: String,
    content: String
  }[] = [];

  constructor() {
    if (!this.isInstantiated) {
      // Base de données coté client
      this.db = new PouchDB('node-chat');
      this.isInstantiated = true;
    }

    // Options de synchronisation des bases de données
    const options = {
      live: true,
      retry: true,
      continuous: true
    };

    // Base de données serveur unique
    const remoteDb = 'http://localhost:5984/node-chat';

    // Syncronisation des bases de données remote et client
    this.db.sync(remoteDb, options);
  }

  ionViewDidLoad(){
    
  }

  // A l'initialisation du composent
  ngOnInit() {
    // On recupere les données locales
    this.db
      .allDocs({
        include_docs: true // Recuperation du contenu des docs
      })
      .then(result => {
        // Si ya un changement en local
        this.db
          .changes({
            live: true,
            since: 'now',
            include_docs: true
          })
          .on('change', change => {
            // Trigger la fonction handleChange pour actualiser le dom
            this.handleChange(change);
          });

        // Parsing des resultats dans une map
        /*result.rows.map(row => {
          console.log(row.doc);
          // Push des données dans notre variable message
          this.messages.push({
            author: row.doc.name,
            content: row.doc.content
          })
        });*/
      });
  }

  // Pour chaque nouveau message
  public newMessage() {
    // On crée un nouveau document en local (qui va se syncroniser avec la bdd serveur)
    this.db.put({
      _id: Date.now().toString(),
      name: 'David', // TODO : Recuperer le pseudo du mec via son token
      content: 'yo' // TODO : Recuperer le message tapé
    });
  }

  // Actualisation du DOM
  public handleChange(change){
    console.log(change.doc);
    this.messages.push({
      author: change.doc.name,
      content: change.doc.content
    })
  }
}
