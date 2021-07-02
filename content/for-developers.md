## embrace the space

One of the best ways to achieve an aesthetically pleasing layout is to have a set of reusable spacing variables on a steady scale. The values for these variables should be informed by design but ultimately managed in code. 

::: example
<ex-spacing-values></ex-spacing-values>
:::

While there are several different units that you can use for spacing, `rem` units should work best. Using `rem` units relates the spacing to the font size at the root of the document. So as the user zooms in and out, the spacing will also adjust to relate to that zoom. One of the downsides of rems is the conversion between design applications and code. Since the unit relates to font size, sometimes it’s difficult to completely visualize what the result of this unit will be; especially when the font size is altered from a default `16px`. While some techniques recommend adjusting the root font size to make the conversion easier, this can cause unexpected side-effects. If you need to translate `px` into `rem`, you can use the following calculation.

::: example
<ex-px-rem></ex-px-rem>
:::


The next best spacing unit to use is pixels, as there is no conversion necessary from design applications to code. A serious detriment is the inability for pixels to adjust with zoom, so as your text size increases due to user preference, the space might not unless using the formula above. Relationships between elements may become tighter. Also, divisions into a reusable scale might be more challenging. `1rem` is `16px` and `2.5rem` is `40px`. The divisions tend to be cleaner in rem when the scale is limited. If you’ve decided to have more than a dozen divisions, you may consider pixels instead. One more note; all of the other absolute values in CSS are based off of the pixel (`cm`, `in`, etc.), so choosing one of these values will eventually be similar to choosing pixels.

Spacing using `em` is more challenging to manage as this unit relates to the current font size of the element. For example default headings will provide a larger size using `em` units than paragraphs. This could deliver unintended results; spacing could become irregular even if the spacing variables are the same.

::: example
<ex-em-sizing></ex-em-sizing>
:::

The `em` units should only be used to relate to the font size of the elements they are applied with. This goes for all of the units that relate to the current font size (`ex`, `ch`, etc.).

The last unit to cover that you could apply to spacing is percentage which will often give radically different results. A percentage-based margin or padding is based on **the parent’s width**. The areas where you might use percentage base width are rare but certainly not meant to be reusable spacing values.

::: example
<ex-percentage-sizing></ex-percentage-sizing>
:::

Viewport units (`vw`, `vh`, etc) might be slightly more predictable but not as consistent as other approaches described above.

---
## max, min, and margin auto

Often as designers craft experiences and developers code, we become concerned with what happens at smaller screen sizes. We should also consider what happens at larger sizes such as ultrawide monitors. For these layouts, we should consider setting a maximum width that the main container should be constrained in and then justify that container horizontally in an appropriate way; perhaps centered for example. Modals are a common component where this could be executed, ensuring that the content area doesn’t span the entire width of a monitor until in smaller viewports. Some guidance recommends restricting lines of text to less than 80 characters for readability; this is something that could be set using a maximum width.

Setting a minimum width is often less desirable as this restricts the content that could appear inside of these containers. However, exceptions do exist. Setting a minimum width on a text input could ensure a value is visible no matter the current layout while otherwise stretching to fit.

Often space is used to align and justify elements within containers. A simple method to place elements is to apply an auto margin to one or more sides of a child element. A modal can be centered in its backdrop by setting auto on the left and right margins. A call-to-action button can be pushed to the bottom of a card by setting an auto margin on the top of the element. There is no need to explicitly set an amount of space, the space is driven by the content and relationships between elements with given rules.

---
## flexbox and beyond

After many years of hacking together web designs using tables and floats, flexbox was introduced which significantly changed the way we handle layout today. Flexbox gives developers the ability to lay out containers and content with precise alignment. Developers can now place boxes along the bottom, top, or center of a container in a row or column layout. The flexbox collection of CSS properties makes the holy grail layout simple, setting the footer at the bottom of the page no matter how much content is provided.

Flexbox is perfect for aligning a row of buttons or links in navigation, each with an even amount of space or by a systematic variable. It’s also helpful for filling an amount of remaining space with a new container, perhaps for allowing a text input to span available room. Anywhere you might lay elements in a single dimension, you should prepare to use flexbox tools.

Soon after the release of flexbox to modern browsers, the grid display value was introduced which aimed to help developers place children in two dimensions along columns and rows. While the concept does work somewhat similarly to the very design grid we aim to dismiss, there are several caveats that are notable.

The CSS grid property only affects the direct children of the grid container element. This means that the parameters of the grid cannot inform further descendants in the element tree. This means you cannot span an element over columns or rows of the grid unless it is a direct child of the grid or you somehow reapply the grid lower in the tree. Reapplying the grid may prove difficult if the lower grid only spans a few columns of the upper grid; they simply cannot inform each other.

While the previous description seems like the CSS grid has a disadvantage, there is an advantage in using the CSS grid over common design grids. The CSS grid syntax allows children to reflow into new columns as needed. Columns can be informed about their size by the content in their children or a fractional amount of available space. This technique is very powerful for card layouts, allowing cards to be as big as a specified column allows and wrapping to the next row when it might become too small.

One of the big questions for average CSS developers is should you use flexbox or grid? The answer comes from asking another question, do you need to place items in one dimension or two? For one dimension, flexbox is probably the answer. For two dimensions, grid is probably the answer. There are exceptions; it might be helpful to wrap flexbox items to additional lines or overflow a row of grid items outside of the container. Getting to know the tools in your toolbox will improve CSS skills and find new creative ways of solving layout problems.

---
## breakaway from breakpoints

The concepts of responsive design introduced the idea of breakpoints; conditional statements in CSS that allowed adjustments to occur when the page metadata changed. The most common media queries relate to the dimensions of the viewport. This opened up the possibility for one page of content to have different layouts, responding to the viewport size. The problem with this approach is it goes against content-first design. Content should be dictating the layout and layout should adjust to the available space. This means that smaller components of the page need to respond to the size of their closer ancestors. Changing the layout of buttons in a card isn’t because the page size is small, it’s because the card size is small.

While native ways of querying container size in CSS are coming, there are tricks to make some layouts become smarter. One of these tricks exploits negative dimension values against some threshold. There are different names for the technique, Rémi Parmentier calls it the Fab Four technique (2016), Heydon Pickering has called it the Holy Albatross (2019) but the results are the same. You poll the dimension of the parent’s width by percentage, and subtract it from a container breakpoint value and then scale that value significantly so it becomes very large in either a positive or negative direction. Then you set thresholds for a minimum and maximum width so positive values hit the maximum width and negative values hit the minimum width.

This solves the common problem of setting items normally in a row to stack when the container is too small.

If this trick doesn’t give you the desired result, you should truly consider all other options before using a breakpoint. Ask, is the component expected to always be related to the page size (headers, modals, etc.)? Then a breakpoint might be acceptable. However, components that are placed deep within the page should not be using breakpoints to inform their layout. JavaScript, specifically the ResizeObserver constructor, can also help poll a particular container’s dimensions and inform other elements. This might be a more scalable solution than setting a media query, although it’ll be running on the call stack with other JavaScript so performance might be an issue for complex applications.
