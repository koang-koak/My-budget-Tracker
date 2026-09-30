# SpendWise Dashboard

## Project Description

SpendWise is a modern personal finance dashboard designed to help users understand and monitor their spending.

This week's project focuses on rebuilding the Budget Tracker layout using CSS Grid and Flexbox. The dashboard uses realistic static financial information and does not contain JavaScript functionality.

## Dashboard Features

The dashboard contains:

- SpendWise sidebar navigation
- Dashboard header
- User profile area
- Available balance summary
- Monthly income summary
- Total spending summary
- Food category
- Transport category
- Rent category
- Entertainment category
- Savings category
- Utilities category
- Recent transactions section
- Spending progress indicators
- Responsive mobile layout
- Light and dark color themes

## CSS Grid

CSS Grid is used for the main dashboard layout.

The desktop layout contains:

- A fixed-width sidebar
- A flexible main content area

Grid is also used for:

- Financial summary cards
- Spending category cards

Example:

```css
.dashboard {
    display: grid;
    grid-template-columns: var(--sidebar-width) 1fr;
}

