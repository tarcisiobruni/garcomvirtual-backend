import { dbConfig } from './commom/dbconfig'

export const ormConfig = {
    "type": dbConfig.type,
    "host": dbConfig.host,
    "port": dbConfig.port,
    "username": dbConfig.user,
    "password": dbConfig.pass,
    "database": dbConfig.database,
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