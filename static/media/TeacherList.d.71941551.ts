import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { TeacherEditModel } from 'Modules/School/Services/TeacherService';
import { TeacherModel } from '../../../Services/TeacherService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { SimpleModel } from '../../../Services/IdentityErrorService';
interface OwnParams extends FormComponentProps {
    schoolId: number;
}
export interface StateProps {
    teacherList: PageContent<TeacherEditModel>;
    loading: boolean;
    deleting: boolean;
    currentUser?: UserDetail;
    schoolList: Array<SimpleModel>;
}
export interface HomeState {
    searchParams?: Pagable;
    userModel?: TeacherModel;
    schoolId: number;
}
export interface DispatchProps {
    feach: (values?: Pagable) => void;
    delete: (values: number) => void;
    getSchoolList: () => void;
}
declare type HomeProps = StateProps & DispatchProps & OwnParams;
declare class TeacherList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: TeacherModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    delete(id: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TeacherList, Pick<HomeProps, "form" | "wrappedComponentRef" | "schoolId">>, Pick<OwnParams, "wrappedComponentRef" | "schoolId">>;
export default _default;
