import { SyntheticEvent, useState } from 'react';

export const useForm = (initialForm: any = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        const { name, value } = target as HTMLInputElement;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = ({ target }: { target: HTMLInputElement }) => {
        setFormState(initialForm);
    };

    const onSubmitForm = (callback: (...args: any[]) => void, $event?: SyntheticEvent) => {
        if ($event !== undefined) {
            $event.preventDefault();
        }

        callback(formState);

        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSubmitForm,
    };
};
