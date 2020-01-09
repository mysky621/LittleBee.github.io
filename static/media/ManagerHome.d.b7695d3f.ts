import React from 'react';
import { RouteComponentProps } from 'react-router';
export interface OwenrPrams {
    id: string;
    selectKey?: string;
}
export interface StateProps {
}
export interface HomeState {
    selectKey: string;
    id: number;
    menuMap: Object;
}
declare type HomeProps = StateProps & RouteComponentProps<OwenrPrams>;
export default class Home extends React.PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    selectKey: ({ key }: {
        key: any;
    }) => void;
    getmenu: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
