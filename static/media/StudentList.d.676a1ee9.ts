import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { StudentEditModel } from '../../../Services/StudentService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '../../../Services/IdentityErrorService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    userList: PageContent<StudentEditModel>;
    loading: boolean;
    deleting: boolean;
    currentUser?: UserDetail;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    /**
     * 修改密码结果
     */
    resetPwdResult: ResponseModel;
}
export interface HomeState {
    searchParams?: Pagable;
    schoolId: number;
}
export interface DispatchProps {
    feach: (values?: Pagable) => void;
    delete: (values: number) => void;
    resetPwd: (values: number) => void;
    getSchoolList: () => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    cleanGradeList: () => void;
    cleanClassList: () => void;
    cleanresetPwd: () => void;
}
declare type HomeProps = StateProps & DispatchProps & FormComponentProps;
declare class UserList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: StudentEditModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): null;
    _momentBirthday(text: string): string;
    _bindUser(userId: number): "已绑定" | "未绑定";
    _handleFormReset(): void;
    _handleSubmit(): void;
    onSchoolChange(value: number): void;
    onChangeGrade(value: number): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    delete(id: number): void;
    resetPwd(id: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof UserList, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
