import { PureComponent } from 'react';
import { UnitGradeModel } from '../../Services/MealStandardService';
export declare type IProps = {};
interface PageState {
    visible: boolean;
    unitGradeList: Array<UnitGradeModel>;
}
export default class UnitGradeModal extends PureComponent<IProps, PageState> {
    constructor(props: IProps);
    onOpen(unitGradeList?: Array<UnitGradeModel>): void;
    onClose(): void;
    render(): JSX.Element;
}
export {};
