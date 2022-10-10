import React from 'react'
import Header from '../componentes/Header'

export default function LoginPage() {
  return (
    <>
    <Header pesquisar='Buscar'/>
    <h1>Bem vindo ao bando digital</h1>
    </>
  )
}




// no react existedois tipos de componentes
//1 componente eststico
//2- componente com ciclo de vid
//componentes que gerenciam estado/state - tem hsver com armazenar informação 


//componentDidUpdate - quando alguém altera alguma coisa


//a partir do react 16.8, criaram os hooks ao inves de orientação a objetos

//componente de classe - antigamente usava POO
//Ccomponente funcional apenas componente estático, sem ciclo de vida até 2018

//hook serve apenas para componentes de função
//sempre crie componente de função