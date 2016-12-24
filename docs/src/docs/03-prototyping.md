---
title: Prototyping new patterns
status: draft
---

The pattern library can be used to [develop new
patterns](https://github.com/18F/cg-style/blob/master/README.md) for cloud.gov.

A designer or developer could draft something together in pattern library as
an initial deliverable, then work with developers to bring into production.


## How to add new patterns

See
[docs/src/components/icon](https://github.com/18F/cg-style/tree/master/docs/src/components/icon)
as an example.


### What to avoid

`docs/src/main.css` contains styles specifically for the pattern library. Styles
here should only be used to help conveying the idea of the pattern. For example,
you might have a layout component where on it's own is invisible. Adding border
or background styles to `docs/src/main.css` might help present the pattern.
Avoid overusing `main.css`.


## Utility classes

These low level variables are also expressed as utility classes. Utility classes
allow rapid prototyping without the necessity of altering existing classes or
creating new ones. It allows you to build new components without altering the
production CSS.


## Statuses

We use statuses to indicate how vetted each component is. A component might go
through these statuses as it is implemented until finally it receives a complete
design an accessibility review.

| Status | Description |
| -------- | ---------------- |
| Prototype | Code implementation is in exploratory phase, incomplete and not for use. |
| WIP | Work in progress. Use with caution. |
| Beta | When some design/accessibility reviews have been done and documentation is complete. The component is ready for use. |
| Ready | Accessibility review finished, usability review finished, documentation complete. |
| Deprecated | Component exists only for backwards compatibility and will be removed in the near future. |


## Best practices

Include documentation about where and when this pattern should be used, not just
how to use the pattern.

Are there any known weaknesses of this pattern with respect to usability or
accessibility?
