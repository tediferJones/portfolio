import { externalPages, ignoredRepos } from '@/contentConfig';
import t from '@/lib/getTag';
import type { Repo } from '@/types';

import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import TechnicalExperience from '@/components/TechnicalExperience';
import RecentProjects from '@/components/RecentProjects';
import FrontEndProjects from '@/components/FrontEndProjects';
import FullStackProjects from '@/components/FullStackProjects';
import CommandLineProjects from '@/components/CommandLineProjects';
import AllProjects from '@/components/AllProjects';
import Loading from '@/components/subcomponents/Loading';

// TO DO
// Consider making header full width even at larger screen sizes

const loadingId = 'github'
document.body.appendChild(
  t('div', { id: 'root', className: 'w-full flex flex-col items-center' }, [
  // t('div', { id: 'root', className: 'mx-auto max-w-2xl w-full flex flex-col items-center' }, [
    Header(),
    AboutMe(),
    TechnicalExperience(),
    Loading({ loadingId }),
  ])
);

fetch('https://api.github.com/users/tediferjones/repos?&per_page=100')
  .then(res => res.ok ? res.json() : [])
  .then((data: Repo[]) => {
    if (!data.length) {
      const node = document.querySelector(`#${loadingId}`)
      if (node) node.textContent = 'Failed to fetch repo information from GitHub'
      return
    }

    const keys = Object.keys(externalPages);
    const repos = data.filter(repo => repo.language && !ignoredRepos.includes(repo.name))
    .map((repo: Repo) => {
      const { name, has_pages } = repo;
      if (has_pages || keys.includes(name)) {
        repo.page_link = has_pages ? `https://tediferjones.github.io/${name}`
          : externalPages[name]; 
      }
      return repo
    }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    document.querySelector(`#${loadingId}`)?.remove();
    [
      RecentProjects({ repos }),
      FrontEndProjects({ repos }),
      FullStackProjects({ repos }),
      CommandLineProjects({ repos }),
      AllProjects({ repos }),
    ].forEach(node => document.querySelector('#root')?.appendChild(node));
  });
