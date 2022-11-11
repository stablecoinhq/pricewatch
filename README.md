# What is this

This is a program to fetch various price periodically.

# Prepare

Prepare `.env` file with following content.

```
INFURA_API_KEY="INFURA API KEY"
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

```
yarn install
yarn generate-types
```

## Use db initialization script

Necessary only if you have blank database and have no idea what database username/password should be.

```
mysql -u root -h 127.0.0.1 -P 3306 < init.sql 
```

# Run

```
yarn start
```

# Build binary

```
yarn generate-linux-binary
ls -lha ./pricewatch
```

# Run binary

```
./pricewatch
```