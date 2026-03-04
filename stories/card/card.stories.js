/* Indicar el nombre del archivo */
import { createCard }  from './card' 

export default {

    title: 'Design System/Atoms/Card',

}

/*  inicializar el template de storybook */

const Template = ({ title, ...args }) => {

    /* crear el card en el dom */

    return createCard({ title, ...args })

}

/*  exportar el template de storybook */

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    description: 'description',
}