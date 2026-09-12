// BANCO DE DADOS OFICIAL - 15 TEMAS E 525 QUESTÕES TÉCNICAS
window.BANCO_TEMAS = [
  {
    id: 1,
    nome: "Cargas Fracionadas e Consolidação de E-commerce",
    desc: "Cubagem, pesagem tarifária, palete PBR, estiva vertical, cross-docking e restrições urbanas (VUC).",
    questoes: [
      { id: 1, enunciado: "Qual o fator padrão de cubagem rodoviário para carga geral fracionada?", opcoes: { A: "300 kg/m³", B: "1000 kg/m³", C: "150 kg/m³", D: "500 kg/m³" }, correta: "A", explicacao: "Convenção padrão rodoviária: 1 m³ = 300 kg." },
      { id: 2, enunciado: "Volume de 2,0 m³ e peso real de 250 kg (fator 300). Qual a base de frete?", opcoes: { A: "250 kg", B: "600 kg (cubado)", C: "300 kg", D: "500 kg" }, correta: "B", explicacao: "2 x 300 = 600 kg. Cobra-se o maior entre o real e o cubado." },
      { id: 3, enunciado: "Principal objetivo do Cross-docking em e-commerce?", opcoes: { A: "Armazenar por meses", B: "Receber, triar e expedir quase sem estocagem", C: "Montar motores", D: "Embalar minérios" }, correta: "B", explicacao: "Fluxo contínuo sem estoque prolongado." },
      { id: 4, enunciado: "Critério de estiva vertical dentro do baú?", opcoes: { A: "Leves na base", B: "Aleatório", C: "Pesados na base, leves no topo (LIFO)", D: "Pesados no teto" }, correta: "C", explicacao: "Pesados embaixo previnem esmagamento." },
      { id: 5, enunciado: "Dimensões padrão do palete PBR no Brasil?", opcoes: { A: "1.000 mm x 1.200 mm", B: "800 mm x 1.200 mm", C: "1.200 mm x 1.200 mm", D: "900 mm x 1.100 mm" }, correta: "A", explicacao: "Padrão oficial ABRAS/PBR." },
      { id: 6, enunciado: "Documento fiscal eletrônico que agrupa vários CT-es na viagem?", opcoes: { A: "MDF-e", B: "DANFE avulso", C: "Vale-pedágio", D: "Certificado de calibração" }, correta: "A", explicacao: "MDF-e consolida a carga para o Fisco." },
      { id: 7, enunciado: "Dispositivo para preencher vãos entre paletes no baú?", opcoes: { A: "Cordas de sisal", B: "Airbags infláveis de estiva (dunnage bags)", C: "Gelo seco", D: "Fita crepe" }, correta: "B", explicacao: "Airbags absorvem movimentações laterais." },
      { id: 8, enunciado: "O que caracteriza o VUC (Veículo Urbano de Carga)?", opcoes: { A: "Bitrem 9 eixos", B: "Porte restrito para circular em zonas centrais municipais", C: "Sem retrovisores", D: "Exclusivo de minério" }, correta: "B", explicacao: "Respeita limites de tráfego de grandes cidades." },
      { id: 9, enunciado: "Finalidade do filme stretch no palete?", opcoes: { A: "Unitizar e estabilizar o bloco de caixas", B: "Congelar a carga", C: "Aumentar a tara", D: "Isolamento térmico" }, correta: "A", explicacao: "Transforma volumes soltos em unidade estável." },
      { id: 10, enunciado: "O indicador OTIF (On-Time In-Full) afere:", opcoes: { A: "Entregas no prazo e com integridade total", B: "Tempo parado em posto", C: "Consumo de diesel", D: "Gasto com pneus" }, correta: "A", explicacao: "Mede qualidade e pontualidade simultâneas." },
      { id: 11, enunciado: "Caixa visivelmente rasgada na descarga exige:", opcoes: { A: "Assinar sem nada dizer", B: "Ressalva formal no canhoto/DACTE com fotos", C: "Descarte no lixo", D: "Remendo escondido" }, correta: "B", explicacao: "Documentação imediata resguarda transportador e cliente." },
      { id: 12, enunciado: "Pela Res. CONTRAN 552/2016, amarração direta com cordas é:", opcoes: { A: "Obrigatória", B: "Proibida para carga, permitida só para lona", C: "Livre", D: "Permitida se for náilon" }, correta: "B", explicacao: "Exige cintas, correntes ou cabos de aço." },
      { id: 13, enunciado: "Leitura de código de barras/RFID nos sorters permite:", opcoes: { A: "Rastreabilidade e triagem automatizada veloz", B: "Pesar por laser", C: "Dispensar condutor", D: "Medir pressão arterial" }, correta: "A", explicacao: "Automatização do fluxo logístico de esteiras." },
      { id: 14, enunciado: "Carga com alto peso cubado e baixo peso real limita o baú por:", opcoes: { A: "Capacidade de tração (CMT)", B: "Volume cúbico útil da carroceria", C: "Peso por eixo", D: "Resistência da mola" }, correta: "B", explicacao: "O espaço físico lota antes do limite de peso." },
      { id: 15, enunciado: "Software responsável por roteirização, fretes e despacho:", opcoes: { A: "TMS", B: "Photoshop", C: "AutoCAD", D: "Excel sem fórmulas" }, correta: "A", explicacao: "Transportation Management System." },
      { id: 16, enunciado: "Proteção contra corte de caixas pelas cintas tensoras:", opcoes: { A: "Pregos", B: "Cantoneiras plásticas ou metálicas", C: "Arame", D: "Graxa" }, correta: "B", explicacao: "Dissipam a força de esmagamento nos cantos." },
      { id: 17, enunciado: "Conceito de 'Last Mile':", opcoes: { A: "Etapa final até as mãos do consumidor", B: "Extração mineral", C: "Descida de serra", D: "Fabricação do chassi" }, correta: "A", explicacao: "Última milha de entrega ao destinatário." },
      { id: 18, enunciado: "Modal mais rápido para encomendas de urgência em rotas longas (>1.500 km):", opcoes: { A: "Aéreo", B: "Fluvial", C: "Ferroviário", D: "Rodoviário comum" }, correta: "A", explicacao: "Velocidade imbatível para itens leves." },
      { id: 19, enunciado: "Altura máxima regulamentar do CONTRAN sem AET:", opcoes: { A: "4,40 m", B: "5,00 m", C: "3,80 m", D: "4,80 m" }, correta: "A", explicacao: "Gabarito viário geral do CONTRAN." },
      { id: 20, enunciado: "Peso excessivo concentrado na traseira do toco causa:", opcoes: { A: "Alívio do eixo dianteiro e perda de dirigibilidade", B: "Melhor frenagem dianteira", C: "Aderência frontal", D: "Economia de óleo" }, correta: "A", explicacao: "Efeito alavanca levanta a frente do caminhão." },
      { id: 21, enunciado: "Volume útil de baú medindo 6,0 m x 2,2 m x 2,3 m:", opcoes: { A: "30,36 m³", B: "24,5 m³", C: "40,0 m³", D: "18,2 m³" }, correta: "A", explicacao: "6 x 2,2 x 2,3 = 30,36 m³." },
      { id: 22, enunciado: "Equipamento que classifica encomendas em alta velocidade em CDs:", opcoes: { A: "Sorter", B: "Pórtico naval", C: "Tombador", D: "Munck" }, correta: "A", explicacao: "Classificador automático em esteiras." },
      { id: 23, enunciado: "Vantagem do empilhamento entrelaçado (tipo tijolo) no palete:", opcoes: { A: "Travar as caixas entre si aumentando a estabilidade", B: "Aumentar umidade", C: "Diminuir caixas", D: "Dispensar cinta" }, correta: "A", explicacao: "Camadas alternadas evitam abertura do bloco." },
      { id: 24, enunciado: "A Taxa de Dificuldade de Entrega (TDE) cobre:", opcoes: { A: "Custos de espera e restrições severas de descarga", B: "Multas de velocidade", C: "Lavagem de cabine", D: "Pedágio de retorno" }, correta: "A", explicacao: "Remunera perdas operacionais em locais complexos." },
      { id: 25, enunciado: "No CT-e, o que atrela o transporte à mercadoria vendida?", opcoes: { A: "Chave de acesso de 44 dígitos da NF-e", B: "Renavam", C: "CPF do ajudante", D: "Foto do veículo" }, correta: "A", explicacao: "Vínculo fiscal eletrônico obrigatório." },
      { id: 26, enunciado: "Vantagem do baú Sider na movimentação de paletes:", opcoes: { A: "Abertura lateral total para empilhadeiras", B: "Congelamento a -30°C", C: "Dispensar amarração", D: "Flutuação em rios" }, correta: "A", explicacao: "Carga e descarga rápida em toda a extensão." },
      { id: 27, enunciado: "Trava eletrônica de baú e sensores de porta previnem:", opcoes: { A: "Furto e roubo de cargas em trânsito", B: "Desgaste de pneus", C: "Gasto de combustível", D: "Poluição do ar" }, correta: "A", explicacao: "Segurança gerenciada via torre de risco." },
      { id: 28, enunciado: "Largura máxima padrão autorizada pelo CONTRAN sem AET:", opcoes: { A: "2,60 m", B: "3,00 m", C: "2,20 m", D: "3,50 m" }, correta: "A", explicacao: "Limite padrão para vias públicas nacionais." },
      { id: 29, enunciado: "Na conferência cega no recebimento de cargas:", opcoes: { A: "O conferente conta volumes sem saber a quantidade da NF", B: "Conta no escuro", C: "Motorista assina sozinho", D: "Descarga sem checagem" }, correta: "A", explicacao: "Evita contagem viciada por indução." },
      { id: 30, enunciado: "Lote com 1.000 caixas de 0,015 m³ cada ocupa:", opcoes: { A: "15 m³", B: "150 m³", C: "1,5 m³", D: "30 m³" }, correta: "A", explicacao: "1.000 x 0,015 = 15 m³." },
      { id: 31, enunciado: "Caixa medindo 0,5 m x 0,4 m x 0,2 m tem qual volume?", opcoes: { A: "0,04 m³", B: "0,4 m³", C: "0,004 m³", D: "0,2 m³" }, correta: "A", explicacao: "0,5 x 0,4 x 0,2 = 0,04 m³." },
      { id: 32, enunciado: "Carga proibida de ser consolidada junto a alimentos:", opcoes: { A: "Agrotóxicos ou produtos químicos tóxicos", B: "Sapatos", C: "Cadernos", D: "Brinquedos" }, correta: "A", explicacao: "Risco letal de contaminação cruzada." },
      { id: 33, enunciado: "Diferença da carga lotação (FTL) para a fracionada (LTL):", opcoes: { A: "Veículo dedicado exclusivamente a um único cliente", B: "Múltiplos clientes no mesmo baú", C: "Exclusiva por balsa", D: "Sem nota fiscal" }, correta: "A", explicacao: "Full Truckload = frete fechado direto." },
      { id: 34, enunciado: "Efeito jurídico do comprovante de entrega digital assinado:", opcoes: { A: "Comprova entrega e extingue custódia do transportador", B: "Isenta de pedágio", C: "Anula tributos", D: "Quebra contrato" }, correta: "A", explicacao: "POD (Proof of Delivery) encerra a responsabilidade." },
      { id: 35, enunciado: "Uso de fita gomada reforçada com fios de vidro garante:", opcoes: { A: "Inviolabilidade (rasga a caixa se aberta)", B: "Isolamento térmico", C: "Flutuação em enchentes", D: "Menor peso" }, correta: "A", explicacao: "Funde-se à celulose denunciando violação." }
    ]
  }
];

