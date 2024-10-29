const bairrosCuritiba = [
    "Ganchinho" , "Sitio Cercado" , "Umbará" , "Abranches" , "Atuba" , "Bacacheri" , "Bairro Alto" , "Barreirinha" , "Boa Vista" , "Ccahoeira" ,
    "Pilarzinho" , "Santa Cândida" , "São Lourenço" , "Taboão" , "Tarumã" , "Tingui" , "Alto Boqueirão" , "Boqueirão" , "Hauer" , "Xaxim" ,
    "Cajuru" , "Capão da Imbuia" , "Guabirotuba" , "Jardim das Américas" , "Uberaba" , "Augusta" , "Cidade Industrial" , "Riviera" , "São Miguel" , "Água Verde" ,
    "Campo Comprido" , "Fanny" , "Fazendinha" , "Guaíra" , "Lindoia" , "Novo Mundo" , "Parolin" , "Portão" , "Santa Quitéria" , "Vila Izabel" ,
    "Ahú" , "Alto da Glória" , "Alto da Glória XV" , "Batel" , "Bigorrilho" , "Bom Retiro" , "Cabral" , "Centro" , "Centro Cívico" , "Cristo Rei" ,
    "Hugo Lange" , "Jardim Bôtanico" , "Jardim Social" , "Juvevê" , "Mercês" , "Prado Velho" , "Rebouças" , "São Francisco" , "Campo de Santana" , "Capão Raso" ,
    "Caximba" , "Pinheiro" , "Tatuquara" , "Butiatuvinha" , "Campina do Siqueira" , "Campo Comprido" , "Cascatinha" , "Lamenha Pequena" , "Mossungê" , "Orleans" ,
    "Santa Felicidade" , "Santo Inácio" , "São Braz" , "São João" , "Seminário" , "Vista Alegre" ,
    "ganchinho", "sitio cercado", "umbará", "abranches", "atuba", "bacacheri", "bairro alto", "barreirinha", "boa vista", "ccahoeira",
    "pilarzinho", "santa cândida", "são lourenço", "taboão", "tarumã", "tingui", "alto boqueirão", "boqueirão", "hauer", "xaxim",
    "cajuru", "capão da imbuia", "guabirotuba", "jardim das américas", "uberaba", "augusta", "cidade industrial", "riviera", "são miguel", "água verde",
    "campo comprido", "fanny", "fazendinha", "guaíra", "lindoia", "novo mundo", "parolin", "portão", "santa quitéria", "vila izabel",
    "ahú", "alto da glória", "alto da glória xv", "batel", "bigorrilho", "bom retiro", "cabral", "centro", "centro cívico", "cristo rei",
    "hugo lange", "jardim bôtanico", "jardim social", "juvevê", "mercês", "prado velho", "rebouças", "são francisco", "campo de santana", "capão raso",
    "caximba", "pinheiro", "tatuquara", "butiatuvinha", "campina do siqueira", "campo comprido", "cascatinha", "lamenha pequena", "mossungê", "orleans",
    "santa felicidade", "santo inácio", "são braz", "são joão", "seminário", "vista alegre",
    "GANCHINHO", "SITIO CERCADO", "UMBARÁ", "ABRANCHES", "ATUBA", "BACACHERI", "BAIRRO ALTO", "BARREIRINHA", "BOA VISTA", "CCAHOEIRA",
    "PILARZINHO", "SANTA CÂNDIDA", "SÃO LOURENÇO", "TABOÃO", "TARUMÃ", "TINGUI", "ALTO BOQUEIRÃO", "BOQUEIRÃO", "HAUER", "XAXIM",
    "CAJURU", "CAPÃO DA IMBUIA", "GUABIROTUBA", "JARDIM DAS AMÉRICAS", "UBERABA", "AUGUSTA", "CIDADE INDUSTRIAL", "RIVIERA", "SÃO MIGUEL", "ÁGUA VERDE",
    "CAMPO COMPRIDO", "FANNY", "FAZENDINHA", "GUAÍRA", "LINDOIA", "NOVO MUNDO", "PAROLIN", "PORTÃO", "SANTA QUITÉRIA", "VILA IZABEL",
    "AHÚ", "ALTO DA GLÓRIA", "ALTO DA GLÓRIA XV", "BATEL", "BIGORRILHO", "BOM RETIRO", "CABRAL", "CENTRO", "CENTRO CÍVICO", "CRISTO REI",
    "HUGO LANGE", "JARDIM BÔTANICO", "JARDIM SOCIAL", "JUVEVÊ", "MERCÊS", "PRADO VELHO", "REBOUÇAS", "SÃO FRANCISCO", "CAMPO DE SANTANA", "CAPÃO RASO",
    "CAXIMBA", "PINHEIRO", "TATUQUARA", "BUTIATUVINHA", "CAMPINA DO SIQUEIRA", "CAMPO COMPRIDO", "CASCATINHA", "LAMENHA PEQUENA", "MOSSUNGÊ", "ORLEANS",
    "SANTA FELICIDADE", "SANTO INÁCIO", "SÃO BRAZ", "SÃO JOÃO", "SEMINÁRIO", "VISTA ALEGRE",
    
];

function pesquisar() {
    const bairroInput = document.getElementById("bairro").value;
    const resultado = document.getElementById("resultado");
    const bairro = bairroInput.trim();

    if (bairrosCuritiba.includes(bairro)) {
        // Aqui você pode substituir pelos dados reais da coleta
        resultado.innerHTML = `
            <h3>${bairro}</h3>
            <p>Pontos de coleta: Rua A, Rua B</p>
            <p>Horários: 8h - 12h</p>
            <p>Dias: Segunda e Quinta</p>
        `;
    } else {
        resultado.innerHTML = "<p style='color: red;'>Bairro inválido.</p>";
    }
}