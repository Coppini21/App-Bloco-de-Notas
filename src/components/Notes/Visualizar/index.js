import { VisualStyled } from "./styles"

import { HiOutlineX } from "react-icons/hi"

export default function Visualizar(){
    function closeNote(){
        document.getElementById("visualStyled").style.display = "none"
    }
 
    return(
        <VisualStyled id="visualStyled">
            <div id="divTotalNote">
                <div id="divTotalClose">
                    <HiOutlineX size={30} onClick={closeNote}/>   
                </div>
                <textarea id="VisualizacaoDescricao"></textarea>
            </div>
            
        </VisualStyled>
    )
}