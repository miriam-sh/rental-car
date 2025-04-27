import { InputWithValidate } from "./InputWithValidate"

export const InputPassword = ({ className, id, label, errorMessege , onBlur = (e) => { } }) => {

    const passwordConditions = []

    return <InputWithValidate type="password" className={className} conditions={passwordConditions} id={id} label={label} required={true} errorMessege={errorMessege} onBlur={onBlur}></InputWithValidate>
}