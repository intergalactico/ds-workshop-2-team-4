import styled, { css } from 'styled-components';

/*
 * One styled-component can re-use styles from another. The TeamMember
 * styled-component takes the styles from the Typography component
 * and re-defines them.
 */
import * as ts from '../Typography/styles';

import colors from '../Colors/colorset';

const getWidth = ({ itemWidth }) => {
  if (!itemWidth) return;
  return css`
    ${`flex: 1 1 ${itemWidth}%`}
  `;
};

export const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 2% 0;
  ${getWidth}
`;

/*
 * By analogy to defining an HTML tag and styles for an element,
 * in styled-component you can take an already defined element and
 * provide additional styles to it. It will use the tag of initial
 * elements.
 */
export const Title = styled(ts.Header3)`
  height: 50px;
`;

export const TeamMemberInner = styled(ts.P)`
  width: 200px;
`;

export const TeamMemberDescription = styled(ts.P)`
  text-align: left;
`;

/*
 * The colors can be takes from the set and used as variables.
 */
export const IconList = styled.ul`
  color: ${colors.grey};
  font-size: 16px;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

export const IconListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

export const IconLink = styled.a`
  color: ${colors.grey};
  text-decoration: none;
`;
