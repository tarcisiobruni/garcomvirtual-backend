import { dbConfig } from './commom/dbconfig'

export const ormConfig = {
    type: dbConfig.type,
    url: dbConfig.url,
    "entities": [
        "./build/entity/*{.js,.ts}"
    ],
    "logging": true,
    "migrations": [
        "./build/migration/*.js"
    ],
    "cli": {
        "migrationsDir": "./db/migration"
    }
}