## pencil & paper
The exercise of wireframing can help loosen the need for a grid. While wireframing is still bound to the size of any one artboard, the lack of precision helps flesh out the important concepts of the general experience without losing focus on other design minutiae. While you could wireframe against a snappy program, it’s often faster to less expensive (both in time and money) to draw on paper. Sending a photo of the drawing for getting quick feedback on the general layout and flow of your designs will result in more concise comments. It might not be as technologically advanced as other methods, but tech can get in the way of communicating the foundational experience to your partners.

::: example
<ex-wireframe></ex-wireframe>
:::

---

## content-driven design
Now, consider what may happen when button text is more than one word, or perhaps a very long word. Think about localized words or flipping the layout for audiences that read right-to-left. Increases in font-size for vision-impared users need to be in mind. All of these things can affect the way that a component might look because the change will happen from the innermost layer of components. If the layout of the component should shift to accommodate different content, be sure to document this. Layouts shouldn’t shift because of the device size, it should shift due to the content not fitting in the current layout.

::: example
<ex-buy-now></ex-buy-now>
:::

It’s helpful to think of these things as individual components; perhaps from a design system. Each component can be a self-contained experience that adapts to changes based on the parent container it is placed into. A good example could be a navigation bar that collapses overflow items into a flyout menu. Longer words in the navigation will cause the overflow to trigger earlier than shorter words. A well crafted reusable component will have these rules self-contained and not dependent on other elements or the page itself to change.

::: example
<ex-collapse-nav></ex-collapse-nav>
:::

From here, very few components can be constrained to align to an overlaid design grid. This is due to the content variations within these components and the ways that they can be altered by other stakeholders and users that will eventually need to flow outside of a design grid.

---

## gestalt principles
There’s a few different amounts and naming conventions of the following principles that designers use in order to group parts of a page together into a cohesive experience. For the purposes of avoiding the use of a design grid, only a few are covered here.

Possibly the most important principle for our purposes, proximity, shows that objects which are close together are often related. The opposite is also true, where providing more space between objects will give the impression that they are not related even if they share other qualities. This is commonly translated into the space between components. A row of buttons may have a smaller amount of space between each than different sections of a dashboard.

::: example
<ex-proximity></ex-proximity>
:::

Another principle, continuity, helps with alignment without requiring a design grid. If you aim to align components along invisible guidelines, the user will naturally guide their eye down this line. As long as you attempt to align objects along some axis, the user will find comfort and trust in the experience.

::: example
<ex-continuity></ex-continuity>
:::

---

## spacing and dimension values
Consider a button with a 1px border, line height of 16px, and 12px of padding. A precarious question would be, does the border contribute to the outside shape of the button or the inside shape? In other words, is the height of the button 40px (does not include border) or 42px (includes the border).

::: example
<ex-border-on-grid show-grid="true"></ex-border-on-grid>
:::

If you have a strict design grid which expects components to be confined into specific lines, you may find that the borders of components will slightly shift all of your alignment by a few pixels. At this point you may consider applying some unpredictable pixel shifts of your own, falling more into dangerous territory just to keep a strict grid in place for users who probably won’t notice the pixel differences when trying to complete a task.

::: example
<ex-border-on-grid></ex-border-on-grid>
:::

Keeping general alignment and common spacing values will raise less questions and uncommon behavior while still maintaining a clean and aesthetically pleasing layout.

It is recommended to keep the number of possible spacing values low. One reason is to limit decision making for which value to use. A designer should identify if items belong together and then consider using smaller spacing values to signify this. If there’s many small spacing values, it’ll be difficult for a designer to choose which one should be selected; even with available guidance. Using the same spacing values between components may often provide the illusion of a design grid just by the common internal spacing applied.

::: example
<ex-spacing-values></ex-spacing-values>
:::

Designers should also consider containers in terms of percentage of the parent instead of how many grid columns are expected. When designing a form for example, instead of describing that the fields should span 6 out of 12 columns, describe that the fields span 50% of the width of the container. It’s important to relate the size of the component to the container instead of the page as that is how a developer will ultimately need to implement it. When the field layout needs to change between desktop (6 out of 12 columns) to tablet (4 out of 8 columns), the ratio is still the same (50%).

::: example
<ex-column-percent></ex-column-percent>
:::

Some percentages could become ugly (4/12 &asymp; 33.333%), however engineers have the ability to compute these calculations in native CSS cleanly as `calc(4/12 * 100%)` or `calc(100% / 3)` so gaps are filled without missing decimal precision.

There are modern tools developers can use to include the reusable spacing values to assist in the appearance of a design grid without actually corresponding to one.

[How might we execute these recommendations?](/for-developers)