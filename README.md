# Knockout-popover

## Simple custom binding for KnockoutJS to enable popovers from Twitter Bootstrap.

### Demo:

[Show me the result](http://sstude.com/knockout-popover/)

### Full code

#### Markup for single, or independent popover:

```html
<span data-bind="popover: true" class="ko-popover"
    data-popover-placement="bottom"
    data-popover-title="knockout-popover"
    data-popover-content="Awesome knockout-popover plugin">
        knockout-popover (hover over me :)
</span>
```

#### You can also use popoverOptions to define the properties:

```html
<span class="ko-popover"
    data-bind="popover: true, popoverOptions: { title: 'JS driven title' }"
    data-popover-placement="bottom"
    data-popover-content="Awesome knockout-popover plugin">
       popoverOptions will override 'data-' attribute values
</span>
```

####The "group" of popovers:

```html
<p data-bind="popover: false, popoverOptions: { elem: '.ko-popover'}">
        This is example of how to enable
    <span class="ko-popover"
        data-popover-title="knockout-popover: multiple popovers"
        data-popover-content="Multiple popovers by single knockoutjs binding">
            knockout-popovers
    </span> for all
    <span class="ko-popover ko-popover-info"
        data-popover-placement="right"
        data-popover-title="So, do you like it?"
        data-popover-content="knockout-popover with custom CSS class">
            child elements
    </span>, that have the defined class.
</p>
```

####Options

It supports all [TWBS popover options](http://getbootstrap.com/javascript/#popovers-usage).
You can specify them either from `data-` attributes, or form `popoverOptions: { ... }` binding.