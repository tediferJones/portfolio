import type { Repo } from '@/types';
import LinkButtons from './LinkButtons';
import LanguageIconLinks from '@/components/subcomponents/LanguageIconLinks';
import t from '@/lib/getTag';

export default function RepoList({ repos, title }: { repos: Repo[], title: string }) {
  return (
    repos.map(repo => {
      return (
        t('div', { className: 'flex flex-col lg:flex-row mx-16 mb-6 bg-white rounded-xl' }, [
          t('div', { className: 'flex-1 p-4 flex justify-between items-center gap-4 text-center' }, [
            t('h1', { className: 'flex-1 text-center text-lg', textContent: repo.name }),
            t('div', { className: 'flex' }, 
              LanguageIconLinks({ repo })
            )
          ]),
          LinkButtons({
            codeUrl: repo.html_url,
            pageUrl: repo.page_link,
            addClasses: 'rounded-xl',
          })
        ])
      )
    })
  )
}
