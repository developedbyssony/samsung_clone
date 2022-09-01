import styled from '@emotion/styled';
import { useState } from 'react';
import './App.css';
import Card from './components/Card.tsx';
import Edit from './components/Edit.tsx';

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap:wrap;
  align-items:center;
`;

const PlusCard = styled.div`
  display: flex;
  align-items:center;
  justfy-contents:center;
  font-size:48px;
  border: 1px solid #ddd;
  width: 80px;
  height: 80px;
  line-height:48px;
  padding-bottom:8px;
  box-sizing:border-box;
  cursor:pointer;
  margin:80px 80px;
`;

function App() {
  const [mode,setMode] = useState<'edit' | 'view'>('view')
  return (
    <>
    {
      mode === "view" && 
        <CardContainer>
          <Card title="hello"/>
          <Card title="hello"/>
          <Card title="hello"/>
          <Card title="hello"/>
          <PlusCard onClick={() => setMode("edit")}>+</PlusCard>
        </CardContainer>
    }
    {
      mode === "edit" && <Edit />
    }
    </>
  );
}

export default App;
