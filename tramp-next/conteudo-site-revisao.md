# Trampolean — Auditoria de Conteúdo do Site

> Documento gerado automaticamente com todo o texto visível do site atual, organizado por página, na ordem em que aparece. Use para revisão de copy.

## Metadados Globais (app/layout.tsx)

- Título padrão: `Trampolean | Arquitetura de Aprendizagem e IA`
- Template de título: `%s`
- Descrição: "Líderes em Transformação Digital, Educação Corporativa e IA aplicada ao trabalho. Consultoria de IA, gamificação, desenvolvimento de jogos e software, e treinamentos corporativos."
- Keywords: inteligência artificial, IA para empresas, educação corporativa, gamificação, consultoria de IA, transformação digital, ergonomia e SST, desenvolvimento de jogos, Trampolean
- OpenGraph título: `Trampolean | Arquitetura de Aprendizagem e IA`
- OpenGraph descrição: "Líderes em Transformação Digital, Educação Corporativa e IA aplicada ao trabalho."
- Twitter título/descrição: igual ao OpenGraph
- Descrição do JSON-LD de Organização: "Arquitetura de aprendizagem e trabalho na era da inteligência artificial: consultoria de IA, educação corporativa, gamificação, desenvolvimento de jogos e software, e ergonomia/SST."

---

## Componentes Globais

### Header (components/Header.tsx)

Links de navegação:
- Início
- A Trampolean
- Produtos (mega menu)
- Educação (mega menu)
- Soluções (mega menu)
- Carreira

**Itens do mega menu Produtos:**
- Manual de Ética de IA — "Governança e compliance para uso responsável de IA."
- Book Wizard — "Transforme ideias em livros e apostilas com IA."
- Player 2 — "Acelere a prototipagem de games no Unity via IA."
- Kapta — "Gamificação aplicada à sustentabilidade e resíduos."
- Link de rodapé: "Ver todos os produtos"

**Itens do mega menu Educação:**
- IA na Educação — "Metodologias disruptivas para instituições de ensino."
- Workshop para Líderes — "Capacitação prática em IA para tomada de decisão."
- Treinamento Corporativo — "Scale o conhecimento de IA em toda a sua empresa."
- Link de rodapé: "Explorar programas"

**Itens do mega menu Soluções:**
- Consultoria de IA — "Design de estratégia e roadmap de implementação."
- Dev de Jogos — "Criação de serious games e experiências gamificadas."
- Dev de Software — "Sistemas e apps escaláveis sob medida."
- Automação de IA — "Eficiência operacional com fluxos inteligentes."
- Treinamentos — "Capacitação corporativa em IA e inovação."
- Workshops — "Imersões práticas para times e líderes."
- Gamificação — "Engajamento real através de ciência comportamental."
- SST Inovadora — "Saúde e Segurança com tecnologia e propósito."
- Link de rodapé: "Todas as soluções"

**CTAs / outros:**
- "WhatsApp" (link)
- "Contato" (botão)
- Aria-labels do menu mobile: "Fechar menu" / "Abrir menu"
- Link do WhatsApp no menu mobile: "Falar no WhatsApp"

### Footer (components/Footer.tsx)

- Nome da marca: Trampolean
- Tagline: "Arquitetura de aprendizagem e trabalho na era da inteligência artificial."
- Rótulo de seção: "Navegação"
  - Sobre Nós
  - Soluções
  - Produtos
  - Educação
  - Carreira
  - Contato
- Rótulo de seção: "Contato"
  - contato@trampolean.net
  - +55 (11) 91327-1774
  - São Paulo, SP — Brasil
  - Redes sociais: LinkedIn, Instagram, YouTube
- Barra inferior: "© {ano} Trampolean Arquitetura de Aprendizagem. Todos os direitos reservados."
- Link inferior: "Política de Privacidade"

---

## Rota: `/` (Home) — app/page.tsx

### Hero
- Eyebrow: "Inovação, Educação e Ergonomia"
- H1: "Inteligência Artificial e Tecnologia para Transformar o Trabalho"
- Parágrafo: "A Trampolean une inteligência artificial, educação corporativa e segurança do trabalho para promover uma transformação digital sustentável. Desenvolvemos soluções sob medida — de plataformas gamificadas a sistemas inteligentes — para capacitar pessoas, otimizar processos e construir ambientes mais seguros."
- Botão: "Conheça nossas soluções"
- Botão: "Fale com especialistas"
- Estatísticas:
  - "+10 anos" — "Experiência SST"
  - "Centenas" — "Empresas"
  - "IA & Tecnologia" — "Soluções Integradas"
- Alt da imagem: "Trampolean Hero"

### PressSection ("Na Mídia")
- Badge: "Na Mídia"
- H3: "Trampolean em Destaque"

