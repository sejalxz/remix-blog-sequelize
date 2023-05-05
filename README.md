# PostIt

## blog-post app

In the project directory:

### Usage

Rename .envexample to .env and change session secret

Install dependencies

```sh
npm install
```

Load .env variables

```sh
sequelize model:generate --name [ModelName] --attributes [attribute1]:[DataType], [attribute2]:[DataType],...


```

Run dev server

```sh
npm run dev
```

### Sequelize Commands

1. command to create seeder file

```
sequelize seed:create --name blog-seeder
```

or

```
sequelize seed:generate --name <name_of_file>
sequelize seed:generate --name blog-seeders
```

2. commad to generate seeds

```
sequelize db:seed:all
```
