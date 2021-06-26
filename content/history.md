## a grid by any other name
The term "grid" in web design can mean a few different things. For the purposes of the following observations and examples we'll be referring to the grid used for user interface (UI) design to layout a web page or application. Other examples of the word "grid" in web design include:

- The CSS property-value pair `display: grid` used to modify the layout behavior of an element's children.
- Tables, also known as data grids, which show information in rows and columns.
- A vector grid used to design fonts, icons, and illustrations used to keep lines from antialiasing when glyphs are resized.

This thesis is only recommending the elimination of the layout grid in web design.

---
## a tale as old as design
The use of a design grid dates back to writing on parchment. Lines would help an author to keep each word, sentence, and paragraph positioned properly in a visually pleasing way. Later, more stylistic designs used a grid to represent content in interesting ways on other print material such as posters, billboards, and flyers. In these examples, the content and the layout are connected together. The content and final layout are both in complete control of the author; they cannot not change based on the person viewing the content because of the nature of print. Once it's printed, it's permanent to that page as intended by the author.
The introduction of the web was to first make research papers link to each other digitally. Additional methods were added in code to allow for more document customizations. People began to use these tools in unintended ways to achieve different layouts. HTML tables and floating columns became standards of web design layout and a concept of responsive design was on the horizon.

Around this time, the web was not just viewed on desktop computers. Mobile web browsers began to appear on handheld devices and it was becoming common for people to access the web on-the-go. The web pages that were designed for desktop computer screens were too small to view on mobile devices. So if the website had the resources, they would often create an entirely separate site to deliver to mobile devices. This would require the web developer to maintain separate desktop and mobile experiences. This came at a cost of maintaining duplicate content and separate layouts for each page.

What if, instead of maintaining different layouts for the same content, each page was coded to conditionally respond to the device's screen size? This is the basis behind responsive design and it changed the way web authors worked. Now, a developer can maintain a single page and create rules for how the parts of the page should change based on the available space. With this complexity came challenges for the way designers have been working for centuries. How do you design the same content for all possible devices?

---

## the web is not print
Remember, prior to responsive design, the content of the page and its layout were intertwined. The designer was solely in charge of both. With the introduction of the web and a completely different skill set, it was common for designers to hand off their work to be coded as an interactive web page. This required the web developer to interpret the design in code which often resulted in varying levels of fidelity. One of the reasons for this is how an HTML page expects content.

HTML was designed for writing documents; paragraphs of text with headlines and some images. It was as useful as a slightly advanced typewriter. It was not engineered to place elements arbitrarily around the document. It expects content to flow as a typewriter would set text line after line. In order to place content in visually interesting ways outside of normal document flow, like in a grid, engineers would need to get creative in order to match design's expectations. Luckily, HTML matured to allow for nested containers and relationships between elements for the exclusive purpose of layout were explored. This problem was circumvented with new techniques but problems with the core web design process still exist today.

Most applications that designers use to create modern web pages are no better than a digital piece of paper. They do not accurately describe what a web page expects; most specifically in terms of responsive design. So designers are often confined to specific artboard dimensions without the ability to see the in-between sizes or content changes based on language or accessibility preferences. Each design is locked as a single experience and a single grid for alignment. In order to display a new layout, a new artboard is created in the design tool with a grid that fits that artboard. Designers will then duplicate and resize the elements to fit the new artboard's grid. This is not the essence of responsive design, it is actually the same technique used in print for centuries.

The web is different. Content can change based on user preferences and device settings. Engineers craft reusable components that can adapt to their content. No designer can prepare for all potential layouts. Instead, a seasoned designer should make decisions that inform what the parts of the layout should do if and when certain scenarios occur. The design tools today have difficulty presenting this so it is often up to an engineer to ask the right questions to understand the designer's intent. Here's a small sampling of possible changes that could occur which are often overlooked when crafting an experience.

- Text length varying based on language translation
- Font size varying based on character encoding and accessibility settings
- Color contrast varying based on user preferences
- Layout flipping in right-to-left languages
- Content varying based on user input
- Other elements changing size to accommodate the above examples

One of the ways that bridged the gap between artboards and the web was to conditionally change the layout based on the device's screen dimensions. An engineer could include additional rules, commonly known as “breakpoints”, that conditionally applied layout changes based on the size of the screen. The dimensions set to trigger these changes were often popular device sizes which designers would also use as artboard sizes. This seemingly kept web design and engineering in unison but in reality, it only forced the web to be explicit in layout and dimension again. Now engineers were coding specific layout changes to occur based on the given artboards. As stated before, no designer can anticipate all possible layouts. Nor should an engineer attempt to code layout exactly as specified by design.

To be clear, style properties such as color and typography should often be followed to design specifications by an engineer. However, layout must be interpreted in order to provide a smart responsive design. No design tool is yet able to provide guidelines for a proper responsive approach which prepares for all possible content and dimension changes. This comes with experience as a skilled web engineer since these specifications cannot easily be represented as guidelines within design tools.

Another problem with breakpoints is they are only related to the device's screen dimensions. Initially, one may believe that if you change the page layout at a breakpoint, smaller layouts that are related to the larger layout can change along with that breakpoint. Again, this is the same pattern as print layout; one layout for one specific set of dimensions. However, the trouble is compounded because developers have not had the tools to trigger layout changes from anywhere but the page (or artboard) level. If HTML elements were able to make significant layout changes based on the container they are in, as required to make visually interesting layouts in HTML, then a designer would not need to consider each page layout as a whole but instead the rules of the components inside of different size containers. Designing at the atomic level first with an understanding that the content can change will help inform larger layouts that may never be fully realized by a designer but still remain an accessible and well-designed experience.

[How might we tackle these challenges?](/for-designers)