Bloco 1 (Estadão):
- Eyebrow: "Estadão"
- Título: "Liderança e IA no São Paulo Innovation Week"
- Parágrafo: "A CEO da Trampolean, Fabiana Raulino, integrou painel que debateu os impactos da inteligência artificial e as novas dinâmicas das carreiras em camadas. A visão da empresa sobre a evolução do mercado corporativo ganhou forte repercussão em veículos como o Estadão."
- Alt da imagem: "Fabiana Raulino no painel do São Paulo Innovation Week"

Bloco 2 (SciBiz USP):
- Eyebrow: "SciBiz USP"
- Título: "Educação, Tecnologia e o Futuro da Formação Profissional"
- Parágrafo: "Na 9ª edição do SciBiz USP, a CEO da Trampolean debateu os desafios de educar em um mundo orientado por dados e inteligência artificial. O painel destacou como a tecnologia atua como uma linguagem fundamental não para substituir o humano, mas para criar experiências de aprendizagem mais inclusivas e personalizadas."
- Alt da imagem: "Fabiana Raulino no SciBiz USP"

Bloco 3 (Forbes Tech):
- Eyebrow: "Forbes Tech"
- Título: "Novas Gerações e a Segurança Digital nos Metaversos"
- Parágrafo: "Em matéria para a Forbes, a fundadora da Trampolean debateu os limites da biometria facial em jogos como o Roblox. A análise ressalta que proteger crianças em ecossistemas digitais vai além de barreiras técnicas, exigindo letramento contínuo, supervisão familiar e uma cultura de governança corporativa."
- Alt da imagem: "Fabiana Raulino na Forbes"

### EbookCTA
- Badge: "Material Gratuito"
- Título: "Baixe nossa cartilha de termos da Geração Z"
- Parágrafo: 'Do "six seven" ao "farmando aura": entenda a linguagem das novas gerações e como isso impacta o futuro do trabalho.'
- Botão: "Baixar Cartilha Agora"
- Alts de imagem: "Página da Cartilha Geração Z" (x2), "Capa da Cartilha Geração Z"

### ResultsSection
- Badge: "Resultados"
- Título: "Transformação em Números"
- Parágrafo: "Mais do que métricas, entregamos experiências e soluções que redefinem o mercado e impulsionam o futuro."
- Estatísticas:
  - "40k+" — "pessoas impactadas"
  - "500+" — "eventos realizados"
  - "2k+" — "soluções entregues"
  - "300+" — "clientes e parceiros atendidos"

### Partners
- Badge: "Liderança & Confiança"
- Título: "Grandes Marcas que Evoluem com a Trampolean."
- Parágrafo: "Parcerias estratégicas que transformam o futuro das organizações através da inovação."
- Alts de logos (nomes de parceiros): Descomplica, Oficina, Senac, Credilink, Distrito de Inovação da Cidade de São Paulo, CF, XP Educação, VZ, Turma do Jiló, Uber, Parceiro Trampolean (x5)

### Features
- Badge: "ERGONOMIA, SEGURANÇA DO TRABALHO E INTELIGÊNCIA ARTIFICIAL"
- Título: "Tecnologia para tornar o trabalho mais seguro, inteligente e humano."
- Parágrafo: "A Trampolean nasceu da Ergonomia de Sistemas de Produção e da Segurança e Saúde no Trabalho. Hoje, desenvolve soluções em inteligência artificial, educação corporativa, saúde digital, UX/UI, jogos digitais e software sob medida para empresas que precisam transformar processos, capacitar equipes e reduzir riscos no trabalho."
- Citação de destaque: "Combinamos diagnóstico técnico, formação de pessoas e desenvolvimento de soluções digitais para apoiar organizações na gestão da ergonomia, na prevenção de riscos psicossociais e na inovação de processos com foco em produtividade, segurança e cuidado."
- Alt da imagem: "Technology and Human collaboration"

8 Pilares:
1. **Inteligência Artificial para Empresas** — "Treinamentos, consultoria e soluções em IA para melhorar processos, apoiar decisões, automatizar rotinas e preparar equipes para a transformação digital."
2. **Agentes de IA e Automação** — "Criamos agentes inteligentes, assistentes internos e fluxos automatizados para atendimento, operação, gestão do conhecimento e aumento de produtividade."
3. **Educação Corporativa** — "Desenvolvemos universidades corporativas, trilhas de aprendizagem, programas de capacitação e microlearning alinhados às metas do negócio."
4. **Ergonomia e Saúde no Trabalho** — "Atuamos com ergonomia, fatores humanos, segurança do trabalho e prevenção de riscos psicossociais para promover ambientes mais seguros, saudáveis e produtivos."
5. **Transformação Digital** — "Realizamos diagnósticos, mapeamos processos e recomendamos soluções digitais para empresas que precisam inovar com coerência, eficiência e sustentabilidade."
6. **Gamificação e Jogos Digitais** — "Criamos experiências gamificadas, jogos corporativos e soluções interativas para aumentar engajamento, retenção e aplicação prática do conhecimento."
7. **Software Sob Medida e UX/UI** — "Desenvolvemos plataformas, sistemas e produtos digitais com foco em usabilidade, eficiência operacional e aderência real às necessidades do cliente."
8. **Realidade Virtual e Experiências Imersivas** — "Projetamos simulações, treinamentos em realidade virtual e experiências imersivas para aprendizagem prática, sensibilização e desenvolvimento de competências."

