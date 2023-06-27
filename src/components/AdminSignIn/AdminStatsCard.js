import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 4px;
  height:200px;
  width:200px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Count = styled.h1`
  font-size: 4.5rem;
  font-weight:900;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight:400;
  max-width:130px;
  margin: 0;
  text-align:center;

`;

const AdminStatsCard = ({ title, count }) => (
  <Card>
    <Count>{count}</Count>
    <Title>{title}</Title>
  </Card>
);

export default AdminStatsCard;
