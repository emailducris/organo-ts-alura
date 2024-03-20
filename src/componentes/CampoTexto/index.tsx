import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void; //Este type é uma arrow function que recebe um parametro do tipo 'string'.
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto