import { InputWithValidate } from "./InputWithValidate"

export const InputIdentity = ({ className, id, label, errorMessege , onBlur = (e) => { } }) => {

    const identityConditions =
        [
            { func: (value) => !/^\d{9}$/.test(value), messege: "מספר זהות שגוי" }
        ]

    return <InputWithValidate className={className} conditions={identityConditions} id={id} label={label} required={true} errorMessege={errorMessege} onBlur={onBlur}></InputWithValidate>
}