### Solutions
- Badge: "Nossas Soluções"
- Título: "Tecnologia para impulsionar sua Evolução"
- Parágrafo: "Combinamos Inteligência Artificial, Ergonomia e Educação para entregar ferramentas e serviços que redefinem os limites da produtividade, cuidado e gestão."

**1. Treinamentos obrigatórios, SIPATs e programas de segurança mais engajadores**
- Subtítulo: "Solução de Serviço"
- Descrição: "A Trampolean transforma treinamentos de Segurança e Saúde no Trabalho em experiências mais claras, participativas e memoráveis. Criamos DDS, SIPATs, trilhas de aprendizagem, campanhas internas e formações obrigatórias com linguagem acessível, gamificação, narrativas, recursos digitais e foco em mudança de comportamento."
- Itens: DDS criativo e gamificado; SIPATs com jogos, teatro e experiências digitais; Treinamentos obrigatórios com linguagem simples e aplicável; Campanhas de prevenção, saúde e segurança no trabalho; Recursos com QR Codes, vídeos, quizzes e materiais interativos
- Botão: "Conheça as soluções" (padrão)

**2. Soluções digitais para capacitar equipes**
- Subtítulo: "Plataforma + Serviço"
- Descrição: "A Trampolean cria plataformas, treinamentos, universidades corporativas, jogos, trilhas gamificadas e experiências digitais sob medida para empresas, órgãos públicos, universidades e grandes operações."
- Itens: Universidade corporativa em Moodle ou plataforma sob medida; Trilhas de aprendizagem por cargo, área ou competência; Onboarding digital para novos trabalhadores; Treinamentos obrigatórios com certificado e relatórios; Quizzes, rankings, badges e desafios gamificados; Dashboards para acompanhar participação e desempenho; Campanhas internas de segurança, saúde, cultura e compliance; Portais de conhecimento com vídeos, materiais, atividades e avaliações
- Botão: "Quero criar uma plataforma de aprendizagem"

**3. Método Semiose e Ética em Inteligência Artificial**
- Subtítulo: "CONSULTORIA + GOVERNANÇA EM IA"
- Descrição: "A Trampolean orienta organizações na adoção responsável da IA, combinando ergonomia, semiótica, governança, educação corporativa e análise de riscos para apoiar decisões mais seguras e conscientes."
- Itens: Comitês de Ética em IA; Políticas de uso responsável; Diagnóstico de maturidade em IA; Letramento em IA para lideranças; Análise de riscos, vieses e impactos
- Botão: padrão ("Conheça as soluções")

**4. Ergonomia e Saúde e Segurança do Trabalho (SST)**
- Subtítulo: "Técnica + Consultiva"
- Descrição: "Realizamos Análises Ergonômicas do Trabalho (AET) em conformidade com a NR-17. Vamos além do laudo, integrando tecnologia e boas práticas globais."
- Itens: Conformidade NR-17 e PGR; Consultoria EHS e Sustentabilidade; Saúde Mental no Trabalho
- Botão: padrão ("Conheça as soluções")

**5. Saúde Digital e Bem-Estar Corporativo**
- Subtítulo: "Plataforma + Conteúdo"
- Descrição: "Soluções digitais integradas para promover o bem-estar físico e mental. Triagem digital de riscos ergonômicos e programas de saúde mental escaláveis."
- Itens: Programas de saúde mental gamificados; Triagem digital postural; Dashboards de saúde organizacional
- Botão: padrão ("Conheça as soluções")

### FAQ
- Badge: "Perguntas Frequentes"
- Título: "Tire suas dúvidas"

1. **O que é a Trampolean?**
   "A Trampolean é uma empresa brasileira de arquitetura de aprendizagem e trabalho na era da Inteligência Artificial. Com mais de 10 anos de atuação em Segurança e Saúde do Trabalho (SST), hoje une IA, educação corporativa, gamificação e desenvolvimento de software para transformar como as empresas trabalham e treinam pessoas."

2. **Quais soluções a Trampolean oferece?**
   "Consultoria de IA, desenvolvimento de jogos e software sob medida, automação com IA, treinamentos corporativos, workshops imersivos, gamificação e soluções de Saúde e Segurança do Trabalho (SST) com conformidade à NR-17."

