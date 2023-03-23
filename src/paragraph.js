import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'


function Paragraph(){
    const context = useContext(ThemeContext)
    
    return (
        <p className={context.theme}>this is the way I go to school, go to school, go to school, every morning.</p>
    )
}

export default Paragraph