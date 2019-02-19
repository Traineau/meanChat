/* 
Import
*/
    //=> Gestion des variables d'environnement
    require('dotenv').config();
    //=> Gestion server
    const express = require('express');
    //=> Gestion du dossier client
    const path = require('path');
    //=> Gestion du moteur de rendu
    const ejs = require('ejs');
    //=> Gestion du corps des requêtes HTTP
    const bodyParser = require('body-parser');
    //=> Gestion des cookies
    const cookieParser = require('cookie-parser');
    //=> Connexion BDD mongo
    const mongoDbConnect = require('./services/mongodb.serv');
    // => Connexion bdd couch
    const couchDbConnect = require('./services/couchdb.serv');
    //=> Router
    const mainRouter = require('./routes/main.router');
//

/* 
Configuration
*/
    //=> Définir le server et le port (.env)
    const server = express();
    const port = process.env.PORT;

    //=> Configurer le server
    class ServerClass {
        init(){
            //=> Moteur de rendu
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );
            
            //=> Dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            //=> Cookie-parser
            server.use(cookieParser());

            //=> Router
            server.use('/', mainRouter);

            //=> Lancer le server
            this.launch();
        }

        launch(){
            // Connecter la BDD mongo
            mongoDbConnect()
            .then( db => {
                // Start server
                server.listen( port, () => {
                    console.log({
                        monngo: `BDD is connected ${db}!`,
                        server: `Server listening on port ${port}!`
                    });
                });
            })
            .catch( err => console.log(`Error MongoDB ${err}`) );

            // Connecter la BDD couch
            couchDbConnect()
            .then(db => {
                console.log({
                    couchDb: `couchDb is connected ${db}!`
                });
            });
        }
    }

//
/*
Start server
*/
    new ServerClass().init();
//