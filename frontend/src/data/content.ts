import type { Project, StatItem, TechItem, TimelineItem } from '@/types';

export const profile = {
  name: 'Gustavo Lima',
  role: 'Desenvolvedor Back-end',
  subtitle:
    'Construo sistemas com C#, ASP.NET Core, Node.js e TypeScript — evoluindo passo a passo, projeto após projeto, desde os fundamentos da web até aplicações completas com banco de dados, autenticação e regras de negócio.',
  github: 'https://github.com/Gustavo7064',
  linkedin: 'https://linkedin.com/in/gustavo-lima-goes-b419822ab',
  email: 'seuemail@exemplo.com',
  cvUrl: '/cv-gustavo-lima.pdf',
  githubUsername: 'Gustavo7064',
};

export const about = {
  eyebrow: 'Sobre mim',
  paragraphs: [
    'Antes de escrever a primeira linha de código, passei anos como Analista de Crédito e no Atendimento ao Cliente. Foi ali que aprendi a analisar informação com cuidado, tomar decisão com dado incompleto e resolver problema de gente de verdade — competências que uso todo dia no back-end.',
    'Sou formado em Desenvolvimento de Sistemas pela ETEC Professor Basilides de Godoy, com TCC avaliado com nota MB. Minha evolução aconteceu através da prática: comecei com HTML, CSS e JavaScript, migrei para C# e Programação Orientada a Objetos, passei por Flutter e React, e hoje construo sistemas completos com ASP.NET Core, Node.js e TypeScript — sempre envolvendo banco de dados, autenticação e regras de negócio reais.',
    'Continuo estudando: Clean Code, Docker, JWT, Entity Framework, microsserviços e cloud fazem parte da minha rotina agora, inclusive na construção deste portfólio. Busco minha primeira oportunidade como Desenvolvedor Back-end Júnior para colocar essa base em prática dentro de um time.',
  ],
};

export const experience = {
  eyebrow: 'Experiência',
  role: 'Analista de Crédito & Atendimento ao Cliente',
  description:
    'Antes da tecnologia, atuei analisando risco e atendendo clientes — e isso molda como programo hoje.',
  skills: [
    { title: 'Pensamento analítico', description: 'Analisar dados incompletos e decidir com segurança — hoje aplico isso em modelagem de dados e lógica de negócio.' },
    { title: 'Atenção aos detalhes', description: 'Um erro de análise de crédito custava caro; um bug em produção também. Trato os dois com o mesmo cuidado.' },
    { title: 'Resolução de problemas', description: 'Atendimento ao cliente é debugar pessoas em tempo real — a mesma paciência vale para debugar código.' },
    { title: 'Comunicação e organização', description: 'Documentar decisões e explicar o "porquê" com clareza, seja pra um cliente ou pra um pull request.' },
  ],
};

