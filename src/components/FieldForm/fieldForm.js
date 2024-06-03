import './fieldForm.css';

export const fieldForm = ({labelText, className, placeholder}) => {
    return `
    <div>
        <label>${labelText}</label>
        <input class = "input-form ${className}" placeholder= "${placeholder}"/>
    </div>
    `
}
