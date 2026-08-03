import type { Project, StatItem, TechItem, TimelineItem } from '@/types';

export const profile = {
  name: 'Gustavo Lima',
  role: 'Desenvolvedor Back-end',
  subtitle:
    'Construo sistemas com Node.js, TypeScript, Express, ASP.NET Core e C# — evoluindo passo a passo, dos fundamentos da web até APIs completas, sempre com foco em back-end.',
  github: 'https://github.com/Gustavo7064',
  // TODO: troque pelo seu LinkedIn e email reais
  linkedin: 'https://www.linkedin.com/in/gustavo-lima-b419822ab/',
  email: 'gustavorochamaciel2007@gmail.com',
  cvUrl: '/cv-gustavo-lima.pdf',
  githubUsername: 'Gustavo7064',
};

export const about = {
  eyebrow: 'Sobre mim',
  paragraphs: [
    'Antes de escrever a primeira linha de código, passei anos como Analista de Crédito e no Atendimento ao Cliente. Foi ali que aprendi a analisar informação com cuidado, tomar decisão com dado incompleto e resolver problema de gente de verdade — competências que uso todo dia no back-end.',
    'Meu primeiro contato mais profundo com tecnologia foi em dezembro de 2023, num curso de Modelagem de Dados pela Fundação Bradesco. Em janeiro de 2025 comecei o Técnico em Desenvolvimento de Sistemas na ETEC Professor Basilides de Godoy, e a partir daí evoluí projeto após projeto: de HTML, CSS e JavaScript para C# e Orientação a Objetos, depois sistemas completos em ASP.NET Core MVC, meu primeiro contato com Node.js e Express, e um TCC (Partiu Destino) que uniu tudo isso numa plataforma real.',
    'Hoje, através dos cursos da Origamid, aprofundo Node.js e TypeScript — meu foco definitivo é back-end. Este portfólio, construído com Node.js, Express, TypeScript e PostgreSQL, é também onde estou aprendendo Docker, deploy e DevOps. Busco minha primeira oportunidade como Desenvolvedor Back-end Júnior.',
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
  { name: 'C#', category: 'language', level: 'Avançado', description: 'Linguagem principal nos meus sistemas ASP.NET.' },
  { name: 'JavaScript', category: 'language', level: 'Avançado', description: 'Base de tudo, do front aos meus primeiros passos em Node.js.' },
  { name: 'TypeScript', category: 'language', level: 'Intermediário', description: 'Foco atual de estudo, aplicado neste portfólio.' },
  { name: 'SQL', category: 'language', level: 'Avançado', description: 'Modelagem e consultas em bancos relacionais desde o curso da Fundação Bradesco.' },
  { name: 'Dart', category: 'language', level: 'Intermediário', description: 'Linguagem por trás do app mobile do Partiu Destino.' },
  // Backend
  { name: 'ASP.NET Core MVC', category: 'backend', level: 'Avançado', description: 'Framework usado nos meus principais sistemas web em C#.' },
  { name: 'Node.js', category: 'backend', level: 'Intermediário', description: 'Meu foco atual: APIs REST, rotas e controllers.' },
  { name: 'Express', category: 'backend', level: 'Intermediário', description: 'Construção de APIs REST em Node.js.' },
  { name: 'REST APIs', category: 'backend', level: 'Intermediário', description: 'Design de rotas, controllers e integração frontend x backend.' },
  // Banco de Dados
  { name: 'MySQL', category: 'database', level: 'Avançado', description: 'Banco relacional usado na maioria dos meus sistemas ASP.NET.' },
  { name: 'PostgreSQL', category: 'database', level: 'Intermediário', description: 'Banco relacional usado neste portfólio.' },
  { name: 'Modelagem de Dados', category: 'database', level: 'Avançado', description: 'Bancos relacionais e não relacionais — meu ponto de partida na tecnologia.' },
  // Frontend
  { name: 'HTML', category: 'frontend', level: 'Avançado', description: 'Estrutura semântica de páginas.' },
  { name: 'CSS', category: 'frontend', level: 'Avançado', description: 'Estilização e responsividade.' },
  { name: 'Razor Views', category: 'frontend', level: 'Intermediário', description: 'Views server-side nos meus sistemas ASP.NET.' },
  // Mobile
  { name: 'Flutter', category: 'frontend', level: 'Intermediário', description: 'App mobile do Partiu Destino, meu TCC.' },
  // Ferramentas / em estudo
  { name: 'Git', category: 'tools', level: 'Avançado', description: 'Controle de versão no fluxo diário.' },
  { name: 'GitHub', category: 'tools', level: 'Avançado', description: 'Colaboração e versionamento de projetos.' },
  { name: 'Docker', category: 'tools', level: 'Básico', description: 'Em estudo, através da construção deste portfólio.' },
  { name: 'Deploy & DevOps', category: 'tools', level: 'Básico', description: 'Em estudo, através da construção deste portfólio.' },
  { name: 'Entity Framework', category: 'backend', level: 'Básico', description: 'Em estudo: ORM para o ecossistema .NET.' },
  { name: 'JWT', category: 'backend', level: 'Básico', description: 'Em estudo: autenticação e autorização stateless.' },
  { name: 'MongoDB', category: 'database', level: 'Básico', description: 'Contato inicial no curso de Modelagem de Dados; em aprofundamento.' },
];

export const projects: Project[] = [
  {
    id: 'partiu-destino',
    title: 'Partiu Destino — TCC: Backend Node.js, Painel ASP.NET e App Flutter',
    description:
      'Meu maior projeto: backend próprio em Node.js e Express, painel administrativo em ASP.NET Core MVC e aplicativo mobile em Flutter, com integração completa entre as três camadas. Reconhecido como um dos melhores projetos da turma.',
    longDescription:
      'Trabalho de Conclusão de Curso desenvolvido durante vários meses, unindo tudo o que aprendi ao longo do curso técnico numa plataforma de turismo completa.',
    objective:
      'Construir uma plataforma de turismo completa, unindo um backend próprio, um painel administrativo web e um aplicativo mobile — juntando numa única entrega tudo o que aprendi ao longo do curso técnico.',
    howItWasBuilt:
      'Arquitetura em três camadas: um backend próprio construído com Node.js, Express e API REST própria; um painel administrativo web em ASP.NET Core MVC; e um aplicativo mobile em Flutter e Dart — todos integrados a um banco de dados comum, com comunicação completa entre as três camadas.',
    features: [
      'API REST própria em Node.js e Express',
      'Painel administrativo web em ASP.NET Core MVC',
      'Aplicativo mobile em Flutter consumindo a API',
      'Integração completa entre backend, painel e app',
      'Banco de dados compartilhado entre as camadas',
    ],
    whatILearned:
      'Consegui unir tudo o que havia aprendido durante o curso técnico numa única entrega: backend em Node.js, sistemas web em ASP.NET e desenvolvimento mobile em Flutter, todos se comunicando de verdade.',
    mindsetShift:
      'Deixei de pensar em projetos isolados e passei a pensar em arquitetura de produto: como diferentes camadas (API, painel, app) conversam entre si. Foi reconhecido como um dos melhores projetos da turma.',
    tags: ['Node.js', 'Express', 'ASP.NET Core MVC', 'Flutter', 'Dart', 'API REST'],
    image: '/projects/partiu-destino.svg',
    repos: [
      { label: 'Painel Web (ASP.NET)', url: 'https://github.com/Gustavo7064/Agencia-de-Turismo-ASPNET' },
      { label: 'App Mobile (Flutter)', url: 'https://github.com/Gustavo7064/Partiu-Destino-Mobile' },
      // TODO: adicione o link do repositório do backend Node.js/Express do Partiu Destino, se estiver publicado
    ],
    // TODO: troque pelo link real do vídeo no YouTube
    youtubeUrl: 'https://www.youtube.com/watch?v=UjfByoxlJE8',
    // Exemplo de segundo vídeo na mesma página; troque pelo link real desejado
    videoUrls: ['https://www.youtube.com/watch?v=_Vmr7WX94_Y'],
    featured: true,  
  },

  {
    id: 'rocket-games',
    title: 'Rocket Games — Meu Primeiro Sistema Completo',
    description:
      'Desenvolvido entre agosto e novembro de 2025 em ASP.NET Core MVC, foi meu primeiro sistema completo: arquitetura MVC, autenticação, banco de dados e CRUD.',
    longDescription:
      'Loja digital de jogos desenvolvida em ASP.NET Core MVC, marcando minha entrada em sistemas web de maior porte.',
    objective:
      'Construir meu primeiro sistema completo do zero, simulando uma loja digital de jogos e aplicando, pela primeira vez, arquitetura MVC de ponta a ponta.',
    howItWasBuilt:
      'Sistema em ASP.NET Core MVC (C#) com MySQL, Razor Views para as telas e JavaScript para interações, incluindo um carrinho de compras persistido em LocalStorage.',
    features: [
      'Catálogo de jogos com busca e filtros',
      'Carrinho de compras persistido em LocalStorage',
      'Cadastro, login e autenticação de usuários',
      'Área administrativa para cadastrar, editar e excluir jogos',
      'Organização completa em arquitetura MVC',
    ],
    whatILearned:
      'Aprendi arquitetura MVC na prática, autenticação, modelagem e uso de banco de dados, operações CRUD completas e como organizar um projeto de maior porte.',
    mindsetShift:
      'Foi a virada de pequenos exercícios para um sistema completo — a primeira vez que precisei pensar em organização de projeto, não só em uma funcionalidade isolada.',
    tags: ['C#', 'ASP.NET Core MVC', 'MySQL', 'E-commerce'],
    image: '/projects/rocket-games.svg',
    githubUrl: 'https://github.com/Gustavo7064/Loja-de-Jogos-ASPNET',
    // TODO: troque pelo link real do vídeo no YouTube
    youtubeUrl: 'https://www.youtube.com/watch?v=ZTcwgbgJBvM',
    featured: true,
  },
  {
    id: 'api-rest-node',
    title: 'API REST Node — Meu Primeiro Contato com Backend em JavaScript',
    description:
      'Em agosto de 2025, em paralelo ao Rocket Games, desenvolvi minhas primeiras APIs REST com Node.js — o início do meu foco em back-end.',
    longDescription:
      'Projeto de prática construído para aprender os fundamentos de uma API REST com Node.js e Express, marcando o início da minha especialização em back-end.',
    objective:
      'Aprender, na prática, como construir uma API REST do zero: rotas, controllers e a comunicação entre frontend e backend.',
    howItWasBuilt:
      'API construída com Node.js e Express, organizando rotas e controllers separadamente e testando a integração entre frontend e backend.',
    features: [
      'Rotas REST organizadas por recurso',
      'Controllers separados da lógica de rotas',
      'Testes de integração frontend x backend',
      'Primeiros passos com Express',
    ],
    whatILearned:
      'Tive meu primeiro contato real com Node.js, Express, rotas, controllers e o funcionamento de uma API REST — a base de tudo que uso hoje em back-end.',
    mindsetShift:
      'Foi o momento em que decidi focar em back-end. Antes disso eu vinha migrando entre C#, ASP.NET e front-end; aqui percebi onde queria me aprofundar de verdade.',
    tags: ['Node.js', 'Express', 'API REST', 'JavaScript'],
    image: '/projects/api-rest-node.svg',
    githubUrl: 'https://github.com/Gustavo7064/API-REST-NODE',
    featured: true,
  },
  {
    id: 'olimpiadas-wiki',
    title: 'Olimpíadas Wiki — Enciclopédia Digital dos Jogos Olímpicos',
    description:
      'Aplicação web em ASP.NET Core MVC que reúne informações sobre atletas, modalidades esportivas e edições dos Jogos Olímpicos ao longo dos anos.',
    longDescription:
      'Sistema desenvolvido em ASP.NET Core MVC funcionando como uma enciclopédia digital dos Jogos Olímpicos, consolidando meu domínio de aplicações web completas.',
    objective:
      'Reunir, de forma organizada e consultável, informações sobre atletas, modalidades esportivas e edições dos Jogos Olímpicos ao longo dos anos.',
    howItWasBuilt:
      'Aplicação em ASP.NET Core MVC (C#), estruturando entidades como atletas, modalidades e edições dos jogos, seguindo o padrão MVC já consolidado nos projetos anteriores.',
    features: [
      'Consulta de atletas e modalidades esportivas',
      'Organização por edições dos Jogos Olímpicos',
      'Funcionamento como enciclopédia digital consultável',
      'Estrutura MVC organizada em C#',
    ],
    whatILearned:
      'Consolidei meu domínio de aplicações web completas em ASP.NET Core MVC, aplicando a mesma arquitetura em um domínio de dados diferente dos projetos anteriores.',
    mindsetShift:
      'Percebi que a arquitetura MVC que eu vinha aprendendo se aplicava a qualquer domínio de negócio — não era conhecimento preso a um projeto específico.',
    tags: ['C#', 'ASP.NET Core MVC', 'MVC'],
    image: '/projects/olimpiadas-wiki.svg',
    githubUrl: 'https://github.com/Gustavo7064/Olimpiadas-Wiki-ASPNET',
    featured: false,
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
      'Sistema em ASP.NET Core MVC (.NET 8) com MySQL 8, Bootstrap 5 e jQuery na interface. Implementei três perfis de acesso (Administrador, Gerente e Recepcionista), hash de senha com BCrypt.Net-Next e exclusão lógica (soft delete) através de um campo de controle de ativação.',
    features: [
      'Agendamento relacionando cliente, profissional e serviço',
      'Três perfis de acesso com permissões distintas',
      'Upload de fotos de profissionais',
      'Autenticação com hash de senha (BCrypt) e controle de sessão',
      'Exclusão lógica (soft delete) para preservar histórico',
    ],
    whatILearned:
      'Aprofundei segurança de aplicação de verdade — hash de senha, controle de sessão por perfil — e aprendi que sistemas reais precisam considerar usuários diferentes, permissões e histórico de dados.',
    mindsetShift:
      'Passei a pensar em quem usa o sistema: nem todo usuário deveria ver ou fazer tudo. Permissão deixou de ser detalhe e virou parte do design do sistema desde o início.',
    tags: ['C#', 'ASP.NET Core MVC', '.NET 8', 'MySQL', 'BCrypt', 'Permissões'],
    image: '/projects/salao-de-beleza.svg',
    githubUrl: 'https://github.com/Gustavo7064/Salao-de-Beleza-ASPNET',
    // TODO: troque pelo link real do vídeo no YouTube
    youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_AQUI',
    featured: true,
  },
  {
    id: 'biblioteca-mvc',
    title: 'Biblioteca ASP.NET Core MVC — Sistema de Gerenciamento',
    description:
      'Sistema completo de gestão de biblioteca, um dos projetos que consolidou meu domínio de aplicações web completas em ASP.NET Core MVC.',
    longDescription:
      'Sistema web desenvolvido em ASP.NET Core MVC e MySQL para gerenciamento completo de uma biblioteca, incluindo controle de livros, usuários e empréstimos.',
    objective:
      'Criar um sistema completo para gerenciamento de uma biblioteca, controlando livros, usuários e empréstimos, simulando o funcionamento real de um acervo.',
    howItWasBuilt:
      'Sistema em C# e ASP.NET Core MVC com MySQL, seguindo a arquitetura MVC: Models representando as entidades, Views em Razor com Bootstrap, e Controllers coordenando o fluxo entre eles.',
    features: [
      'CRUD completo de livros e usuários',
      'Controle de empréstimos relacionando usuários e livros',
      'Perfis de acesso com permissões específicas',
      'Autenticação com login e controle de sessão',
    ],
    whatILearned:
      'Consolidei a arquitetura MVC aplicada a mais um domínio de negócio, reforçando organização, segurança e persistência de dados trabalhando juntas.',
    mindsetShift:
      'Cada novo sistema ASP.NET reforçava a mesma lição: separar responsabilidades (Model, View, Controller) torna qualquer sistema mais fácil de manter e evoluir.',
    tags: ['C#', 'ASP.NET Core MVC', 'MySQL', 'MVC'],
    image: '/projects/biblioteca-mvc.jpg',
    // TODO: adicione o link do repositório no GitHub
    githubUrl: 'https://github.com/Gustavo7064/SEU-REPO-BIBLIOTECA',
    featured: false,
  },
  {
    id: 'hamburgueria',
    title: 'Sistema de Gestão de Hamburgueria',
    description:
      'Projeto que marcou minha consolidação em C# e Programação Orientada a Objetos, logo no início da minha formação em back-end.',
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
    ],
    whatILearned:
      'Comecei a enxergar o desenvolvimento de software além da interface — aprendi a dividir um sistema em classes, reutilizar código e pensar em regras de negócio pela primeira vez.',
    mindsetShift:
      'Deixei de pensar só em interface e comecei a pensar em como estruturar a lógica por trás dela — o ponto de virada que consolidou minha entrada no back-end.',
    tags: ['C#', '.NET', 'POO', 'Lógica de negócio'],
    image: '/projects/hamburgueria.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Sistema-de-Gestao-de-Hamburgueria',
    featured: false,
  },
  {
    id: 'relogio-digital',
    title: 'Relógio Digital — Consolidando JavaScript',
    description:
      'Entre março e junho de 2025, projeto para praticar arrays, datas e atualização dinâmica de interface — parte da minha consolidação em JavaScript puro.',
    longDescription:
      'Aplicação que exibe data, hora e dia da semana em tempo real, parte de uma sequência de pequenos projetos (junto com Gerador de Números Ímpares e Brasil States Info) para consolidar lógica de programação em JavaScript.',
    objective:
      'Praticar manipulação de datas, arrays e atualização dinâmica de interface em JavaScript puro, consolidando fundamentos antes de avançar para sistemas maiores.',
    howItWasBuilt:
      'Aplicação em HTML, CSS e JavaScript puro, atualizando data, hora e dia da semana em tempo real na interface, sem recarregar a página.',
    features: [
      'Exibição de data, hora e dia da semana em tempo real',
      'Atualização dinâmica da interface',
      'Uso de arrays para os dias da semana',
    ],
    whatILearned:
      'Pratiquei arrays, manipulação de datas e atualização dinâmica de interface — junto com os exercícios de Gerador de Números Ímpares (loops e condicionais) e Brasil States Info (switch case e organização de JavaScript) do mesmo período, fechei o semestre com uma base sólida em JavaScript.',
    mindsetShift:
      'Esses pequenos projetos, feitos em sequência, foram onde JavaScript deixou de ser "só sintaxe" e virou uma ferramenta que eu já sabia usar com confiança para resolver problemas.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM'],
    image: '/projects/relogio-digital.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Relogio',
    featured: false,
  },
  {
    id: 'calculadora-bhaskara',
    title: 'Calculadora de Bhaskara',
    description:
      'Projeto de fevereiro de 2025 para praticar manipulação de DOM, validação e lógica matemática, enquanto aprofundava C# e Orientação a Objetos em paralelo.',
    longDescription:
      'Aplicação web que calcula as raízes de uma equação de segundo grau usando a fórmula de Bhaskara, com validação dos dados informados.',
    objective:
      'Praticar manipulação de DOM, validação de dados e lógica matemática aplicando a fórmula de Bhaskara para resolver equações de segundo grau.',
    howItWasBuilt:
      'Aplicação em HTML, CSS e JavaScript, recebendo os coeficientes da equação, validando os dados informados e calculando as raízes com a fórmula de Bhaskara.',
    features: [
      'Cálculo das raízes de uma equação de segundo grau',
      'Validação dos dados informados pelo usuário',
      'Exibição dinâmica do resultado sem recarregar a página',
    ],
    whatILearned:
      'Reforcei manipulação de DOM e validação de dados, e pratiquei tradução de lógica matemática para código — enquanto, em paralelo, aprofundava C# e Orientação a Objetos.',
    mindsetShift:
      'Comecei a perceber que programar é, na prática, traduzir um problema (nesse caso, matemático) em passos que o computador consegue seguir.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Lógica matemática'],
    image: '/projects/calculadora-bhaskara.jpg',
    githubUrl: 'https://github.com/Gustavo7064/Calculadora-de-Bhaskara',
    featured: false,
  },
  {
    id: 'descobrindo-o-signo',
    title: 'Descobrindo o Signo',
    description:
      'Meu primeiro projeto na ETEC, em janeiro de 2025: uma aplicação que calcula signo, idade, mês e dia da semana de nascimento.',
    longDescription:
      'Primeiro projeto desenvolvido no início do Técnico em Desenvolvimento de Sistemas, aplicando os primeiros conceitos de HTML, CSS e JavaScript.',
    objective:
      'Desenvolver uma aplicação capaz de calcular o signo do usuário a partir da data de nascimento informada, junto com idade, mês e dia da semana de nascimento.',
    howItWasBuilt:
      'Página em HTML, CSS e JavaScript puro, com manipulação do DOM para atualizar a interface sem recarregar a página e validação dos dados informados.',
    features: [
      'Cálculo do signo a partir da data de nascimento',
      'Cálculo de idade, mês e dia da semana de nascimento',
      'Validação de dados com manipulação do DOM',
    ],
    whatILearned:
      'Foi meu primeiro projeto de verdade no curso técnico — pratiquei manipulação de DOM, validação e lógica condicional, a base de tudo que veio depois.',
    mindsetShift:
      'Foi aqui que uma página deixou de ser estática pra mim e passou a responder às ações do usuário — o primeiro passo de toda a evolução que veio a seguir.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM'],
    image: '/projects/descobrindo-o-signo.jpg',
    // TODO: adicione o link do repositório no GitHub
    githubUrl: 'https://github.com/Gustavo7064/SEU-REPO-DESCOBRINDO-O-SIGNO',
    featured: false,
  },
];

