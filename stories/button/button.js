import './button.css'

export const createButton = ({ 

    style = 'filled',
    size = 'medium',
    label,

}) => {

    /* crear el boton en el dom */
    /* createElement('taghtml) */
    const button = document.createElement('button')
    button.className = `button button--${style} button--${size}`
    button.type = 'submit'
    button.role = 'button'
    button.textContent = label

    return button

}