'use client'

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

export const QuillEditor = ({ value, onChange }) => {

  const Quill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])

  return (
    <div>
      <Quill 
        value={value}
        theme="snow"
        onChange={onChange}
      />
    </div>
  )
}