# What is this

This is a program to fetch various price periodically.

# Prepare

Prepare `.env` file with following content.

```
INFURA_API_KEY="INFURA API KEY"
```

```
yarn install
yarn generate-types
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