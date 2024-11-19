

const bairrosCuritiba = [
    "Ganchinho", "Sitio Cercado", "Umbará", "Abranches", "Atuba", "Bacacheri", "Bairro Alto", "Barreirinha", "Boa Vista", "Cahoeira",
    "Pilarzinho", "Santa Cândida", "São Lourenço", "Taboão", "Tarumã", "Tingui", "Alto Boqueirão", "Boqueirão", "Hauer", "Xaxim",
    "Cajuru", "Capão da Imbuia", "Guabirotuba", "Jardim das Américas", "Uberaba", "Augusta", "Cidade Industrial", "Riviera", "São Miguel", "Água Verde",
    "Campo Comprido", "Fanny", "Fazendinha", "Guaíra", "Lindoia", "Novo Mundo", "Parolin", "Portão", "Santa Quitéria", "Vila Izabel",
    "Ahú", "Alto da Glória", "Alto da XV", "Batel", "Bigorrilho", "Bom Retiro", "Cabral", "Centro", "Centro Cívico", "Cristo Rei",
    "Hugo Lange", "Jardim Bôtanico", "Jardim Social", "Juvevê", "Mercês", "Prado Velho", "Rebouças", "São Francisco", "Campo de Santana", "Capão Raso",
    "Caximba", "Pinheiro", "Tatuquara", "Butiatuvinha", "Campina do Siqueira", "Campo Comprido", "Cascatinha", "Lamenha Pequena", "Mossungê", "Orleans",
    "Santa Felicidade", "Santo Inácio", "São Braz", "São João", "Seminário", "Vista Alegre"
];

// Ordenar os bairros em ordem alfabética
bairrosCuritiba.sort();

const infoBairros = {
    "Ganchinho": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },
    "Sitio Cercado": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Umbará": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Terça-feira, Quinta-feira e Sábado"
    },

    "Campo de Santana": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Terça-feira, Quinta-feira e Sábado"
    },

    "Abranches": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Atuba": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira e quinta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Bacacheri": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira e quinta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Barreirinha": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira e Sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Boa Vista": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Cahoeira": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Pilarzinho": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Santa Cândida": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "São Lourenço": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira e quinta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Taboão": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Tarumã": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Tingui": {
        lixoreci: "Lixo reciclável: Horários: 19:00",
        dias: "Dias: Quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Alto Boqueirão": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira e quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Boqueirão": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Hauer": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Xaxim": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: segunda-feira e quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Cajuru": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Capão da Imbuia": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Guabirotuba": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quarta-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Jardim das Américas": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira e quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Uberaba": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Quarta-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Augusta": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quinta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Cidade Industrial": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Riviera": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quinta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "São Miguel": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Água Verde": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Campo Comprido": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Fanny": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Quarta-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Fazendinha": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Guaíra": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Lindoia": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Quarta-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Novo Mundo": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira e quarta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Terça-feira, quinta-feira e sábado"
    },

    "Parolin": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Portão": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Santa Quitéria": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira e sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Vila Izabel": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Ahú": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Alto da Glória": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Alto da XV": {
        lixoreci: "Lixo reciclável: Horários: 19:00",
        dias: "Dias: Diário",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Batel": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Bigorrilho": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Bom Retiro": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Cabral": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Centro": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Centro Cívico": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Cristo Rei": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Hugo Lange": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Jardim Botânico": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Jardim Social": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Juvevê": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "Mercês": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 07:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Prado Velho": {
        lixoreci: "Lixo reciclável: Horários: 07:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Segunda-feira, Quarta-feira e Sexta-feira"
    },

    "Rebouças": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Terça-feira, quinta-feira e sábado",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    "São Francisco": {
        lixoreci: "Lixo reciclável: Horários: 16:00",
        dias: "Dias: Segunda-feira, Quarta-feira e Sexta-feira",
        lixocomum: "Lixo domiciliar: Horários: 19:00",
        diasLixo: "Dias: Diário"
    },

    
};

function mostrarBairros() {
    const bairrosList = document.getElementById("bairros-list");

    bairrosCuritiba.forEach(bairro => {
        const button = document.createElement("button");
        button.textContent = bairro;
        button.className = "bairro-button"; // Adiciona a classe para estilização
        button.onclick = () => mostrarInformacoes(bairro);
        bairrosList.appendChild(button);
    });
}

function mostrarInformacoes(bairro) {
    const resultado = document.getElementById("resultado");
    const info = infoBairros[bairro];

    if (info) {
        resultado.innerHTML = `
            <h3>${bairro}</h3>
            <p>${info.lixoreci}</p>
            <p>${info.dias}</p>
            <p>${info.lixocomum}</p>
            <p>${info.diasLixo}</p>
        `;
    } else {
        resultado.innerHTML = "<p>Informações não encontradas para este bairro.</p>";
    }
}

// Executa ao carregar a página para exibir a lista de bairros
window.onload = mostrarBairros;
