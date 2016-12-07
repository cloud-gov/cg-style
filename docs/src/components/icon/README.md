
# Icon

The **Icons** allow for a set of icons to be rendered in a block container or
inline next to text. The icons can be colored as either black or "alt" blue. All
icons are implemented in svg and are served using the svg use:xlink attribute
to specify the specific icon or symbal in the svg sprite file.

Icons can either be used inline by just using the svg or put in a boxed container
called `icon-container` that provides a certain standard spacing and sizing.

## Fill icons

The base set of icons are implemented in svg with strokes. Additionally, there
is a set of icons that are implemented using fills, see [fill icons](/components/detail/icon-fill--default).

## Icon names

All currently available main icons are as follows:

- i-agreement
- i-checked
- i-compass
- i-court
- i-double_arrow
- i-download
- i-export
- i-locked
- i-paperwork
- i-plan
- i-power
- i-search
- i-shipping
- i-user
- i-user_researched

## Use

Icons can be used inline in text or spaced in a standard way with the icon container.

### Inline

Include an svg tag with the `icon` class along with any color modifier classes
such as `icon-alt`. Within the svg tag, the svg `use` tag is used, with an
attribute called `xlink`. The `xlink` attribute has an additonal `href` part of
it so the whole thing looks like `xlink:href`. The value of this attribute should
be the cloudgov svg sprite, `cloudgov-sprite.svg` along with the specific icon
name after a `#`. The icon name should always include the `i-` part. Be sure to
close the `<use>` tag. An example looks like:

```
<use xlink:href="/img/cloudgov-sprite.svg#i-agreement"></use>
```

The path to the cloudgov svg sprite may differ depending on project setup.
