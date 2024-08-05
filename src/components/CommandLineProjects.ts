import type { Repo } from '@/types';
import { cliRepos } from '@/contentConfig';
import DropDown from '@/components/subcomponents/DropDown';
import t from '@/lib/getTag';

export default function CommandLineProjects({ repos }: { repos: Repo[]}) {
  const commandLineRepos = Object.keys(cliRepos).reduce((obj, key) => {
    obj[key] = repos.filter(repo => cliRepos[key].includes(repo.name))
    return obj;
  }, {} as { [key: string]: Repo[] })
  
  const total = Object.keys(commandLineRepos)
    .reduce((total, key) => total += commandLineRepos[key].length, 0)

  return (
    t('div', { id: 'CliProjects', className: 'bg-sky-600 w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32' }, [
      t('h1', { className: 'text-2xl text-gray-100 p-4', textContent: `Command Line Projects and Algorithms (${total})` }),
      ...Object.keys(commandLineRepos).map(item => {
        return DropDown({
          repoArr: commandLineRepos[item],
          title: item,
        })
      })
    ])
  )
}
