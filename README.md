# React Markdown Table

react-markdown-table is a React component library for generating and previewing markdown tables.

## Installation

```bash
npm install react-markdown-table
```

## Usage

```tsx
import React from 'react';
import MarkdownTable from 'react-markdown-table';

const data = [
  ['Planet', 'Distance', 'Gravity'],
  ['Mercury', '57.9 million km', '3.7 m/s²'],
  ['Venus', '108.2 million km', '8.9 m/s²'],
  ['Earth', '149.6 million km', '9.8 m/s²'],
];

const App = () => {
  return (
    <div>
      <MarkdownTable data={data} /> {/* <MarkdownTable data={data} view={false} /> */}
    </div>
  );
};

export default App;

```

## Props

- `data` (required): An array of table data. The first element represents the table header, and the rest are data rows.
- `view` (optional): A boolean flag to control the view mode of the table. Set to true (default) to display the table, 
  or set to false to hide the table and only show the copy button.

<br>

## License

This project is licensed under the MIT License. 