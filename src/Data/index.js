export const experience = [
	{
		company: 'Sunsuper',
		title: 'Front End Developer',
		start: 'August 2014',
		end: 'November 2017',
		description: 'I worked with Ektron CMS400.NET to maintain the main marketing site, along with the secure member portal and various other projects.',
		projects: [
      {
        name: 'Accessibility Uplift',
        description: 'After the new outsourced website went live, there was a requirement to uplift the site in order to achieve WCAG AA compliance. Using a combination of WCAG guidelines, automated accessibility tools and an audit from Vision Australia, I updated various parts of the site to ensure that AA compliance was achieved.',
        date: '2017',
        url: 'https://www.sunsuper.com.au/',
        live: false,
      },
			{
				name: 'Responsive Member Portal Refresh',
				description: 'Along with another developer, making as few changes to the markup as posible transformed the secure member portal from a fixed width, desktop only application with a dated design into a responsive app with a design matching the then current marketing site.',
				date: '2016',
        url: 'https://secure.sunsuper.com.au/MemberOnline/',
        live: true,
      },
      {
        name: 'Responsive Marketing Website Refresh',
        description: 'Along with another developer, making as few changes to the markup and underlying template files as possible, transformed the old, fixed width marketing website into a more modern, mobile first responsive site to suit the changing needs of the customers.',
        date: '2015',
        url: 'https://www.sunsuper.com.au/',
        live: false,
      },
		],
	},
	{
		company: 'Compare the Market',
		title: 'Front End Developer',
		start: 'November 2017',
		end: 'Present',
		description: 'As a Front End Developer at Compare the Market I was initiall focussed on building an maintaining the main marketing website - a fully bespoke WordPress theme - and have moved on to working with our other applications, including building a product UI from scratch in React, including helping to define the overall approach for future products.',
		projects: [
			{
				name: 'EverPress',
				description: 'A custom WordPress theme built to power the marketing website, this takes advantage fully custom PHP classes, ES2015 JavaScript, and a custom SCSS library. It uses minimal plugins - only Advanced Custom Fields is related to functionality - and is almost entirely component driven.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/',
        live: true,
      },
      {
        name: 'Unnamed Product UI',
        description: 'A complete greenfield project, we started from a bare Create-React-App installation, and have built the foundation for all future product UIs, including how to structure, test, and implement the application. This has involved using newer React features such as Hooks (including writing custom hooks), Context, and other technlogies such as styled-components and our internal design system and component library.',
        date: '2020',
        url: 'https://www.comparethemarket.com.au/',
        live: false,
      },
			{
				name: 'Financial Consciousness Index',
				description: 'A microsite built to support an independent financial literacy report commissioned by Compare the Market. It houses an online version of an eBook, a savings tip generator, and a budgeting calculator, plus an interactive quiz to calculate the users own "Financial Consciousness Score".',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/financial-consciousness/',
        live: true,
			},
			{
				name: 'Sergei Solutions Hub',
				description: 'A knowledge base intended to support customers looking for answers to specific questions, using WordPress custom post types, Advanced Custom Fields, and JavaScript, I created an interface that allows users to type a question and matches key words to potential answers and scrolls them to the correct response.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/sergei-solutions/',
        live: true,
			},
			{
				name: 'Do I Need Health Insurance Calculator',
				description: 'An interactive quiz that allows a user to answer a series of simple questions, and receive a recommendation of whether or not they should consider private health insurance, plus supporting evidence for that result.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/health-insurance/do-i-need-health-insurance/',
        live: true,
			},
			{
				name: 'Medicare Levy Surcharge Calculator',
				description: 'Given that Compare the Market is most commonly known for health insurance, a common question that users have is "Will I be charged a Medicare Levy Surcharge?" With an old, outdated calculator written in jQUery that did not match the UI of the site, I developed a new calculator that fit much better.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/health-insurance/medicare-levy-surcharge-calculator/',
        live: true,
			},
			{
				name: 'Big Mac Index Interactive',
				description: 'A single page microsite base on the Economist\'s concept of "The Big Mac Index". The data was retrieved from the Economist Github repository, then using a simple Node.js script converted into a format that suited our needs, including an AUD value, and the microsite developed.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/big-mac-index/',
        live: true,
			},
			{
				name: '10 Largest Soccer Stadiums In The World Interactive',
				description: 'During the 2018 World Cup, a microsite was developed showcasing the 10 largest stadiums to have hosted a football/soccer game was built, including integrated 3D photography from Google Maps.',
				date: '2018',
        url: 'https://www.comparethemarket.com.au/10-largest-soccer-stadiums-in-the-world-by-capacity/',
        live: true,
			},
			{
				name: 'Top Destinations in Thailand for Aussies Interactive',
				description: 'An interactive microsite showcasing the most popular destinations within Thailand for Australian travellers, this site uses inline SVG to showcase an interactive map, custom toggles to switch between normal and "Aussie" translations of content and a custom image lazy loading script that was laer rolled out across the rest of the site.',
				date: '2019',
        url: 'https://www.comparethemarket.com.au/thailand-map-for-aussies/',
        live: true,
      },
      {
				name: 'Top Destinations in Thailand for Aussies Interactive',
				description: 'An interactive microsite showcasing the most popular destinations within Thailand for Australian travellers, this site uses inline SVG to showcase an interactive map, custom toggles to switch between normal and "Aussie" translations of content and a custom image lazy loading script that was laer rolled out across the rest of the site.',
				date: '2019',
        url: 'https://www.comparethemarket.com.au/thailand-map-for-aussies/',
        live: true,
      },
      {
        name: '10 Dog Breeds Australians Love the Most',
        description: 'A single page microsite showcasing a list of the top 10 dog breeds that Aussies love, with interactive scroll effects',
        date: '2019',
        url: 'https://www.comparethemarket.com.au/dog-breeds-aussies-love/',
        live: true,
      },
		],
	},
];

