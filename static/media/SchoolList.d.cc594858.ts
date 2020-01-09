import React from 'react';
export interface HomeProps {
}
export interface HomeState {
    activeKey: string;
}
export default class Home extends React.PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    tabChange(): void;
    render(): JSX.Element;
}
