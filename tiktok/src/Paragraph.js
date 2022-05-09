import { useContext } from "react";
import { ThemeContext } from './ThemeContext'


function Paragraph(  ) {

    const context = useContext(ThemeContext)

    return (

        <p className={context.theme}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem enim id quae commodi sunt iusto quod, dolorum dolores consectetur esse accusantium non odit voluptatum? Mollitia similique excepturi veritatis voluptatem recusandae?
        </p>
    )
}

export default Paragraph