export const timeline: TimelineItem[] = [
  { year: 'Dez 2023', title: 'Modelagem de Dados — Fundação Bradesco', description: 'Primeiro contato mais profundo com tecnologia: bancos de dados relacionais, não relacionais e modelagem de dados. O ponto de partida da minha carreira.' },
  { year: 'Jan 2025', title: 'Início do Técnico em Desenvolvimento de Sistemas', description: 'ETEC Professor Basilides de Godoy. Lógica de programação, C#, orientação a objetos, expressões lambda e estruturas condicionais — e meu primeiro projeto, "Descobrindo o Signo", em HTML, CSS e JavaScript.' },
  { year: 'Fev 2025', title: 'Calculadora de Bhaskara & consolidação em C#', description: 'Pratiquei manipulação de DOM, validação e lógica matemática, enquanto aprofundava C# e Orientação a Objetos — base que logo apliquei no Sistema de Gestão de Hamburgueria.' },
  { year: 'Mar–Jun 2025', title: 'Consolidando JavaScript', description: 'Relógio Digital, Gerador de Números Ímpares e Brasil States Info: arrays, datas, loops, switch case. Ao final do semestre já tinha uma base sólida em HTML, CSS, JavaScript, POO e lógica de programação.' },
  { year: 'Ago 2025', title: 'Meus primeiros sistemas grandes', description: 'Rocket Games (ASP.NET Core MVC) foi meu primeiro sistema completo — arquitetura MVC, autenticação, banco de dados e CRUD. Em paralelo, minhas primeiras APIs REST com Node.js e Express, e o início de Flutter e Dart.' },
  { year: '2025', title: 'Sistemas ASP.NET completos', description: 'Olimpíadas Wiki, Salão de Beleza e Biblioteca consolidaram meu domínio de aplicações web completas em ASP.NET Core MVC, enquanto continuava estudando Node.js em paralelo.' },
  { year: 'TCC', title: 'Partiu Destino', description: 'Meu maior projeto: backend próprio em Node.js e Express, painel administrativo em ASP.NET Core MVC e aplicativo mobile em Flutter, com integração completa entre as três camadas. Reconhecido como um dos melhores projetos da turma.' },
  { year: 'Pós-curso', title: 'Origamid: Node.js & TypeScript', description: 'Aprofundando APIs, arquitetura, organização de projetos, tipagem e boas práticas — meu foco definitivamente voltado para back-end.' },
  { year: 'Hoje', title: 'Este Portfólio', description: 'Construído com Node.js, Express, TypeScript e PostgreSQL — e também meu playground para aprender Docker, deploy e DevOps. Representa minha evolução até este momento.' },
];

export const stats: StatItem[] = [
  { label: 'Projetos', value: 20},
  { label: 'Tecnologias', value: 23 },
  { label: 'Meses de curso técnico', value: 18 },
  { label: 'Anos de experiência prévia', value: 3 },
];
