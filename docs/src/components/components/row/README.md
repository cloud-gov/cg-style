# Row and Col

**Rows** `<Row>` and **columns** `<Col>` are the fundamental structural components used to build more complicated components.

Rows are parent units to Columns. `Row`s tend to be horizontal elements, with `Col`s as subsections.

As a best practice, control padding and margins within a `Row` or `Col` with the child elements, not with the `Row` or `Col`.

### Props
`Row` accepts the following properties

| Property | Values | Description |
|----------|--------|-------------|
| **gutters** | boolean | `Col` child components will get 32px horizontal gutter |
| **valign** | `top`, `center`, `bottom` | the vertical alignment of elements in the `Row` |

### Defaults

| Property | Default |
|----------|---------|
| **gutters** | false |
| **valign** | `center` |