3. **A Trampolean tem produtos próprios de IA?**
   "Sim. A Trampolean desenvolve quatro produtos originais: o Manual de Ética de IA (governança e compliance), o Book Wizard (criação de livros e materiais com IA generativa), o Player 2 (plugin de IA para desenvolvimento de jogos na Unity) e o Kapta (plataforma gamificada de coleta seletiva e ESG)."

4. **Para que tipo de empresa a Trampolean trabalha?**
   "A Trampolean atende empresas de diferentes portes e setores que querem aplicar Inteligência Artificial de forma estratégica e responsável, além de instituições de ensino e organizações que buscam melhorar seus indicadores de saúde e segurança do trabalho."

5. **Como entrar em contato com a Trampolean?**
   "É possível falar com a Trampolean pelo e-mail contato@trampolean.net, pelo WhatsApp +55 (11) 91327-1774 ou pelo formulário na página de Contato do site."

### FinalCTA
- Título: "Sua Jornada de Transformação Começa Agora."
- Parágrafo: "Não deixe sua empresa para trás enquanto o mercado avança. A Trampolean é sua parceira estratégica para navegar na era da Inteligência Artificial com confiança, ética e resultados concretos."
- Botão: "Agende um Diagnóstico Gratuito"
- Botão: "Fale com um Especialista"

---

## Rota: `/sobre` — app/sobre/page.tsx

**Metadados:**
- Título: "A Trampolean | Arquitetura de Aprendizagem e IA"
- Descrição: "Conheça a Trampolean: mais de 10 anos de experiência unindo Inteligência Artificial, educação corporativa e ergonomia para transformar o trabalho, liderada pela CEO Fabiana Raulino."
- Canonical: /sobre

### AboutHero
- Badge: "Nossa Identidade"
- H1: "Somos a Trampolean"
- H2: "Arquitetura de aprendizagem e trabalho na era da inteligência artificial."
- Parágrafo: "Nascemos da crença de que tecnologia e educação, quando caminham juntas, transformam empresas e pessoas. Somos uma empresa brasileira especializada em transformação digital, gamificação e educação corporativa estratégica."
- Botão: "Conheça nossa trajetória"
- Alt da imagem: "Fabiana Raulino, CEO da Trampolean, apresentando em evento sobre Inteligência Artificial"
- Badge flutuante: "+10 anos" — "Inovação AI"

### AboutStory
- Eyebrow: "Nossa Trajetória"
- Título: "De uma ideia disruptiva a uma referência em inovação"
- Parágrafo 1: "A Trampolean foi fundada com uma missão clara: unir criatividade, tecnologia e estratégia para resolver os desafios reais das organizações. Ao longo dos anos, crescemos construindo produtos originais, metodologias próprias e uma cultura que valoriza o humano e o digital em igual medida."
- Parágrafo 2: "Atuamos em projetos de impacto para empresas de médio e grande porte, instituições de ensino e organizações do terceiro setor, levando soluções que vão do desenvolvimento de jogos sérios à consultoria de inteligência artificial aplicada."
- Citação de destaque: "Hoje, a Trampolean consolida sua posição como parceira estratégica de negócios que querem liderar a próxima era — com responsabilidade, propósito e tecnologia de ponta."

### AboutMetrics
- Eyebrow: "Trampolean em Números"
- Título: "Resultados que falam por si"
- Métricas:
  - "+10 anos" — "de experiência em inovação digital"
  - "+50 projetos" — "entregues para empresas e instituições"
  - "4 produtos" — "desenvolvidos com tecnologia de ponta"
  - "40k+" — "pessoas impactadas por nossos programas"

### AboutLeadership
- Alt da imagem: "Fabiana Raulino, CEO da Trampolean"
- Legenda da foto: "CEO da Trampolean" / "Fabiana Raulino"
- Eyebrow: "Liderança"
- Título: "Quem está à frente da Trampolean"
- Parágrafo: "Com background em tecnologia, educação e gestão de negócios, a CEO da Trampolean Fabiana Raulino construiu a empresa a partir da convicção de que inovação precisa ser acessível, aplicada e humana. Com passagens por projetos nacionais e internacionais, lidera uma equipe multidisciplinar comprometida com a transformação real das organizações."
- Citação: "Não construímos tecnologia pela tecnologia. Construímos pontes entre o que as pessoas precisam e o que o futuro oferece."
- Botão: "Fale com nossa equipe"

### AboutValues
- Eyebrow: "O que nos move"
- Título: "Nossos Pilares"
- **Inovação** — "Desenvolvemos soluções que ainda não existem, porque os problemas de amanhã precisam de respostas hoje."
- **Propósito** — "Cada projeto tem um impacto real. Trabalhamos com tecnologia porque acreditamos nas pessoas."
- **Excelência** — "Entregamos com rigor técnico e criatividade, sem abrir mão da qualidade em nenhuma etapa."

