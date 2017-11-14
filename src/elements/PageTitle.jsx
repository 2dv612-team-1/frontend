import styled from 'styled-components';
import colors from '../constants/colors';


const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  text-align: ${props => (props.center ? 'center' : 'left')}
`;

export default PageTitle;
