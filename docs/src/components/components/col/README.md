# Row and Col

**Rows** `<Row>` and **columns** `<Col>` are the fundamental structural components used to build more complicated components.

Rows are parent units to Columns. `Row`s tend to be horizontal elements, with `Col`s as subsections.

As a best practice, control padding and margins within a `Row` or `Col` with the child elements, not with the `Row` or `Col`.

### Props
`Col` accepts the following properties

| Property | Values | Description |
|----------|--------|-------------|
| **flex** | `0`, `1`, `2` | the flex width of a column, with `1` as the standard width. `flex={ 1 }` columns will be columns of even width. `flex={ 2 }` columns will be twice as wide as the base column. `flex={ 0 }` columns fit the width of the column content without flex. |
| **gutters** | boolean | Direct child `Row` components will get 32px vertical gutter |

### Defaults

| Property | Default |
|----------|---------|
| **flex** | 0 |
| **gutters** | false |
