# Image processing API

This project is part of the Udacity Advanced Full-Stack Web Development Nanodegree Program

It's an express server that takes an image that exists in the assets folder and resizes it by the dimensions that the user enter and save it locally. once it's created, it send the edited image to the user back thourgh the api endpoint

## API Reference

#### Create thumb version of image

```http
  GET /api?fileName={filename}&height={height}&width={width}
```

| Parameter  | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `fileName` | `string` | **Required**. filename of the desired image to be resized |
| `height`   | `number` | **Required**. desired height                              |
| `width`    | `number` | **Required**. desired width                               |

### Functionality

-   This will create a thumb version of the image (if it does not exist already)
-   If you change the height or width parameter it will recreate the image

## Scripts

Run prettier

```bash
  npm run prettier
```

Run Eslint

```bash
  npm run lint
```

Run tests

```bash
  npm run test
```

Build the project

```bash
  npm run build
```

Run the application

```bash
  npm run start
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Mahmoud2227/udacity-image-processing-api.git
```

Go to the project directory

```bash
  cd udacity-image-processing-api
```

Install dependencies

```bash
  npm install
```