### AboutCTA
- Título: "Pronto para transformar sua empresa?"
- Parágrafo: "Converse com nossos especialistas e descubra como a Trampolean pode impulsionar seu negócio com estratégia, tecnologia e propósito."
- Botão: "Entre em Contato"

---

## Rota: `/produtos` — app/produtos/page.tsx

**Metadados:**
- Título: "Produtos | Trampolean"
- Descrição: "Conheça os produtos originais da Trampolean: Manual de Ética de IA, Book Wizard, Player 2 e Kapta — soluções de IA, governança, criação de conteúdo e gamificação para empresas."
- Canonical: /produtos

### ProductsHero
- Badge: "Nossos Produtos"
- H1: "Tecnologia que resolve problemas reais."
- Parágrafo: "Desenvolvemos produtos originais que unem inteligência artificial, gamificação e inovação para transformar a forma como empresas e pessoas aprendem, criam e se responsabilizam."
- Alt da imagem: "Digital Technology Abstract"
- Badge flutuante: "4" — "Original Products"

### SectionIntro
- Título: "Conheça nossas Soluções Originais"
- Citação: "Nossos produtos não são apenas ferramentas; são catalisadores de mudança para empresas que entendem o papel da IA no trabalho."

### ProductDetail

**1. Manual de Ética de IA para Empresas**
- Tag: "Governança & Compliance"
- Subtítulo: "O guia prático para implementar inteligência artificial com responsabilidade e conformidade."
- Descrição completa: "O Manual de Ética de IA é um produto desenvolvido pela Trampolean para ajudar empresas a adotarem inteligência artificial de forma responsável. Ele cobre desde princípios fundamentais até protocolos de auditoria e conformidade com a LGPD."
- Benefícios: Protocolos de governança prontos para aplicação; Alinhamento com LGPD e marcos regulatórios; Redução de riscos reputacionais e legais; Customizável para o contexto de cada empresa
- Botão: "Saber mais / Contato"

**2. Book Wizard**
- Tag: "Inteligência Artificial"
- Subtítulo: "A IA que transforma suas ideias em livros completos — do conceito ao conteúdo estruturado."
- Descrição completa: "O Book Wizard é uma ferramenta de IA generativa desenvolvida para criação assistida de livros, apostilas e materiais corporativos. Reduz drasticamente o tempo de produção editorial mantendo a qualidade técnica."
- Benefícios: Geração automatizada de estrutura e conteúdo; Ideal para livros técnicos e materiais didáticos; Interface intuitiva — sem necessidade de técnica; Exportação em múltiplos formatos (PDF, Word, ePub)
- Botão: "Saber mais / Contato"

**3. Player 2**
- Tag: "Game Development"
- Subtítulo: "O plugin que integra geração de jogos por IA diretamente no Unity."
- Descrição completa: "Player 2 atua como um assistente de IA dentro da Unity Engine, democratizando e acelerando o desenvolvimento de jogos. Permite criar mecânicas, cenários e NPCs com auxílio de IA gerativa em tempo real."
- Benefícios: Integração nativa com a engine Unity; Geração de assets e mecânicas assistida por IA; Acelera significativamente o ciclo de prototipagem; Ideal para Serious Games e jogos corporativos
- Botão: "Saber mais / Contato"

**4. Kapta**
- Tag: "ESG & Gamificação"
- Subtítulo: "Plataforma gamificada que transforma a coleta de resíduos em engajamento real."
- Descrição completa: "Kapta aplica mecânicas de jogo ao processo de coleta seletiva e gestão de resíduos. Por meio de desafios e recompensas, engaja comunidades e colaboradores na prática sustentável e gera relatórios de impacto ESG."
- Benefícios: Engajamento sustentado por gamificação; Painel de dados para relatórios de ESG detalhados; Adaptável para empresas, condomínios e governos; Incentiva mudança de comportamento positiva
- Botão: "Saber mais / Contato"

### AboutCTA
(igual à anterior — "Pronto para transformar sua empresa?" / "Entre em Contato")

---

## Rota: `/solucoes` — app/solucoes/page.tsx

**Metadados:**
- Título: "Soluções | Trampolean"
- Descrição: "Consultoria de IA, desenvolvimento de jogos e software, automação, treinamentos, workshops, gamificação e SST — soluções de tecnologia e inovação da Trampolean para empresas."
- Canonical: /solucoes

### SolutionsHero
- Badge: "Nossas Soluções"
- H1: "Do desafio à solução, do conceito à entrega."
- Parágrafo: "A Trampolean oferece um portfólio completo de serviços em tecnologia, educação e inovação para empresas que querem crescer com inteligência."
- Alt da imagem: "Professional teamwork and digital solutions"
- Badge flutuante: "8" — "Core Solutions"

