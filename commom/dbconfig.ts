export const dbConfig = {
    type: (process.env.DB_TYPE || 'postgres'),
    host: (process.env.DB_HOST || 'localhost'),
    port: (parseInt(process.env.DB_PORT, 0) || 5432),
    user: (process.env.DB_USERNAME || 'postgres'),
    pass: (process.env.DB_PASSWORD || 'admin'),
    database: (process.env.DB_DATABASE || 'garcomvirtual'),
    url: (process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/garcomvirtual')
  };
