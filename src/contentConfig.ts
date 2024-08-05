import type { MenuItem } from './types';

const ignoredRepos = [ 'nextjs-approuter-shadcn' ];
const externalPages: { [key: string]: string } = {
  'odin-blog-client-service':      'https://odin-blog-client-service-production.up.railway.app',
  'odin-blog-admin-service':       'https://odin-blog-admin-service-production.up.railway.app',
  'odin-blog-api-service':         'https://odin-blog-api-service-production.up.railway.app/api/posts/',
  'odin-members-only':             'https://odin-members-only-production.up.railway.app',
  'odin-inventory-application':    'https://odin-inventory-application-prod-production.up.railway.app',
  'chat-layers':                   'https://chat-layers-production.up.railway.app/',
  'password-manager':              'https://pwdman.up.railway.app/',
  'movie-tracker':                 'https://movie-tracker-production.up.railway.app/',
  'scoreboard':                    'https://scoretracker.up.railway.app',

  'odin-hangman':                  'https://replit.com/@ted_jones671/odin-hangman#hangman.rb',
  'odin-mastermind':               'https://replit.com/@ted_jones671/odin-mastermind#mastermind.rb',
  'odin-tic-tac-toe':              'https://replit.com/@ted_jones671/odin-tic-tac-toe#tic_tac_toe.rb',
  'odin-basic-informational-site': 'https://replit.com/@ted_jones671/odin-basic-informational-site',
}

const portrait = require('./assets/images/portrait.jpg');
const bio = [
  'I am a full stack web developer who really enjoys trying to find new ways to solve novel and complex problems',
  'My goal is to learn as much as I can about how the web works',
];

const techExp: { [key: string]: string[] }[] = [{
  'Primary Language: TypeScript': [],
  'Less experienced languages': [
    'Python',
    'Bash',
    'Ruby',
  ],
  'My Stack': [
    'Runtime: Bun',
    'Database: Turso (SQLite)',
    'Back-End: NextJS',
    'Front-End: React',
    'Styling: Tailwind',
  ]
}, {
    'Other Technologies & Skills:': [
      'Solid understanding of git',
      'Knowledge of basic testing practices',
      'Experience working with APIs',
      'Experience with SQL and NoSQL databases',
      'Familiarity with Linux',
      'Previous tech support experience',
    ],
    'Interested in learning': [
      'SolidJS framework',
      'Functional programming',
      'A compiled language',
    ],
  }
];

const frontEndProjectNames = [
  // 'html-to-pdf',
  // 'instagram-history-finder',
  // 'odin-shopping-cart',
  // 'odin-memory-card',

  // 'odin-personal-portfolio',
  'html-to-pdf',
  'instagram-history-finder',
  'odin-shopping-cart',
  'odin-memory-card',
  'odin-cv-application-v2',
  // 'odin-cv-application',
  'odin-weather-app',
  'odin-todo-list',
  'odin-restaurant-page',
  'odin-tictactoe',
  'odin-library',
  'odin-admin-dashboard',
  'odin-sign-up-form',
  'odin-calculator',
  'odin-etch-a-sketch',
  'odin-rockpaperscissors',
  'odin-landing-page',
];

const backEndProjectNames = [
  'scoreboard',
  'movie-tracker',
  'password-manager',
  'chat-layers',
  'odin-blog-api-service',
  'odin-blog-admin-service',
  'odin-blog-client-service',
  'odin-members-only',
  'odin-inventory-application',
];

const cliRepos: { [key: string]: string[] } = {
  'Algorithms': [
    'odin-knights-travails',
    'odin-binary-search-trees',
    'odin-linked-lists',
    'odin-recursion',
    'odin-bubble-sort',
    'odin-substring',
    'odin-caesar-cipher',
    'odin-stock-picker',
    'advent-of-code-2023',
    'google-foobar',
  ],
  'Command Line Games': [
    'odin-mastermind',
    'odin-hangman',
    'odin-tic-tac-toe',
  ],
}

const devicons: { [key: string]: string } = {
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' ,
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' ,
  'NextJS':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' ,
  'React':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' ,
  // 'Tailwind':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  'Tailwind':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  // 'Tailwind':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg',
  // 'Express':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  'Bun':        'https://api.iconify.design/devicon/bun.svg',
  'NodeJS':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  'Bash':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' ,
  'MongoDB':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
  // 'MySQL':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' ,
  'SQLite':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'HTML':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' ,
  'CSS':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
  'Git':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
  'Ruby':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg',
  'Python':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
}

const linkOptions: { [key: string]: MenuItem } = {
  'Resume': { href: require('./assets/documents/resume.pdf'), icon: 'fa-solid fa-file-invoice', newTab: true },
  'GitHub': { href: 'https://github.com/tediferJones', icon: 'fa-brands fa-github', newTab: true },
  'Email': { href: 'mailto:theo_drz@live.com', icon: 'fa-solid fa-envelope-open-text', newTab: true, },
  'Phone': { href: 'tel:+14128891992', icon: 'fa-solid fa-phone-volume', newTab: true },

  'About Me':             { href: '#AboutMe' },
  'Technical Experience': { href: '#TechnicalExperience' },
  'Recent Projects':      { href: '#RecentProjects' },
  'Front End Projects':   { href: '#FrontEndProjects' },
  'Full Stack Projects':  { href: '#FullStackProjects' },
  'CLI Projects':         { href: '#CliProjects' },
  'All Projects':         { href: '#AllProjects' },
};

const contactMenu = ['Resume', 'GitHub', 'Email', 'Phone'];
const contactMenuToggles = ['Resume', 'GitHub'];
const subsectionMenu = [
  'About Me', 
  'Technical Experience', 
  'Recent Projects',
  'Front End Projects',
  'Full Stack Projects',
  'CLI Projects',
  'All Projects',
];

export {
  externalPages,
  ignoredRepos,
  portrait,
  bio,
  techExp,
  devicons,
  frontEndProjectNames,
  backEndProjectNames,
  cliRepos,
  contactMenu,
  contactMenuToggles,
  subsectionMenu,
  linkOptions,
}
