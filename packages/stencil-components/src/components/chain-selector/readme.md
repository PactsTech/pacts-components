# chain-selector



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description              | Type                  | Default     |
| ------------- | -------------- | ------------------------ | --------------------- | ----------- |
| `activeChain` | `active-chain` | The current active chain | `string \| undefined` | `undefined` |
| `chains`      | `chains`       | Chain names to render    | `string`              | `undefined` |
| `iconSize`    | `icon-size`    | Size of chain icons      | `string`              | `'4rem'`    |


## Events

| Event           | Description                          | Type                  |
| --------------- | ------------------------------------ | --------------------- |
| `chainSelected` | Event emitted when chain is selected | `CustomEvent<number>` |


## Dependencies

### Depends on

- [icon-container](../icon-container)

### Graph
```mermaid
graph TD;
  chain-selector --> icon-container
  icon-container --> pacts-svg
  icon-container --> arbitrum-svg
  icon-container --> avalanche-svg
  icon-container --> base-svg
  icon-container --> bsc-svg
  icon-container --> polygon-svg
  icon-container --> ethereum-svg
  icon-container --> dai-svg
  icon-container --> usdc-svg
  icon-container --> usdt-svg
  icon-container --> wbtc-svg
  style chain-selector fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
