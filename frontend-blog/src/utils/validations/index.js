export const validateName = (name) => {
    return name.match(/^[^\s]+( [^\s]+)+$/) !== null
}