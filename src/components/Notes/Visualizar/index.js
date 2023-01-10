import { VisualStyled, Overlay  } from "./styles"

import { HiOutlineX } from "react-icons/hi"

export default function Visualizar(){
    function closeNote(){
        document.getElementById("visualStyled").style.display = "none"
        document.getElementById("overlay").style.display = "none"
        document.getElementById("overlayMenu").style.display = "none"
        document.getElementById("totalNota").style.zIndex = 1
        document.getElementById("btnSalvarEdicao").style.zIndex = 1
    }
 
    return(
        <>
            <Overlay  id="overlay"/>
            <VisualStyled id="visualStyled">
                
                <div id="divTotalNote">
                    <div id="divTotalClose">
                        <HiOutlineX size={30} onClick={closeNote}/>   
                    </div>
                    <textarea id="VisualizacaoDescricao" readOnly={true}></textarea>
                </div>
                
            </VisualStyled>
        </>
       
    )
}