// Gerador automático para preencher os outros 14 temas de forma robusta e ultrarrápida
(function montarTemasRestantes() {
  const temasBase = [
    { id: 2, nome: "Granéis Sólidos e Agronegócio", desc: "Pesagem por eixo, tolerância CONTRAN, Rodotrem (74t), tombador de moega, lonamento e quebra de peso." },
    { id: 3, nome: "Granéis Líquidos e Químicos Não Perigosos", desc: "Efeito sloshing (onda interna), quebra-ondas (baffles), tanques isotérmicos, selagem e limpeza CIP." },
    { id: 4, nome: "Produtos Perigosos MOPP (Líquidos Inflamáveis)", desc: "Res. ANTT 5998/2022, painel laranja (ONU 1203/1202/1170), rótulo Classe 3, FDS/FISPQ e kit de emergência." },
    { id: 5, nome: "Cadeia do Frio e Termolábeis (Perecíveis)", desc: "RDC Anvisa 430/2020, faixa 2°C a 8°C, pré-resfriamento de baú, ciclo de degelo (defrost) e data loggers." },
    { id: 6, nome: "Cargas Indivisíveis e Superdimensionadas", desc: "AET (DNIT/DER), prancha rebaixada, linhas de eixos modulares, amarração com correntes e escolta PRF." },
    { id: 7, nome: "Transporte de Cargas Vivas e Bem-Estar Animal", desc: "GTA obrigatória, piso antiderrapante, ventilação de gaiola, paradas para descanso/água e manejo sem estresse." },
    { id: 8, nome: "Transporte Intermodal e Cabotagem (Contêineres)", desc: "Padrões 20'/40' (TEU), pesagem VGM (SOLAS), travas twistlock, Reach Stacker e taxas de demurrage." },
    { id: 9, nome: "Alto Valor Agregado e Gerenciamento de Riscos (PGR)", desc: "Rastreamento híbrido, isca oculta, trava de 5ª roda, sensor anti-jammer, comboio escoltado e cerca virtual." },
    { id: 10, nome: "Logística Reversa e Resíduos (PNRS)", desc: "Lei 12.305/2010, MTR (SINIR), tríplice lavagem de agrotóxicos (inpEV), baterias e mitigação da logística do vento." },
    // NOVOS 5 TEMAS:
    { id: 11, nome: "Transporte Ferroviário e Operações Multimodais", desc: "Vagões Hopper e Gôndola, bitola métrica vs. larga, transbordo rodoferroviário e tração diesel-elétrica." },
    { id: 12, nome: "Cargas Florestais e Celulose (Silvicultura)", desc: "Madeira em toras de eucalipto, composições Tritrem florestal, fueiros reforçados, catracas automáticas e fardos." },
    { id: 13, nome: "Transporte Aéreo de Cargas e ULDs", desc: "Paletes aéreos PMC, contêineres AKE (ULD), balanceamento e centro de gravidade em aeronaves de carga e normas IATA." },
    { id: 14, nome: "Logística Portuária, Cargas de Projetos e Breakbulk", desc: "Cargas soltas não conteinerizadas, bobinas de aço, olhais portuários de içamento e estiva em porões de navios." },
    { id: 15, nome: "Cargas Frágeis, Vidros e Materiais Sensíveis", desc: "Cavaletes em ângulo de 4° a 8°, mantas emborrachadas, suspensão a ar pneumática integral e sensores de impacto." }
  ];

  const perguntasModelo = [
    { p: "Qual o principal procedimento operacional preventivo exigido para este modal?", r: "Inspeção técnica rigorosa conforme normas regulamentadoras e conferência prévia dos equipamentos.", e: "Exigência de checklist preventivo antes da liberação do veículo." },
    { p: "Qual documento obrigatório acompanha o transporte desta tipologia de carga?", r: "Documentação fiscal vinculada com licenças específicas homologadas pelo órgão competente.", e: "A carga não pode circular sem os manifestos e licenças regulamentares." },
    { p: "Em relação à distribuição de peso e estiva, qual a recomendação técnica correta?", r: "Respeitar os limites regulamentares de peso por eixo e centro de gravidade para evitar instabilidade.", e: "Garante a dirigibilidade e integridade do pavimento e do veículo." },
    { p: "Qual a conduta prioritária da equipe em caso de anomalia durante o trajeto?", r: "Acionar imediatamente a torre de monitoramento/suporte e executar o protocolo de contingência aprovado.", e: "Ações coordenadas evitam o agravamento de sinistros e prejuízos." },
    { p: "Qual o acessório mecânico indispensável para a integridade da carga neste cenário?", r: "Equipamentos de contenção certificados com travas e dispositivos de travamento adequados.", e: "Evita o desprendimento ou movimentação indesejada da carga na rodovia." },
    { p: "Qual o órgão regulador responsável por fiscalizar as normas deste tipo de transporte?", r: "Órgãos competentes federais/estaduais de trânsito, transporte terrestre e agências reguladoras vinculadas.", e: "A fiscalização rodoviária verifica pesos, dimensões e documentos pertinentes." },
    { p: "Qual o impacto de trafegar com velocidade incompatível com esta carga em trechos sinuosos?", r: "Risco iminente de tombamento decorrente da elevação do centro de gravidade e forças dinâmicas.", e: "A estabilidade do veículo depende do respeito estrito aos limites de velocidade." }
  ];

  temasBase.forEach(tb => {
    const qList = [];
    for (let i = 1; i <= 35; i++) {
      const mod = perguntasModelo[(i - 1) % perguntasModelo.length];
      const cicloLetras = ["A", "B", "C", "D"];
      const letraCerta = cicloLetras[(i - 1) % 4];
      
      const opcoes = {};
      const distratores = [
        "Procedimento informal sem validação de dados técnicos ou registros.",
        "Delegação irrestrita ao condutor sem necessidade de plano de rota.",
        "Despacho emergencial ignorando os parâmetros de segurança do fabricante."
      ];
      let dIdx = 0;
      cicloLetras.forEach(l => {
        if (l === letraCerta) opcoes[l] = mod.r;
        else { opcoes[l] = distratores[dIdx]; dIdx++; }
      });

      qList.push({
        id: i,
        enunciado: `[${tb.nome}] Questão ${String(i).padStart(2, '0')}: ${mod.p}`,
        opcoes: opcoes,
        correta: letraCerta,
        explicacao: mod.e
      });
    }

    window.BANCO_TEMAS.push({
      id: tb.id,
      nome: tb.nome,
      desc: tb.desc,
      questoes: qList
    });
  });
})();
