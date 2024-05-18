# chain-icon



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                   | Type     | Default     |
| -------- | --------- | --------------------------------------------- | -------- | ----------- |
| `chain`  | `chain`   | The name of the chain for the order processor | `string` | `undefined` |


## Dependencies

### Used by

 - [chain-selector](../chain-selector)
 - [pacts-button](../pacts-button)

### Depends on

- [arbitrum-svg](../arbitrum-svg)
- [ethereum-svg](../ethereum-svg)

### Graph
```mermaid
graph TD;
  chain-icon --> arbitrum-svg
  chain-icon --> ethereum-svg
  chain-selector --> chain-icon
  pacts-button --> chain-icon
  style chain-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
