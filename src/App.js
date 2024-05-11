import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Formulario/index.js";
import Time from "./componentes/Time/index.js";
import Footer from "./componentes/Footer/index.js";

function App() {

    const times = [
        {
            nome: 'Desenvolvedor',
            corPrimaria:'#fff',
            corSecundaria:'#4d4d4d',
        },

        {
            nome: 'Financeiro',
            corPrimaria:'#efedea',
            corSecundaria:'#606060',
        },

        {
            nome: 'UX e Design',
            corPrimaria:'#e0dbd6',
            corSecundaria:'#808080',
        },

        {
            nome:'Marketing',
            corPrimaria:'#d0c9c1',
            corSecundaria:'#919191',
        },

        {
            nome:'Vendas',
            corPrimaria:'#c0b7ad',
            corSecundaria:'#a3a3a3',
        },

        {
            nome: 'Recursos Humanos',
            corPrimaria:'#87827e',
            corSecundaria:'#b4b4b4',
        },

        {
            nome: 'SAC',
            corPrimaria:'#75706c',
            corSecundaria:'#c5c5c5',
        }

    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)}aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        
            {times.map(time => <Time
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
            < Footer />
        </div>
    );
 }

export default App