export const techStack: TechItem[] = [
  // Linguagens
  { name: 'C#', category: 'language', level: 'Avançado', description: 'Linguagem principal nos meus sistemas web e no ecossistema .NET.' },
  { name: 'JavaScript', category: 'language', level: 'Avançado', description: 'Base de tudo, do back ao front.' },
  { name: 'TypeScript', category: 'language', level: 'Avançado', description: 'Tipagem estática no dia a dia, front e back.' },
  { name: 'SQL', category: 'language', level: 'Avançado', description: 'Modelagem e consultas em bancos relacionais.' },
  { name: 'Dart', category: 'language', level: 'Intermediário', description: 'Linguagem por trás dos meus apps Flutter.' },
  // Backend
  { name: 'ASP.NET Core MVC', category: 'backend', level: 'Avançado', description: 'Framework principal para meus sistemas completos em C#.' },
  { name: 'Node.js', category: 'backend', level: 'Avançado', description: 'Runtime para APIs e serviços em JavaScript/TypeScript.' },
  { name: 'Express', category: 'backend', level: 'Avançado', description: 'Construção de APIs REST em Node.js.' },
  { name: 'REST APIs', category: 'backend', level: 'Avançado', description: 'Design e consumo de APIs RESTful.' },
  // Banco de Dados
  { name: 'MySQL', category: 'database', level: 'Avançado', description: 'Banco relacional usado na maioria dos meus sistemas.' },
  { name: 'PostgreSQL', category: 'database', level: 'Intermediário', description: 'Banco relacional para dados críticos.' },
  { name: 'MongoDB', category: 'database', level: 'Básico', description: 'Em estudo: persistência não-relacional.' },
  // Frontend
  { name: 'HTML', category: 'frontend', level: 'Avançado', description: 'Estrutura semântica de páginas.' },
  { name: 'CSS', category: 'frontend', level: 'Avançado', description: 'Estilização e responsividade.' },
  { name: 'Bootstrap', category: 'frontend', level: 'Intermediário', description: 'Prototipação rápida de interfaces administrativas.' },
  { name: 'React', category: 'frontend', level: 'Intermediário', description: 'Interfaces modernas com componentização e consumo de APIs.' },
  { name: 'Razor Views', category: 'frontend', level: 'Intermediário', description: 'Views server-side nos meus sistemas ASP.NET.' },
  // Mobile
  { name: 'Flutter', category: 'frontend', level: 'Intermediário', description: 'Apps mobile multiplataforma.' },
  // Ferramentas
  { name: 'Git', category: 'tools', level: 'Avançado', description: 'Controle de versão no fluxo diário.' },
  { name: 'GitHub', category: 'tools', level: 'Avançado', description: 'Colaboração e versionamento de projetos.' },
  { name: 'Docker', category: 'tools', level: 'Básico', description: 'Em estudo: containers para ambientes consistentes.' },
  { name: 'Entity Framework', category: 'backend', level: 'Básico', description: 'Em estudo: ORM para o ecossistema .NET.' },
  { name: 'JWT', category: 'backend', level: 'Básico', description: 'Em estudo: autenticação e autorização stateless.' },
  { name: 'Cloud Computing', category: 'tools', level: 'Básico', description: 'Em estudo: deploy e infraestrutura em nuvem.' },
];

