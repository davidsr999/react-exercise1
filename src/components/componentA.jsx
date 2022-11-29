import React from "react"
import { Contacto } from "../models/contacto.class";
import { ComponentB } from "./componentB";


export const ComponentA = () => {
    const contacto1 = new Contacto('David', 'Sanz Ruiz', 'sanzruiz...@gmail.com', true);
    const contacto2 = new Contacto('Akejandra', 'Mateo Sanchez', 'alej...@gmail.com', true);
    // console.log(defaultContacto)

    return (
        <div>
            <ComponentB props={contacto1}></ComponentB>
            <ComponentB props={contacto2}></ComponentB>
        </div>
    )
}