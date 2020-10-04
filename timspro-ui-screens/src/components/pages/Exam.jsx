import React from 'react';
import { Input } from '../common/Input';

function Students() {
  return (
    <div className='exam'>
      <h1>Exam</h1>
      <Input
        type="file"
        placeholder="hello world"
        className="default-input"
        
      />
    </div>
  );
}

export default Students;