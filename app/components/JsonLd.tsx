// Server component — renders JSON-LD structured data in <head> for Google rich results

const BASE_URL = 'https://saishivamaniportfolio.vercel.app';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sai Shivamani',
  url: BASE_URL,
  image: `${BASE_URL}/portrait.png`,
  jobTitle: 'Full Stack Developer & AI Engineer',
  description:
    'Sai Shivamani is a Full Stack Developer, C++ DSA Problem Solver, and AI Engineer based in Hyderabad, India. Specializes in scalable web systems, machine learning, and software engineering.',
  sameAs: [
    'https://github.com/saishivamani1',
    'https://www.linkedin.com/in/saishivamani1/',
    'https://leetcode.com/u/sai_shivamani1/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Full Stack Development',
    'React.js',
    'Next.js',
    'Python',
    'C++',
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Data Structures and Algorithms',
    'System Design',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sai Shivamani Portfolio',
  url: BASE_URL,
  description:
    'Portfolio website of Sai Shivamani — Full Stack Developer, AI Engineer, and C++ DSA specialist from Hyderabad, India.',
  author: {
    '@type': 'Person',
    name: 'Sai Shivamani',
  },
  inLanguage: 'en-IN',
};

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Sai Shivamani',
  url: `${BASE_URL}/#projects`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Product Showcase Website',
        description:
          'Responsive product showcase platform for aerospace, defense, and agriculture sectors — built with Firebase and EmailJS.',
        applicationCategory: 'WebApplication',
        url: 'https://sridattadmvengineering.com',
        author: { '@type': 'Person', name: 'Sai Shivamani' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        name: 'AI Nutrition Prediction System',
        description:
          'Intelligent health analysis system using Python and Google Fit API for personalized nutrition insights.',
        applicationCategory: 'WebApplication',
        author: { '@type': 'Person', name: 'Sai Shivamani' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        name: 'IT Incident Summarization AI Agent',
        description:
          'Autonomous AI system using NLP and LLMs to summarize IT incidents with ~83% root cause accuracy.',
        applicationCategory: 'WebApplication',
        author: { '@type': 'Person', name: 'Sai Shivamani' },
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
