import clsx from clsx;

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'


interface InputProperties {
    label: string,
    id: string,
    type?: string;
    required?: boolean,
    register: UseFormRegister<FieldValues>
    errors: FieldErrors,
    disabled?: boolean
}


const Input: React.FC<InputProperties> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {               
    return (
        <div>
            <label className='
                block
                text-sm
                font-medium,
                leading-6,
                text-gray-900
            '>
            </label>
        </div>
    );
}
 
export default Input;