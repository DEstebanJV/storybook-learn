/* Indicar el nombre del archivo */
import { createButton }  from './button' 

export default {

    title: 'Design System/Atoms/Button',

}

/*  inicializar el template de storybook */

const Template = ({ label, ...args }) => {

    /* crear el boton en el dom */

    return createButton({ label, ...args })

}

/*  exportar el template de storybook */

export const Default = Template.bind({})
Default.args = {
    label: 'Button',
}