### SectionIntro
- Título: "Expertise em Tecnologia e Inovação"
- Citação: "Nossa missão é transformar desafios complexos em soluções digitais simples, escaláveis e com alto valor agregado para o seu negócio."

### SolutionsDetail

**1. Consultoria de IA**
- Tag: "Estratégia"
- Descrição: "Ajudamos sua empresa a entender onde e como aplicar inteligência artificial de forma estratégica, ética e com retorno mensurável. Do mapeamento de oportunidades à definição de roadmap de adoção, nossa consultoria é orientada a resultado."
- Rótulo de itens: "Entregáveis típicos"
- Itens: Diagnóstico de maturidade digital; Mapa de oportunidades de IA; Roadmap de implementação; Políticas de governança
- Botão: "Falar com um especialista"

**2. Desenvolvimento de Jogos**
- Tag: "Game Dev"
- Descrição: "Criamos jogos sérios, educacionais, corporativos e de entretenimento com alta qualidade técnica e criativa. Nossas produções unem narrativa envolvente, mecânicas bem projetadas e tecnologia de ponta."
- Rótulo de itens: "Tipos de jogos"
- Itens: Jogos sérios (treinamento); Jogos educacionais; Simuladores; Jogos mobile; Experiências gamificadas
- Botão: "Falar com um especialista"

**3. Desenvolvimento de Software**
- Tag: "Tecnologia"
- Descrição: "Desenvolvemos sistemas, aplicativos e plataformas digitais sob medida para as necessidades do seu negócio. Trabalhamos com metodologias ágeis, foco em experiência do usuário e arquitetura escalável."
- Rótulo de itens: "Tipos de entrega"
- Itens: Aplicações web; Apps mobile; APIs e integrações; Sistemas internos; Plataformas SaaS
- Botão: "Falar com um especialista"

**4. Automação de IA**
- Tag: "Eficiência"
- Descrição: "Mapeamos e automatizamos processos repetitivos e de alto volume usando inteligência artificial e ferramentas de fluxo inteligente. O resultado é uma operação eficiente, com menos erros e mais tempo estratégico."
- Rótulo de itens: "Casos de uso"
- Itens: Atendimento automatizado; Geração de relatórios; Triagem de documentos; Fluxos de aprovação; Integração entre sistemas
- Botão: "Falar com um especialista"

**5. Treinamentos**
- Tag: "Capacitação"
- Descrição: "Desenvolvemos e facilitamos treinamentos corporativos em tecnologia, inovação e inteligência artificial, adaptados ao perfil da sua organização. Combinamos teoria e prática."
- Rótulo de itens: "Formatos"
- Itens: Presencial; Online / Híbrido; Assíncrono (EAD); Trilhas personalizadas
- Botão: "Falar com um especialista"

**6. Workshops**
- Tag: "Imersão"
- Descrição: "Workshops imersivos de 1 a 2 dias para times, lideranças e projetos específicos. Focados em resolução de problemas reais com entregáveis concretos ao final."
- Rótulo de itens: "Exemplos de temas"
- Itens: IA para líderes; Inovação em equipe; Design de produtos digitais; Gamificação aplicada
- Botão: "Falar com um especialista"

**7. Gamificação**
- Tag: "Engajamento"
- Descrição: "Aplicamos mecânicas de jogo em contextos corporativos e educacionais para aumentar engajamento e motivação. Nossa abordagem é baseada em ciência comportamental."
- Rótulo de itens: "Aplicações"
- Itens: Onboarding de colaboradores; Programas de saúde; Treinamentos & Vendas; Sustentabilidade (ESG)
- Botão: "Falar com um especialista"

**8. Saúde e Segurança do Trabalho**
- Tag: "SST & ESG"
- Descrição: "Desenvolvemos soluções tecnológicas voltadas para a saúde e segurança do trabalho, integrando gamificação e IA para melhorar indicadores de segurança e qualidade de vida."
- Rótulo de itens: "Entregáveis"
- Itens: Plataformas de SST gamificadas; Treinamentos de segurança; Módulos de conscientização; Painéis de indicadores
- Botão: "Falar com um especialista"

### AboutCTA
(igual — "Pronto para transformar sua empresa?" / "Entre em Contato")

---

## Rota: `/educacao` — app/educacao/page.tsx

**Metadados:**
- Título: "Educação | Trampolean"
- Descrição: "Programas de capacitação em Inteligência Artificial para empresas: IA na Educação, Workshop para Líderes e Treinamento Corporativo, com metodologia prática da Trampolean."
- Canonical: /educacao

