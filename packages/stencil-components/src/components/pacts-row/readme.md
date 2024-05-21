# pacts-row



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description             | Type     | Default     |
| ---------- | ----------- | ----------------------- | -------- | ----------- |
| `iconSize` | `icon-size` | Size for the pacts icon | `string` | `'2.5rem'`  |
| `token`    | `token`     | Token name to display   | `string` | `undefined` |


## Dependencies

### Depends on

- [icon-container](../icon-container)
- [pacts-link](../pacts-link)

### Graph
```mermaid
graph TD;
  pacts-row --> icon-container
  pacts-row --> pacts-link
  icon-container --> pacts-svg
  icon-container --> arbitrum-svg
  icon-container --> ethereum-svg
  icon-container --> usdc-svg
  icon-container --> usdt-svg
  icon-container --> wbtc-svg
  pacts-link --> icon-container
  style pacts-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
