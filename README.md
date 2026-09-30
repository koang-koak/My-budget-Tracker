# SpendWise - Budget Tracker (Week 2 Upgrade)

## Overview
SpendWise is a static personal finance tracker built with HTML5 and CSS3. This version expands on the foundation created in Week 1 by introducing tables for structured expense tracking, an upgraded form with category options, interactive elements, multimedia, and advanced CSS selection techniques.

---

## Features Implemented

### 1. Expense Table
* Structured using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.
* Styled using `border-collapse: collapse` and alternating row background colors (`tr:nth-child(even)`).
* Includes a subtle background highlight on row hover (`tr:hover`).

### 2. Upgraded Expense Form
* Wrapped in a proper `<form>` container.
* Added a `<select>` drop-down list with 5 category options: *Food, Transport, Rent, Entertainment,* and *Other*.
* Inputs feature distinct, matching `id` attributes ready for JavaScript integration.
* Interactive submit button with `cursor: pointer`.

### 3. Multimedia & Interactive Elements
* **Logo Image (`<img>`):** Displayed next to the main header with descriptive `alt` text.
* **Budgeting Video (`<iframe>`):** An embedded YouTube video offering financial advice.
* **Collapsible Help (`<details>` & `<summary>`):** Explains how to navigate and use the application.

### 4. Advanced CSS Selectors
* **Descendant Selector (`.expenses-section td`):** Applies padding and alignment to all data cells inside the expenses section.
* **Direct Child Selector (`.add-expense-section > form`):** Directs flexbox styling specifically to forms that are immediate children of the section.
* **Positional Pseudo-Class (`tr:nth-child(even)`):** Creates alternating background shading across table rows.
* **Focus State Pseudo-Class (`input:focus`):** Provides visual confirmation when input fields are active.

---

## How to View
1. Clone or download this repository.
2. Open `index.html` directly in any web browser.