# core-input

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `autofocus`     | `autofocus`      | Boolean attribute lets you specify that a form control should have select focus when the page loads.                                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`     |
| `disabled`      | `disabled`       | If `true`, the user cannot interact with the element.                                                                                                         | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`     |
| `label`         | `label`          | The label element associated with the element.                                                                                                                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |
| `labelColor`    | `label-color`    | Optional color of the label (inherited). Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. | `"green" \| "yellow" \| "red" \| "blue" \| "white" \| "black" \| "blue-light-4" \| "blue-light-3" \| "blue-light-2" \| "blue-light-1" \| "blue-dark-1" \| "blue-dark-2" \| "blue-dark-3" \| "blue-dark-4" \| "green-light-4" \| "green-light-3" \| "green-light-2" \| "green-light-1" \| "green-dark-1" \| "green-dark-2" \| "green-dark-3" \| "green-dark-4" \| "yellow-light-4" \| "yellow-light-3" \| "yellow-light-2" \| "yellow-light-1" \| "yellow-dark-1" \| "yellow-dark-2" \| "yellow-dark-3" \| "yellow-dark-4" \| "red-light-4" \| "red-light-3" \| "red-light-2" \| "red-light-1" \| "red-dark-1" \| "red-dark-2" \| "red-dark-3" \| "red-dark-4" \| "gray-1" \| "gray-2" \| "gray-3" \| "gray-4" \| "gray-5" \| "gray-6" \| "gray-7" \| "gray-8"` | `"gray-8"`  |
| `labelDisplay`  | `label-display`  | Sets the optional label to `inline` or `block` style [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).                        | `"block" \| "inline"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `"block"`   |
| `labelPosition` | `label-position` | The label element position.                                                                                                                                   | `"left" \| "right"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `"left"`    |
| `required`      | `required`       | If `true`, the user must fill in a value before submitting a form.                                                                                            | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`     |
| `size`          | `size`           | Apply the large pre-defined element size and styling.                                                                                                         | `"large"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |


## Dependencies

### Depends on

- [core-icon](../core-icon)

### Graph
```mermaid
graph TD;
  core-select --> core-icon
  style core-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*