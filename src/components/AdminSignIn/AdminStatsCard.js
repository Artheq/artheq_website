import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Count = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const AdminStatsCard = ({ title, count }) => (
  <Card>
    <Count>{count}</Count>
    <Title>{title}</Title>
  </Card>
);

export default AdminStatsCard;
