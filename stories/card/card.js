import './card.css'

export const createCard = ({ 
    size = 'medium',
    title,
    description }) => {

    /* acceder al dom y crear los elementos  */
    const card = document.createElement('div')
    const avatar = document.createElement('div')
    const content = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    /* Armar el arbol de elementos */
    card.appendChild(avatar)
    card.appendChild(content)
    content.appendChild(h3)
    content.appendChild(p)

    /* Setear valores   */
    h3.textContent = title
    p.textContent = description


    avatar.className = 'card__avatar'
    content.className = 'card__content'
    card.className = `card card--${size}`

    return card
}