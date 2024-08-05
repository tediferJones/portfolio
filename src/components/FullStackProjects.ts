import type { Repo } from '@/types';
import { backEndProjectNames } from '@/contentConfig';
import DropDown from '@/components/subcomponents/DropDown';
import t from '@/lib/getTag';

export default function FullStackProjects({ repos }: { repos: Repo[] }) {
  return (
    t('div', { id: 'FullStackProjects', className: 'w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32' }, [
      DropDown({
        title: 'Full Stack Projects',
        repoArr: repos.filter(repo => backEndProjectNames.includes(repo.name))
      })
    ])
  )
}
