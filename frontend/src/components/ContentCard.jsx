import React from 'react';

export default function ContentCard({ content }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">{content}</div>
  );
}
