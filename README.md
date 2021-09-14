### MOOC-PROJECT

## To run : 
1. From root - docker-compose up (postgres is in the container)
2. From /api - node ace serve --watch
3. Check the ports ! 



PS
model on hash le MDP
@beforesave

dans la migration:

we have to create table between user and cours:
schema, we shall put reference (user.id and cours.id)

in model of User and Cours I add @manyToMany, remember to import Cours and Users, also method Manytomany and manytomany

/// AUTHENTIFICATION /////////

https://docs.adonisjs.com/guides/auth/introduction
npm i @adonisjs/auth
node ace configure @adonisjs/auth

# CREATE: app/Models/User.ts
# CREATE: database/migrations/1619578304190_users.ts
# CREATE: contracts/auth.ts
# CREATE: config/auth.ts
# CREATE: app/Middleware/Auth.ts file already exists
# CREATE: app/Middleware/SilentAuth.ts file already exists
# UPDATE: .adonisrc.json { providers += "@adonisjs/auth" }
# CREATE: ace-manifest.json file

//// create migration : once, only after you are sure all is good, cannot change 
/// if want changes better delete the table from pgadmin and do node ace migration:rollback

To run migration: node ace migration:run

//// Create new table 
1. node ace make:model Step --controller --migration
# CREATE: app/Models/Step.ts
# app/database/migrations/<id>_steps.ts
# app/Controllers/StepsController.ts
2. 

