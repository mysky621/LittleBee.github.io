import { PureComponent } from 'react';
import { CheckboxValueType, CheckboxOptionType } from 'antd/lib/checkbox/Group';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface HomeState {
    indeterminate: boolean;
    checkAll: boolean;
    checkedList: CheckboxValueType[];
    plainOptions: CheckboxOptionType[];
    defaultCheckedList: CheckboxValueType[];
}
export interface OwnerProps {
    schoolId: number;
    schoolName: string | undefined;
    disabledOptions: number[];
    gradeList: Array<SimpleModel>;
    checkedGradeList: number[];
    onChangeCallBack: (checkedList: Array<CheckboxValueType>) => void;
    onCheckAllChangeCallBack: (checkedList: Array<CheckboxValueType>) => void;
}
declare type HomeProps = OwnerProps;
export default class ControllerdCheckBox extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    onChange: (checkedList: any) => void;
    onCheckAllChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
