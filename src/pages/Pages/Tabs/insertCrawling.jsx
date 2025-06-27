import React from 'react';
import { Button } from "ama-design-system";

const InsertCrawling = ({ darkTheme}) => {
  return (
    <>
    <div className="d-flex flex-column justify-content-between">
      <p>2c. Solicitar um crawling ao sítio web</p>
      <p>Se pretende que o robô do AdminMonitorSuite produza uma amostra automaticamente pressione no botão abaixo. O robô irá gerar uma amostra segundo o método H+ Depois basta ir à página "Crawler" e importar a amostra de páginas recolhidas pelo robô.</p>
     
    </div>
    <div className="d-flex justify-content-start">
       <Button
        darkTheme={darkTheme}
        type="button"
        text="Gerar Crawler"
        variant="primary"
        onClick={() => console.log("Crawling solicitado")}
      />
    </div>
    </>
  );
};

export default InsertCrawling;