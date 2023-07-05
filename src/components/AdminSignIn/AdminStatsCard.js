import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display:flex;
  justify-content:space-between;
`;

const CardHolder = styled.div`
  border-radius: 4px;
  height: 20vh;
  width:250px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Count = styled.h1`
  font-size: 4.5rem;
  font-weight:900;
  color:white;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight:400;
  max-width:130px;
  margin: 0;
  text-align:center;
  color:#aaa6a0;

`;

const AdminStatsCard = ({ title, count }) => (
  <Card>
    <CardHolder>
      <Count>{count}</Count>
      <Title>{title}</Title>
    </CardHolder>
  </Card>
);

export default AdminStatsCard;
