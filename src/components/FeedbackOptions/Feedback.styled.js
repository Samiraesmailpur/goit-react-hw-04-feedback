import styled from '@emotion/styled';

// const bgColor = props => {
//   switch (props.title) {
//     case 'good':
//       return 'green';
//     case 'neutral':
//       return 'yellow';
//     case 'bad':
//       return 'red';
//     default:
//       return 'white';
//   }
// };

const Button = styled.button`
  border-radius: 10%;
  margin-top: 10px;
  padding: 7px 14px;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;

  :not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: #4682b4;
    border-color: none;
  }
`;

export { Button };
