import RepoList from '@/components/subcomponents/RepoList'
import type { Repo } from '@/types'
import t from '@/lib/getTag'

export default function RecentProjects({ repos }: { repos: Repo[] }) {
  return (
    t('div', {
      id: 'RecentProjects',
      className: 'bg-sky-600 w-full md:w-4/5 my-12 pb-4 md:rounded-xl scroll-mt-48 md:scroll-mt-32'
    }, [
        t('h1', { className: 'text-gray-100 text-2xl p-8', textContent: 'Recent Projects' }),
        ...RepoList({ repos: repos.slice(0, 8), title: 'RecentProjects' }),
      ])
  )
}
