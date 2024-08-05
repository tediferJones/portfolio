import RepoList from '@/components/subcomponents/RepoList';
import type { Repo } from '@/types';
import t from '@/lib/getTag';

export default function DropDown({ repoArr, title }: { repoArr: Repo[], title: string }) {
  // const fixedTitle = title.replace(' ', '-')
  const fixedTitle = title.replaceAll(' & ', '-').replaceAll(' ', '-')
  return (
    t('div', { className: `transition-colors duration-500 bg-sky-600`, id: `${fixedTitle}-container` }, [
      t('hr'),
      t('button', {
        // id: title.replace(' & ', '-'),
        id: fixedTitle,
        className: 'w-full text-xl text-gray-100 p-4 px-8 flex justify-between scroll-mt-32',
        value: `${title}RepoList`,
        onclick: () => {
          document.querySelector(`#${fixedTitle}-container`)?.classList.toggle('bg-sky-600')
          document.querySelector(`#${fixedTitle}-container`)?.classList.toggle('bg-sky-700')

          document.querySelector(`#${fixedTitle}-icon`)?.classList.toggle('rotate-0')
          document.querySelector(`#${fixedTitle}-icon`)?.classList.toggle('-rotate-90')

          document.querySelector(`#${fixedTitle}-body`)?.classList.toggle('max-h-[0px]')
          document.querySelector(`#${fixedTitle}-body`)?.classList.toggle('max-h-[9999px]')
        },
      }, [
        t('div', { className: 'pointer-events-none my-auto', textContent: `${title} (${repoArr.length})` }),
        t('i', {
            id: `${fixedTitle}-icon`,
            className: `fa-solid fa-chevron-left flex justify-center items-center text-3xl pointer-events-none transition-all duration-500 rotate-0`
          })
      ]),
      t('div', { id: `${fixedTitle}-body`, className: `overflow-hidden transition-maxHeight ease-in-out duration-500 max-h-[0px]` },
        RepoList({ repos: repoArr, title: title })
      )
    ])
  )
}
