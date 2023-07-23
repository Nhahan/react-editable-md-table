import React from 'react';
import copyIcon from './CopyIcon.svg';
import './index.css';

type TableCell = string | number;

type TableRow = TableCell[];

interface Props {
  data: TableData;
  view?: boolean;
}

type TableData = TableRow[];

const MarkdownTable: React.FC<Props> = ({ data, view = true }) => {
  const copyToClipboard = () => {
    const markdownTable = generateMarkdownTable();
    navigator.clipboard.writeText(markdownTable).then(() => {
      const button = document.getElementById('copy-button');
      if (button) {
        button.classList.add('clicked');
        setTimeout(() => {
          button.classList.remove('clicked');
        }, 1000);
      }
    });
  };

  const generateMarkdownTable = (): string => {
    const rows = data.map(row => `| ${row.join(' | ')} |`).join('\n');
    const headerRow = `| ${data[0].map(() => '--').join(' | ')} |`;
    return `${headerRow}\n${rows}`;
  };

  return (
    <div>
      {view && (
        <div className="markdown-table-container">
          <button id="copy-button" className="copy-button-view" onClick={copyToClipboard}>
            <img className="copy-icon" src={copyIcon} alt="Copy" />
          </button>
          <table className="markdown-table">
            <thead>
            <tr>
              {data[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
      {!view && (
        <button id="copy-button" className="copy-button" onClick={copyToClipboard}>
          <img className="copy-icon" src={copyIcon} alt="Copy" />
        </button>
      )}
    </div>
  );
};

export default MarkdownTable;
