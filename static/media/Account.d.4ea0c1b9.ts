import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
export interface AccountOwnerProps extends FormComponentProps {
    onSubmit: (data: object) => void;
    data: any;
    onBack: () => void;
}
declare type AccountProps = AccountOwnerProps;
declare class Account extends PureComponent<AccountProps> {
    _onValidateForm(step: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<typeof Account, Pick<AccountOwnerProps, "data" | "onSubmit" | "wrappedComponentRef" | "onBack">>;
export default _default;
