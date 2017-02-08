
# Complex list

The **Complex list** UI allows to style nested or complex data in a consistent
format. It's main purpose is to display data from Cloud Foundry such as orgs,
spaces, apps, services, routes, etc. The list will be rendered in a specific way
with lines separating items and nested lists indented. The list can include a header.
This will render a small, bold title for the list above the items.

## Use

To use the **Complex list**, wrap a div in a `complex_list` class. For each item
of the list, wrap the item in a `complex_list-item`. Any type of element can
be wrapped in a `complex_list-item` such as `h` tags, `span`s or `div`s.

To nest a complex list, add another complex list div after the list item where
the nesting should occur. The nested complex list should not be placed inside
the list item, but after it at the same level.

To use a complex list header, add a `header` element at the begining of the
complex list, before any complex list items, with a class of `complex_list-header`.
This `header` can now include any text element such as `h`.

## Semantics

The complex list does not make use of the standard `ul` element because the
header element is not considered a list item. It would also cause problems when
nesting a complex list, as it is also not a list item.