### EducationHero
- Badge: "Educação & Capacitação"
- H1: "Preparando pessoas para liderar a era da IA."
- Parágrafo: "Nossos programas educacionais unem metodologia, prática e tecnologia para transformar a forma como organizações aprendem, ensinam e inovam."
- Alt da imagem: "Modern Classroom with Technology"
- Badge flutuante: "3" — "Specialized Programs"

### SectionIntro
- Título: "Nossos Programas de Capacitação"
- Citação: "Acreditamos que a verdadeira inovação em IA não vem apenas da tecnologia, mas da capacidade humana de aplicá-la com lucidez e propósito."

### EducationDetail

**1. IA na Educação**
- Tag: "Metodologia & Inovação"
- Subtítulo: "Uma metodologia de ensino que incorpora inteligência artificial para inovar o aprendizado em escolas, faculdades e corporações."
- Descrição: "O programa IA na Educação foi desenvolvido pela Trampolean para instituições de ensino e departamentos de T&D que desejam integrar inteligência artificial como ferramenta pedagógica. Abordamos desde a curadoria de conteúdo com IA até o design de experiências de aprendizagem personalizadas."
- Para quem é: "Professores, coordenadores pedagógicos, gestores de RH e T&D, diretores de ensino."
- Formato: "Presencial, online ou híbrido — duração a definir por projeto."
- Temas abordados: Fundamentos de IA aplicados ao contexto educacional; Personalização do ensino com ferramentas de IA; Avaliação e feedback automatizados; Curadoria e geração de conteúdo com IA; Ética e uso responsável de IA em ambientes educacionais
- Botão: "Quero saber mais / Contato"

**2. Workshop IA para Líderes**
- Tag: "Liderança & Gestão"
- Subtítulo: "Capacitação prática das principais ferramentas de inteligência artificial para líderes que querem ser mais produtivos e estratégicos."
- Descrição: "O Workshop IA para Líderes é um programa imersivo desenhado para gestores e C-levels que precisam entender, usar e tomar decisões estratégicas sobre IA. O foco é totalmente prático: cada participante sai com domínio de ferramentas reais e um plano de aplicação imediata."
- Para quem é: "Gestores de equipe, diretores, C-levels, líderes de projetos."
- Formato: "Workshop presencial ou online — 1 a 2 dias."
- Temas abordados: O que é IA e como ela já impacta seu setor; Ferramentas de IA para produtividade pessoal e de equipe; Tomada de decisão assistida por IA; Como conduzir equipes na adoção de IA; Casos práticos por segmento de mercado
- Botão: "Quero saber mais / Contato"

**3. Treinamento de Uso de IA para Empresas**
- Tag: "Capacitação Corporativa"
- Subtítulo: "Um programa completo de capacitação para que os colaboradores da sua empresa adotem IA com confiança, segurança e eficiência."
- Descrição: "A solução corporativa da Trampolean para organizações que desejam escalar o conhecimento em IA internamente. O programa é customizado conforme o nível de maturidade digital da empresa, cobrindo desde o uso básico até fluxos de trabalho avançados."
- Para quem é: "Equipes inteiras, times de TI, RH, Marketing, Operações."
- Formato: "Modular, presencial ou EAD — com trilhas por cargo/função."
- Temas abordados: Introdução à IA: conceitos e aplicações práticas; Ferramentas de IA para cada área da empresa; Automação de tarefas repetitivas com IA; Segurança, privacidade e ética no uso corporativo; Criação de fluxos de trabalho potencializados por IA
- Botão: "Quero saber mais / Contato"

### EducationDifferentiators
- Badge: "Nossa Metodologia"
- Título: "Por que Educação com a Trampolean?"
- Parágrafo: "Combinamos tecnologia de ponta com experiência pedagógica real para garantir o máximo aproveitamento."
- **Programas Sob Medida** — "Cada treinamento é adaptado ao contexto, maturidade e objetivos da sua organização."
- **Foco no Uso Prático** — "Nenhuma teoria sem aplicação. Os participantes saem com ferramentas dominadas e planos concretos."
- **Facilitadores Especialistas** — "Quem ensina é quem pratica. Nossa equipe usa IA no dia a dia dos projetos da Trampolean."

### AboutCTA
(igual — "Pronto para transformar sua empresa?" / "Entre em Contato")

---

## Rota: `/carreira` — app/carreira/page.tsx

**Metadados:**
- Título: "Carreira | Trampolean"
- Descrição: "Faça parte da Trampolean. Candidate-se às oportunidades em Tecnologia, Design, Educação e Marketing e ajude a transformar o trabalho na era da Inteligência Artificial."

### CareerHero
- Badge: "Carreira na Trampolean"
- H1: "Construa o futuro da inovação conosco."
- Parágrafo: "Buscamos talentos apaixonados por tecnologia, educação e impacto humano. Venha transformar processos e criar soluções que mudam o amanhã."
- Alt da imagem: "Equipe colaborando em ambiente moderno"
- Texto flutuante: "+ Oportunidades" — "Abertas em Toda a Rede"