export const projects = [
	{
		name: 'Password Generator',
		description: 'A password generator that generates a random string of characters of a configurable length based on a URL param, with keyboard controls (Enter to copy to clipboard, space to generate a new password).',
		 links: [
      {
        label: 'Github',
        url: 'https://github.com/deanacus/password',
      },
      {
        label: 'View Project',
        url: 'https://password.deanacus.com'
      }
    ],
		technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'Netlify',
      'Gulp.js'
    ],
	},
	{
    name: 't',
    description: 'A command line todo list manager with a minimal API, coloured output and optional dotfile based configuration, with basic error state handling for missing task files. A learning exercise.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/deanacus/t'
      },
      {
        label: 'Read the Blog Post',
        url: 'https://deanacus.com/article/t-is-for-tasks/'
      },
    ],
		technology: [
      'Golang'
    ],
	},
	{
    name: 'MD to JSON',
    description: 'A work in progress project to transpile Markdown files into JSON for consumption in React, for a future React version of a weblog. Version 1.0.1 released to NPM, but currently being rewritten with a new API, and a new Markdown Parser',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/deanacus/md-to-json'
      },
      {
        label: 'View on NPM',
        url: 'https://www.npmjs.com/package/@deanacus/md-to-json'
      }
    ],
		technology: [
      'Markdown',
      'JSON',
      'Node.js',
      'NPM',
    ],
	},
	{
    name: 'Talks',
    description: 'A project containing talks that I have given at Front End Learning sessions at work. Currently just housing a single talk introducing IntersectionObserver bvy using it to lazy load images.',
    links: [
      {
        label: 'Github',
        url: 'http://github.com/deanacus/talks'
      },
      {
        label: 'View Project',
        url: 'https://talks.deanacus.com/'
      }
    ],
		technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'Netlify'
    ],
	},
	{
    name: 'Ajax',
    description: 'A javascript class that wraps XMLHTTPRequest in a promise and exposes <code>get</code> and <code>post</code> methods. My first NPM package.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/deanacus/ajax/'
      },
      {
        label: 'View on NPM',
        url: 'https://www.npmjs.com/package/@deanacus/ajax'
      },
    ],
		technology: [
      'JavaScript',
      'XMLHTTPRequest',
      'NPM'
    ],
	},
	{
    name: 'Quit',
    description: 'A responsive dashboard I made to encourage me to stay strong when I first quit smoking, featuring some calculations of money saved, time saved, and cigarettes not smoked, plus time elapsed since I quit smoking',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/deanacus/quit'
      },
      {
        label: 'View Project',
        url: 'https://deanacus.github.io/quit/'
      },
    ],
		technology: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
	},
];

export const intro = [
  `I'm a front end developer, with a focus on JavaScript.`,
  `I believe in building accessible, responsive web sites and web applications using the most appropriate technology for the problem to be solved.`,
  `I've been a professional developer for 5 years, but have been involved in developing websites for almost 20.`,
  `I've worked with a wide range of tools an technology including React, Vanilla JS, WordPress, Jekyll, Laravel, Ektron CMS, SiteCore, and more.`,
  `I'm also interested in using JavaScript on the server, and have built a number of mock REST APIs for use in development`,
]

export const skills = [
	{
		area: 'Front End Development',
		skills: [
      'JavaScript',
      'React',
      'HTML',
      'CSS',
      'SCSS',
      'Styled-components',
      'JQuery',
    ],
  },
  {
    area: 'Back End Development',
    skills: [
      'Node.js',
      'PHP',
      'WordPress',
    ],
  },
  {
    area: 'Development Tooling',
    skills: [
      'Git',
      'Command Line (BASH/ZSH/FISH)',
      'Webpack',
      'Gulp.js',
      'Grunt',
      'NPM',
      'Yarn'
    ]
  },
  {
    area: 'Applications',
    skills: [
      'Visual Studio Code',
      'Vim',
      'Postman',
    ]
  }
];