import React from 'react'

// this is a page with a grid layout of multiple buttons from ShadcnUI buttons
export default function ClientPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button className="btn btn-primary">Button 1</button>
      <button className="btn btn-secondary">Button 2</button>
      <button className="btn btn-tertiary">Button 3</button>
      <button className="btn btn-primary">Button 4</button>
    </div>
  )
}
