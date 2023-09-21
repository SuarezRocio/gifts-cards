import styled from 'styled-components';

export const GifCardWrapper = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const GifList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`;

export const GifItem = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;