export const projects: Project[] = [
  {
    id: 'partiu-destino',
    title: 'Partiu Destino — Plataforma Mobile e Web de Turismo',
    description:
      'Plataforma completa de turismo desenvolvida como TCC, com app mobile em Flutter e sistema web administrativo em ASP.NET Core MVC — meu projeto de maior escala.',
    longDescription:
      'Objetivo: criar uma plataforma de turismo capaz de conectar usuários a experiências de viagem, com destinos, pacotes, hospedagens e solicitações de viagem personalizada. ' +
      'Arquitetura: app mobile em Flutter/Dart consumindo uma API, com sistema web administrativo em ASP.NET Core MVC (C#, .NET) e banco de dados MySQL.',
    objective:
      'Criar uma plataforma de turismo capaz de conectar usuários a experiências de viagem, permitindo visualizar destinos, pacotes turísticos, hospedagens e realizar solicitações de viagem personalizada — resolvendo a necessidade real de facilitar o planejamento de viagens de ponta a ponta.',
    howItWasBuilt:
      'App mobile em Flutter/Dart consumindo uma API, com sistema web administrativo em ASP.NET Core MVC (C#, .NET) e persistência em MySQL. Separei claramente app, painel administrativo e banco de dados, pensando em cada parte como uma peça de um produto maior — cada plataforma com sua responsabilidade bem definida.',
    features: [
      'Cadastro e login de usuários',
      'Catálogo de destinos, pacotes turísticos e hospedagens',
      'Solicitação de viagem personalizada',
      'Painel administrativo completo para gestão de conteúdo',
      'Controle de sessão e autorização de acesso',
    ],
    whatILearned:
      'Precisei unir conhecimentos de diferentes áreas — mobile, web, backend e banco de dados — numa única solução coerente, o que exigiu pensar arquitetura de verdade, não só telas funcionando isoladas. Ganhei uma visão muito mais próxima de desenvolvimento de produto real.',
    mindsetShift:
      'Deixei de pensar em "fazer o sistema funcionar" e passei a pensar em produto: a experiência do usuário do início ao fim, do aplicativo ao painel administrativo. Foi a consequência de tudo que vinha aprendendo até aqui — a prova de que consigo transformar uma ideia numa aplicação funcional de ponta a ponta.',
    tags: ['Flutter', 'Dart', 'ASP.NET Core MVC', 'C#', 'MySQL', 'Arquitetura completa'],
    image: '/projects/partiu-destino.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Partiu-Destino-Mobile',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'salao-de-beleza',
    title: 'Salão de Beleza — Sistema Empresarial de Gestão',
    description:
      'Sistema web em ASP.NET Core MVC para gerenciamento completo de salão de beleza, com múltiplos perfis de acesso, autenticação segura e soft delete.',
    longDescription:
      'Sistema desenvolvido em C#, ASP.NET Core MVC, .NET 8 e MySQL 8, para gerenciamento completo de um salão de beleza, incluindo clientes, profissionais, serviços, produtos e agendamentos.',
    objective:
      'Centralizar a gestão de um salão de beleza — clientes, profissionais, serviços, produtos e agendamentos — considerando desde o início diferentes tipos de usuário, cada um com permissões específicas.',
    howItWasBuilt:
      'Sistema em ASP.NET Core MVC (.NET 8) com MySQL 8, Bootstrap 5 e jQuery na interface. Implementei três perfis de acesso (Administrador, Gerente e Recepcionista), hash de senha com BCrypt.Net-Next e exclusão lógica (soft delete) através de um campo de controle de ativação, para preservar histórico em vez de apagar registros definitivamente.',
    features: [
      'Agendamento relacionando cliente, profissional e serviço',
      'Três perfis de acesso com permissões distintas',
      'Upload de fotos de profissionais',
      'Autenticação com hash de senha (BCrypt) e controle de sessão',
      'Exclusão lógica (soft delete) para preservar histórico',
    ],
    whatILearned:
      'Aprofundei segurança de aplicação de verdade — hash de senha, controle de sessão por perfil — e aprendi que sistemas reais precisam considerar usuários diferentes, permissões e histórico de dados, não só a funcionalidade isolada.',
    mindsetShift:
      'Passei a pensar em quem usa o sistema: nem todo usuário deveria ver ou fazer tudo. Permissão deixou de ser detalhe e virou parte do design do sistema desde o início — a mesma lógica que uso hoje para pensar em segurança de qualquer aplicação.',
    tags: ['C#', 'ASP.NET Core MVC', '.NET 8', 'MySQL', 'BCrypt', 'Permissões'],
    image: '/projects/salao-de-beleza.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Salao-de-Beleza-ASPNET',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'rocket-games',
    title: 'RocketGames — Plataforma de E-commerce de Jogos',
    description:
      'Loja digital de jogos em ASP.NET Core MVC, com carrinho de compras, área administrativa e autenticação — meu primeiro sistema voltado ao usuário final.',
    longDescription:
      'Aplicação web desenvolvida em ASP.NET Core MVC simulando uma loja digital de jogos, integrando backend, frontend e banco de dados MySQL.',
    objective:
      'Simular uma loja online de jogos digitais, unindo experiência do usuário (catálogo, busca, carrinho) e gestão administrativa (cadastro, edição e exclusão de produtos) num único sistema.',
    howItWasBuilt:
      'Loja em ASP.NET Core MVC (C#) com MySQL, Razor Views para as telas e JavaScript para interações, incluindo um carrinho de compras persistido em LocalStorage — mantendo os itens selecionados mesmo durante a navegação.',
    features: [
      'Busca e filtros de jogos',
      'Carrinho de compras persistido em LocalStorage',
      'Cadastro, login e autenticação de usuários',
      'Área administrativa completa (cadastrar, editar e excluir jogos)',
      'Avaliações e interação com os produtos',
    ],
    whatILearned:
      'Entendi que aplicações reais precisam considerar muito mais do que funcionalidades isoladas — fluxo de navegação, organização de dados, segurança e manutenção futura entram todos na equação de um e-commerce.',
    mindsetShift:
      'Foi a virada de sistemas administrativos internos para aplicações pensadas para o cliente final. Comecei a pensar não só como programador, mas como alguém construindo um produto digital de verdade.',
    tags: ['C#', 'ASP.NET Core MVC', 'MySQL', 'E-commerce', 'JavaScript'],
    image: '/projects/rocket-games.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Loja-de-Jogos-ASPNET',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'olimpiadas-wiki',
    title: 'Olimpíadas Wiki — Enciclopédia Digital de Jogos Olímpicos',
    description:
      'Aplicação web desenvolvida em ASP.NET MVC que reúne informações sobre as Olimpíadas, funcionando como uma enciclopédia interativa com atletas, modalidades esportivas e histórico dos jogos.',
    longDescription:
      'Sistema web em ASP.NET Core MVC que apresenta informações organizadas e interativas sobre as Olimpíadas, permitindo visualizar dados sobre países, atletas, modalidades esportivas e histórico dos jogos olímpicos ao longo dos anos.',
    objective:
      'Criar uma plataforma web que funcione como uma "Wiki das Olimpíadas", permitindo aos usuários explorar informações sobre países participantes, atletas, modalidades esportivas e edições dos jogos de forma organizada e acessível.',
    howItWasBuilt:
      'Desenvolvida em ASP.NET Core MVC com C#, HTML5 e CSS3, a aplicação segue a arquitetura padrão do ASP.NET com Controllers responsáveis pela lógica de negócio, Models representando os dados das Olimpíadas, e Views em Razor para a interface do usuário. Integração com banco de dados SQL para persistência das informações.',
    features: [
      'Visualização de informações sobre países participantes',
      'Listagem detalhada de atletas',
      'Consulta de modalidades esportivas',
      'Navegação dinâmica entre páginas',
      'Interface amigável e organizada',
      'Histórico de edições dos jogos olímpicos',
    ],
    whatILearned:
      'Aprofundei meu conhecimento em organização de dados complexos e apresentação de informações de forma clara e intuitiva. Aprendi a estruturar grandes volumes de dados em uma aplicação web mantendo performance e usabilidade.',
    mindsetShift:
      'Compreendi que nem todo sistema precisa ser transacional — às vezes o foco é em apresentar informação de forma clara e navegável. Isso me ajudou a pensar em diferentes tipos de aplicações e seus propósitos específicos.',
    tags: ['C#', 'ASP.NET Core MVC', 'SQL', 'HTML5', 'CSS3'],
    image: '/projects/olimpiadas-wiki.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Olimpiadas-Wiki-ASPNET',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'api-rest-node',
    title: 'API REST Node.js — Simulação de Operações Bancárias',
    description:
      'API REST construída com Node.js e Express para simulação de operações bancárias, utilizando estrutura orientada a objetos e manipulação de dados via JSON.',
    longDescription:
      'Projeto de backend que implementa uma API RESTful completa usando Node.js e Express, simulando operações bancárias reais como transferências, depósitos e saques, com estrutura orientada a objetos e persistência de dados em JSON.',
    objective:
      'Desenvolver uma API REST robusta que simule operações bancárias reais, aplicando conceitos de Programação Orientada a Objetos, design RESTful e manipulação de dados estruturados, consolidando conhecimentos em backend moderno com Node.js.',
    howItWasBuilt:
      'API desenvolvida em Node.js com Express, utilizando classes para representar entidades bancárias (Conta, Cliente, Transação), rotas RESTful para operações CRUD, e persistência de dados em JSON. Implementei validações, tratamento de erros e estrutura modular para facilitar manutenção e escalabilidade.',
    features: [
      'Operações bancárias completas (depósito, saque, transferência)',
      'Autenticação e validação de contas',
      'Histórico de transações',
      'Cálculo de juros e taxas',
      'Endpoints RESTful bem documentados',
      'Tratamento robusto de erros',
    ],
    whatILearned:
      'Consolidei meu conhecimento em backend moderno com Node.js e Express, entendendo como estruturar uma API profissional com validações, tratamento de erros e organização de código escalável. Aprendi a pensar em regras de negócio complexas no contexto de uma API.',
    mindsetShift:
      'Passei a compreender que backend não é só banco de dados — é lógica de negócio, validações, segurança e design de API. Essa experiência me preparou para trabalhar em sistemas mais complexos e profissionais.',
    tags: ['Node.js', 'Express', 'JavaScript', 'REST API', 'POO', 'JSON'],
    image: '/projects/api-rest-node.jpg',
    githubUrl: 'https://github.com/Gustavo7064/API-REST-NODE',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'biblioteca-mvc',
    title: 'Biblioteca ASP.NET Core MVC — Sistema de Gerenciamento',
    description:
      'Sistema completo de gestão de biblioteca — meu primeiro sistema unindo backend, banco de dados e interface integrada num único projeto.',
    longDescription:
      'Sistema web desenvolvido em ASP.NET Core MVC e MySQL para gerenciamento completo de uma biblioteca, incluindo controle de livros, usuários e empréstimos.',
    objective:
      'Criar um sistema completo para gerenciamento de uma biblioteca, controlando livros, usuários, autores, editoras, gêneros e empréstimos, simulando o funcionamento real de um acervo.',
    howItWasBuilt:
      'Sistema em C# e ASP.NET Core MVC com MySQL, seguindo a arquitetura MVC: Models representando as entidades (Usuário, Livro, Autor, Editora, Gênero, Empréstimo), Views em Razor com Bootstrap, e Controllers coordenando o fluxo entre eles. Dois perfis de acesso: Bibliotecário e Administrador.',
    features: [
      'CRUD completo de livros, autores, editoras e gêneros',
      'Controle de empréstimos relacionando usuários e livros',
      'Dois perfis de acesso com permissões específicas',
      'Autenticação com login e controle de sessão',
      'Modelagem de banco relacional com chaves estrangeiras',
    ],
    whatILearned:
      'Comecei a entender como sistemas reais são estruturados — que desenvolver vai além de escrever código, envolvendo organização, arquitetura, segurança, experiência do usuário e persistência de dados trabalhando juntas.',
    mindsetShift:
      'Passei a enxergar cada parte do sistema (Model, View, Controller) como uma responsabilidade separada, em vez de misturar tudo num único arquivo — a base que uso até hoje em qualquer sistema ASP.NET.',
    tags: ['C#', 'ASP.NET Core MVC', 'MySQL', 'MVC', 'Autenticação'],
    image: '/projects/biblioteca-mvc.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Biblioteca-ASPNET',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'disney-universe',
    title: 'Disney Universe — Aplicação React com Consumo de API REST',
    description:
      'Aplicação em React que consome uma API pública de personagens Disney, com busca em tempo real e navegação entre páginas.',
    longDescription:
      'Aplicação web desenvolvida em React com integração a uma API pública, explorando componentização, navegação entre páginas e consumo de dados externos.',
    objective:
      'Desenvolver uma aplicação web interativa em React, capaz de consumir uma API pública, aplicando conceitos de componentização, gerenciamento de estado e integração com dados externos.',
    howItWasBuilt:
      'Aplicação em React com Vite, consumindo uma API pública via Fetch API, com rotas gerenciadas pelo React Router DOM e interface responsiva construída com Flexbox e Grid.',
    features: [
      'Busca em tempo real de personagens',
      'Seleção de personagem aleatório',
      'Navegação entre páginas com React Router',
      'Página inicial informativa sobre o universo Disney',
      'Interface responsiva para diferentes tamanhos de tela',
    ],
    whatILearned:
      'Entendi como aplicações frontend modernas são construídas — componentes, estados, comunicação com APIs e atualização dinâmica da interface — e como frontend e backend se comunicam de verdade através de dados.',
    mindsetShift:
      'Uma aplicação web deixou de ser só páginas estáticas para mim — passou a ser interface que reage a dados e à interação do usuário em tempo real. Essa mudança de visão ajudou diretamente nos sistemas ASP.NET que vieram depois.',
    tags: ['React', 'JavaScript', 'React Router', 'Consumo de API'],
    image: '/projects/disney-universe.jpg',
    githubUrl: 'https://github.com/Gustavo7064/React-SiteFilme',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: false,
  },
  {
    id: 'flutter-evolution',
    title: 'Explorando Desenvolvimento Mobile com Flutter',
    description:
      'Dois projetos mobile (Contador de Truco e Menu de Navegação) que marcam minha entrada no desenvolvimento multiplataforma.',
    longDescription:
      'Etapa de aprendizado onde desenvolvi aplicações mobile utilizando Flutter e Dart, explorando interfaces, navegação e componentes multiplataforma.',
    objective:
      'Compreender como aplicações mobile são estruturadas: como interfaces são construídas através de componentes e como funciona a navegação entre diferentes telas.',
    howItWasBuilt:
      'Dois apps em Flutter/Dart: um contador de pontos para partidas de Truco, e um segundo projeto de estudo de navegação com Bottom e Top Navigation — ambos com build multiplataforma (Android, iOS, Web, Desktop).',
    features: [
      'Controle de pontuação em tempo real (Contador de Truco)',
      'Menu inferior (Bottom Navigation) e superior (Top Navigation)',
      'Navegação entre páginas',
      'Organização de widgets e telas',
      'Compilação para múltiplas plataformas',
    ],
    whatILearned:
      'Essa fase ampliou minha visão de desenvolvimento além da web — experiência de toque, fluxo de navegação e adaptação a diferentes dispositivos passaram a fazer parte do meu repertório.',
    mindsetShift:
      'Percebi que não precisava ficar limitado a uma única tecnologia. Esse aprendizado voltou, em escala muito maior, no aplicativo mobile do Partiu Destino.',
    tags: ['Flutter', 'Dart', 'Mobile', 'Multiplataforma'],
    image: '/projects/flutter-evolution.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Contador-de-Truco',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: false,
  },
  {
    id: 'hamburgueria',
    title: 'Sistema de Gestão de Hamburgueria',
    description:
      'Projeto que marca minha transição de interfaces web para C# e Programação Orientada a Objetos — o início da minha formação em back-end.',
    longDescription:
      'Sistema desenvolvido em C# e .NET para simular o funcionamento de uma hamburgueria, aplicando os primeiros conceitos de Programação Orientada a Objetos.',
    objective:
      'Desenvolver um sistema capaz de simular o funcionamento de uma hamburgueria, controlando pedidos, clientes, produtos e o cálculo automático do valor das compras.',
    howItWasBuilt:
      'Sistema em C# e .NET, com pedidos, clientes e produtos organizados em classes, usando listas (Collections) para gerenciar itens de pedido e scripts SQL para estruturar o banco de dados.',
    features: [
      'Criação e histórico de pedidos',
      'Registro de clientes',
      'Cálculo automático do valor total da compra',
      'Organização da lógica de negócio em classes específicas',
      'Separação de responsabilidades entre partes da aplicação',
    ],
    whatILearned:
      'Comecei a enxergar o desenvolvimento de software além da interface — aprendi a dividir um sistema em classes, reutilizar código e pensar em regras de negócio pela primeira vez.',
    mindsetShift:
      'Deixei de pensar só em interface e comecei a pensar em como estruturar a lógica por trás dela — o ponto de virada que marcou o início da minha formação em back-end.',
    tags: ['C#', '.NET', 'POO', 'Lógica de negócio'],
    image: '/projects/hamburgueria.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Sistema-de-Gestao-de-Hamburgueria',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: false,
  },
  {
    id: 'calculadora-bhaskara',
    title: 'Calculadora de Bhaskara',
    description:
      'Um dos primeiros projetos da minha formação, consolidando fundamentos de HTML, CSS e JavaScript através de uma aplicação interativa que resolve equações de segundo grau.',
    longDescription:
      'Um dos primeiros projetos desenvolvidos durante minha formação, responsável por consolidar fundamentos de HTML, CSS e JavaScript através de uma calculadora que implementa a fórmula de Bhaskara.',
    objective:
      'Desenvolver uma aplicação capaz de resolver equações de segundo grau utilizando a fórmula de Bhaskara, exercitando lógica de programação, manipulação do DOM e validação de dados.',
    howItWasBuilt:
      'Página em HTML, CSS e JavaScript puro, com manipulação do DOM para atualizar a interface sem recarregar a página, validação dos dados informados (coeficientes a, b e c), cálculo do discriminante e exibição dinâmica das raízes da equação.',
    features: [
      'Cálculo automático das raízes de equações de segundo grau',
      'Validação de coeficientes e tratamento de casos especiais',
      'Exibição de discriminante (delta)',
      'Atualização dinâmica da interface sem recarregar a página',
      'Validação de dados com mensagens de erro',
      'Interface responsiva para diferentes tamanhos de tela',
    ],
    whatILearned:
      'Entendi como JavaScript controla uma interface por completo e comecei a desenvolver o raciocínio lógico para resolver problemas com código — a base para todos os projetos que vieram depois.',
    mindsetShift:
      'Foi aqui que uma página deixou de ser estática pra mim e passou a responder às ações do usuário — a virada que tornou possível toda a evolução que veio depois.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Lógica matemática'],
    image: '/projects/calculadora-bhaskara.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Calculadora-de-Bhaskara',
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: false,
  },
];