### CareerCulture
- Badge: "Nossa Cultura"
- Título: "Por que a Trampolean?"
- Parágrafo: "Oferecemos um ambiente de crescimento acelerado, onde a tecnologia de ponta e o bem-estar caminham juntos."
- **Inovação Constante** — "Trabalhamos na fronteira da tecnologia organizacional. Se você gosta de aprender e aplicar o novo, aqui é seu lugar."
- **Impacto Humano** — "Nossa tecnologia não substitui pessoas; ela as potencializa. Cada projeto visa melhorar a vida de quem trabalha."
- **Liberdade Criativa** — "Valorizamos a autonomia e a voz de cada colaborador. Boas ideias vêm de todos os lugares e são ouvidas."

### CareerForm
- Eyebrow: "Participe da Seleção"
- Título: "Candidate-se agora"
- Parágrafo: "Preencha os campos ao lado e nossa equipe de talentos entrará em contato para conhecer sua trajetória."
- Campos do formulário:
  - Label: "Nome Completo *" — placeholder: "Seu nome"
  - Label: "E-mail *" — placeholder: "seu@email.com"
  - Label: "WhatsApp *" — placeholder: "(00) 00000-0000"
  - Label: "Área de Interesse *" — opções: "Selecione uma área"; "Tecnologia & Desenvolvimento"; "Design & UX"; "Educação & Conteúdo"; "Marketing & Comunicação"
  - Label: "Sobre você *" — placeholder: "Conte sua trajetória..."
- Botão: "Enviar candidatura"
- Mensagem de confirmação: "Seu app de e-mail foi aberto com a candidatura pronta — é só confirmar o envio."

---

## Rota: `/contato` — app/contato/page.tsx

**Metadados:**
- Título: "Contato | Trampolean"
- Descrição: "Fale com a Trampolean por e-mail, WhatsApp ou pelo formulário do site e descubra como levar Inteligência Artificial, educação corporativa e SST para sua empresa."

### ContactHero
- Badge: "Contato & Parcerias"
- H1: "Fale com a Trampolean."
- Parágrafo: "Estamos prontos para ouvir seus desafios e transformar sua organização através da inovação, tecnologia e educação. Vamos conversar?"
- Alt da imagem: "Conexão e parceria estratégica"
- Badge flutuante: "IA &" — "Inovação"

### ContactContent
- Título: "Onde nos encontrar"
- E-mail — "contato@trampolean.net"
- WhatsApp — "+55 (11) 91327-1774"
- Localização — "São Paulo, SP — Brasil" / "Atendimento Global"
- Título social: "Siga a Trampolean" (LinkedIn, Instagram, YouTube)
- Título do formulário: "Envie uma mensagem"
- Campos do formulário:
  - Label: "Nome Completo *" — placeholder: "Seu nome"
  - Label: "E-mail *" — placeholder: "seu@email.com"
  - Label: "Assunto" — placeholder: "Ex.: Quero saber mais sobre consultoria de IA"
  - Label: "Mensagem *" — placeholder: "Descreva seu projeto, dúvida ou proposta..."
- Botão: "Enviar mensagem"
- Mensagem de confirmação: "Seu app de e-mail foi aberto com a mensagem pronta — é só confirmar o envio. Se preferir, fale com a gente pelo WhatsApp."

---

## Rota: `/privacidade` — app/privacidade/page.tsx

**Metadados:**
- Título: "Política de Privacidade | Trampolean"
- Descrição: "Saiba como a Trampolean coleta, usa e protege os dados pessoais de clientes, candidatos e visitantes do site, em conformidade com a LGPD."

### Corpo da Página
- H1: "Política de Privacidade"
- Parágrafo de introdução: "A Trampolean respeita a privacidade de clientes, candidatos e visitantes do site e trata dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)."

**Quais dados coletamos**
"Coletamos apenas os dados fornecidos voluntariamente por você através dos formulários de contato e de candidatura de carreira do site: nome, e-mail, WhatsApp, área de interesse e a mensagem enviada."

**Como usamos seus dados**
"Utilizamos esses dados exclusivamente para responder a solicitações de contato, avaliar candidaturas e dar continuidade ao relacionamento comercial ou profissional iniciado por você. Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing."

**Seus direitos**
"Você pode solicitar a qualquer momento a confirmação, correção, portabilidade ou exclusão dos seus dados pessoais, entrando em contato pelo e-mail contato@trampolean.net."

**Contato**
"Em caso de dúvidas sobre esta política, fale com a gente pelo e-mail contato@trampolean.net ou pelo WhatsApp +55 (11) 91327-1774."
