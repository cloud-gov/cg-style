---
title: Using utility classes
status: draft
---

Low level base patterns and variables are also expressed as utility classes. Utility classes are static, single-purpose, presentational classes that control only one or two rules. Build the overall style of a component by combining and chaining together multiple utility classes.

Since utility classes are static, they allow you to build new components without altering the production CSS.

**Utility classes should be used for prototyping only. Don’t use utility classes in production code.**


## Anatomy of a utility class

We use statuses to indicate how vetted each component is. A component might go
through these statuses as it is implemented until finally it receives a complete
design an accessibility review.

| base | modifier | value |
| -------- | ------| ------|


## Best practices

Include documentation about where and when this pattern should be used, not just
how to use the pattern.

Are there any known weaknesses of this pattern with respect to usability or
accessibility?
