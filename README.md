Тестовое задание для компании "Valantis"

Ссылка: https://thereareloveyou.github.io/valantis-test/

Необходимо реализовать: 
Используя предоставленный апи создать страницу, которая отображает список товаров.
Для каждого товара должен отображаться его id, название, цена и бренд.

Выводить по 50 товаров на страницу с возможностью постраничного перехода (пагинация) в обе стороны.
Возможность фильтровать выдачу используя предоставленное апи по названию, цене и бренду
Если API возвращает дубли по id, то следует их считать одним товаром и выводить только первый, даже если другие поля различаются. Если API возвращает ошибку, следует вывести идентификатор ошибки в консоль, если он есть и повторить запрос.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
