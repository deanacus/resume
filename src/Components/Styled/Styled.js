import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
`

export const Separator = styled.hr`
  ${({theme}) => theme.margin.my[4]}
  border: none;
  background: #bbb;
  height: 1px;
`;

export const PaddedLink = styled.a`
  display: inline-block;
  ${({theme}) => theme.padding.pr[1]}
`;

export const DateTime = styled.time`
  color: ${ ({theme}) => theme.colours.charcoal.lightest };
  display: inline-block;
  ${({theme}) => theme.padding.px[1]}
`;

export const FlatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const FlatListItem = styled.li`
  ${({theme}) => theme.padding.pr[4]}
`;

export const JobTitle = styled.h3`
  ${({theme}) => theme.margin.mb[1]}
  ${({theme}) => theme.padding.pb[0]}
`;


export const JobSubTitle = styled.h4`
  ${({theme}) => theme.padding.p[0]}
  ${({theme}) => theme.margin.m[0]}
`;