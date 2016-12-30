
# Status Pill

The **status pill** component is a way to communicate status of various application functions.

## Use

To use the **status pill** component, use the @extend `.status-pill` within the SCSS.
```
.activity_log-item-error,
.activity_log-item-success,
.activity_log-item-warning {

  &::before {
    @extend .status-pill;
  }```