export const timeline: TimelineItem[] = [
  { year: '01', title: 'Calculadora de Bhaskara', description: 'Fundamentos: primeiro contato com HTML, CSS e JavaScript, manipulação do DOM e lógica condicional.' },
  { year: '02', title: 'Curso Técnico', description: 'Início do Técnico em Desenvolvimento de Sistemas na ETEC Professor Basilides de Godoy.' },
  { year: '03', title: 'Sistema de Gestão de Hamburgueria', description: 'Entrada no back-end: C#, .NET e Programação Orientada a Objetos aplicados a um sistema real.' },
  { year: '04', title: 'Flutter & Desenvolvimento Mobile', description: 'Expansão para mobile: componentes, layouts e navegação com Flutter e Dart.' },
  { year: '05', title: 'Disney Universe', description: 'Front-end moderno: React, componentização e consumo de API REST.' },
  { year: '06', title: 'Biblioteca ASP.NET Core MVC', description: 'Primeiro sistema completo: C#, ASP.NET Core MVC, MySQL e autenticação, consolidando arquitetura MVC.' },
  { year: '07', title: 'RocketGames', description: 'Aplicação voltada ao usuário final: e-commerce com carrinho, catálogo e área administrativa.' },
  { year: '08', title: 'Salão de Beleza', description: 'Sistema empresarial: múltiplos perfis de acesso, hash de senha com BCrypt e soft delete.' },
  { year: '09', title: 'Olimpíadas Wiki', description: 'Sistema informativo: ASP.NET MVC com dados sobre Olimpíadas, atletas e modalidades esportivas.' },
  { year: '10', title: 'API REST Node.js', description: 'Backend moderno: Node.js e Express para simulação de operações bancárias com POO.' },
  { year: '11', title: 'Partiu Destino', description: 'TCC: projeto de maior escala — mobile, web, back-end e banco de dados unidos numa plataforma. Nota MB.' },
  { year: '12', title: 'Node.js & TypeScript', description: 'Aprofundamento em back-end moderno com JavaScript/TypeScript no ecossistema Node.' },
  { year: '13', title: 'Docker & Microsserviços', description: 'Em estudo: containers e arquitetura distribuída para sistemas que escalam.' },
  { year: 'Hoje', title: 'Cloud & Este Portfólio', description: 'Em estudo: deploy em nuvem — enquanto construo este portfólio com Node.js, Express, TypeScript e PostgreSQL.' },
];

export const stats: StatItem[] = [
  { label: 'Projetos', value: 11 },
  { label: 'Tecnologias', value: 24 },
  { label: 'Certificados', value: 3 },
  { label: 'Anos de experiência prévia', value: 3 },
  { label: 'Anos estudando dev', value: 2 },
];
