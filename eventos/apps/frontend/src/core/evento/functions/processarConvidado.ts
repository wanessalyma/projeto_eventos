import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function processarConvidado(
    convidado: Partial<Convidado>
):Convidado{
    const erros = validarConvidado(convidado);
    if(erros.length >0){
        throw new Error(erros.join("\n"));
    }
    const qtdAcompanhantes = convidado.qtdAcompanhantes ?? 0 
    const temAcompanhantes = convidado.possuiAcompanhante && convidado.confirmado && qtdAcompanhantes>0;
        const convidadoAtualizado = {
            ...convidado,
            qtdAcompanhantes: temAcompanhantes ? qtdAcompanhantes:0,
            possuiAcompanhantes: temAcompanhantes,
        };
        return convidadoAtualizado as Convidado;
}