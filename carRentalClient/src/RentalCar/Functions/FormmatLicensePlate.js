export const FormmatLicensePlate = (str) => {
    if (str.length == 7)
        return str.slice(0, 2) + "-" + str.slice(2, 5) + "-" + str.slice(5)
    if (str.length == 8)
        return str.slice(0, 3) + "-" + str.slice(3, 5) + "-" + str.slice(5)
    return str
}