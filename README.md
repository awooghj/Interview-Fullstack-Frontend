# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Backend API Adjustment

請修改此 project 內的API地址從

```sh
const response = await axios.get('http://localhost:8080/api/votes/items');
```

改成

```sh
const response = await axios.get('http://localhost:xxxx/api/votes/items');
```
修改 `xxxx`， 根據後端所運行的port做更改，如 `8081`, `8080`...

### Compile and Hot-Reload for Development

```sh
npm run dev
```
