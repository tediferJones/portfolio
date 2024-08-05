import { techExp, devicons } from '@/contentConfig'
import BulletList from '@/components/subcomponents/BulletList';
import t from '@/lib/getTag';

export default function TechnicalExperience() {
  return (
    t('div', {
      id: 'TechnicalExperience',
      className: 'py-12 bg-sky-600 text-gray-100 w-full flex flex-col items-center scroll-mt-48 md:scroll-mt-32'
    }, [
        t('div', { className: 'w-4/5 pb-4' }, [
          t('h1', {
            className: 'text-2xl self-start',
            textContent: 'Relevant technical experience'
          })
        ]),
        t('div', { className: 'w-4/5 flex flex-wrap' }, 
          techExp.map(col => t('div', { className: 'flex flex-col justify-evenly flex-1' },
            Object.keys(col).map(heading => BulletList({
              heading: heading,
              points: col[heading]
            }))
          ))
        ),
        t('div', { className: 'bg-white w-4/5 p-8 mt-8 grid gap-4 grid-cols-3 justify-items-center sm:grid-cols-3 md:grid-cols-5 rounded-xl' },
          Object.keys(devicons).map(langName => {
            return t('img', {
              className: 'w-20 h-20',
              src: devicons[langName],
              alt: langName,
            })
          })
        )
      ])
  )
}
