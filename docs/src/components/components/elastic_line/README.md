
# Elastic line

The **Elastic line** component is meant to display a line of data, usually in a
[Complex list](/components/detail/complex_list), in a flexible and responsive
manner. It allows the user to shift items to the left or right. The items will
grow from the left or right until they meet eachother in the middle. The list
supports individual data items that are more then one line.

## Use

To use the **Elastic line** giv a div or any sectional element in a `elastic_line`
class. To make a section of the line align to the left, wrap the element in a
`elastic_line-item` class. This class can be given to any kind of element or can
be added to a div to wrap the content. To align an item to the right, do the same
but give the element a `elastic_line-item-end` along with the standard `elastic_line-item`.
This means that by default, `elastic_line-item` aligns to the left and this can
be overridden to align right with `elastic_line-item-end`.
