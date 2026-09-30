# Budget Tracker

## Project Description

This project is a simple Budget Tracker created using HTML and CSS.

It allows users to enter expenses and displays sample expenses in a structured table. The project also includes multimedia content, a collapsible instructions section, and advanced CSS selectors.

## Project Files

### index.html

The `index.html` file contains the structure of the Budget Tracker.

It includes:

- A page heading and budget icon
- An Add Expense form
- Expense name, amount, category, and date inputs
- A category dropdown with five options
- An Add Expense button
- An expense table containing five sample expenses
- A collapsible "How to use this tracker" section
- An embedded YouTube budgeting video
- A footer

### style.css

The `style.css` file controls the appearance of the Budget Tracker.

It includes:

- Page and section styling
- Table borders and spacing
- A colored table header
- Alternating table row colors
- Table row hover effects
- Button styling
- Input focus styling
- Responsive video sizing
- Advanced CSS selectors

## Advanced CSS Selectors Used

The project uses more than three advanced selectors required by the assignment:

1. **Descendant selector**
   - `.expenses-section td`
   - `.expenses-section th`

2. **Direct child selector**
   - `.add-expense-section > h2`

3. **Position pseudo-class**
   - `tr:nth-child(even)`

4. **Negation pseudo-class**
   - `input:not([type="submit"])`

5. **Focus pseudo-class**
   - `input:focus`
   - `select:focus`

6. **Hover pseudo-class**
   - `.expenses-section tbody tr:hover`

## Multimedia

The project includes:

- An image using the `<img>` element with `src`, `alt`, and `width` attributes.
- A YouTube video using an `<iframe>` with `width`, `height`, `title`, and `frameborder` attributes.

## Future Improvements

JavaScript can be added in future weeks to make the Add Expense button functional and allow users to dynamically add expenses to the table.
