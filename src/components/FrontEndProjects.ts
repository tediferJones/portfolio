import type { Repo } from '@/types';
import { frontEndProjectNames } from '@/contentConfig';
import DropDown from '@/components/subcomponents/DropDown';
import t from '@/lib/getTag';

export default function FrontEndProjectsV2({ repos }: { repos: Repo[] }) {
  return (
    t('div', { id: 'FrontEndProjects', className: 'w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32' }, [
      DropDown({
        title: 'Front End Projects',
        repoArr: repos.filter(repo => frontEndProjectNames.includes(repo.name))
      })
    ])
  )
}
