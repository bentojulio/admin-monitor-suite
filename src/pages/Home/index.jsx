import React, { useState } from "react";
import { Card, Button, Breadcrumb } from "ama-design-system";
import { Link } from "react-router-dom";
import CardAvaliation from "../../components/CardAvaliation";
import "./style.home.css";
import { useTheme } from "../../context/ThemeContext";
const Home = () => {
        const breadcrumbs = [
    { children: <Link to="/">Home</Link> },

    {
      title: "Dashboard",
    }
  ];
  const { theme } = useTheme();
    const [cards, setCards] = useState([
        {
            title: "Diretórios",
            subtitle: "37",
            icon: "AMA-Pasta-Line",
            darkTheme: false,
        },
        {
            title: "Utilizadores",
            subtitle: "12",
            icon: "AMA-Pasta-Line",
            darkTheme: false,
        },
        {
            title: "Catégorias",
            subtitle: "5",
            icon: "AMA-Pasta-Line",
            darkTheme: false,
        },
        {
            title: "Entidades",
            subtitle: "3",
            icon: "AMA-Pasta-Line",
            darkTheme: false,
        },
        {
            title: "Sítios Web",
            subtitle: "3",
            icon: "AMA-Pasta-Line",
            darkTheme: false,
        }
    ]);
    return (
        <div className="main-content-home">
                      <Breadcrumb data={breadcrumbs} />

            <div>
                <h1>Bem vindo</h1>
                <p>Encontra nesta página a síntese dos registos efetuados, em tempo real, pelas diversas aplicações do Ecossistema AccessMonitor.</p>
            </div>

            <div className="cards-dashboard bg-white">
                <h2 className="text-start">Observatório</h2>
                <div className="d-flex gap-4 flex-grow-1 flex-wrap">

                {cards.map((card, index) => (
                    <Card
                    key={index}
                    title={card.title}
                        subtitle={card.subtitle}
                        icon={card.icon}
                        darkTheme={theme === 'dark'}
                        />
                    ))}

                    </div>
                    <h2 className="text-start">MyMonitor</h2>

            <div className="d-flex gap-4 flex-grow-1 flex-wrap  bg-white">

                {cards.map((card, index) => (
                    <Card
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                    darkTheme={theme === 'dark'}

                    />
                ))}
                </div>
            </div>

            <div className="cards-dashboard mt-5 bg-white">
                <h2>Sincronização de dados estatísticos globais com o Observatório</h2>
                <p>A informação processada no AMS (back office) é sincronizada com o Observatório público todos os dias à meia-noite. Este processo atualiza toda a informação pública registada no AMS com o Observatório. Por vezes é útil sincronizar a informação durante o dia. Para o efeito pressione o botão "sincronizar" que se encontra abaixo. A duração da sincronização depende do número de páginas, o que poderá levar vários minutos a concluir.</p>
                <Button text={"Sincronizar dados com o observatório"} ></Button>
            </div>

            <div className="cards-dashboard mt-5 bg-white">
                <h2>Carregamento de dados de forma massiva</h2>
                <p>Carregamento de dados no AMS de forma massiva através do carregamento de um ficheiro .CSV. O ficheiro deverá ter as seguintes colunas: diretoria, categoria, nome do sítio, url da homepage do sítio web.</p>
                <Button text={"Sincronizar dados com o observatório"} ></Button>
            </div>

            <div className="d-flex gap-5 mt-5 justify-content-between bg-white">
                <CardAvaliation
                    title="Avaliação de Diretórios"
                    description="Avaliações feitas pelo Access Monitor "
                 
                />
                <CardAvaliation
                    title="Avaliação de Utilizadores"
                    description="Avaliações feitas pelo Access Monitor "
                />
                <CardAvaliation
                    title="Avaliação de Aplicações"
                    description="Avaliações feitas pelo Access Monitor "
                />
            </div>
        </div>
    );
}

export default Home;

