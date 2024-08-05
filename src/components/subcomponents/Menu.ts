import type { MenuItem } from '@/types'
import LinkTo from '@/components/subcomponents/LinkTo'
import { contactMenuToggles } from '@/contentConfig'
import t from '@/lib/getTag'

export default function Menu({
  icon,
  title,
  content,
}: {
  icon: string,
  title: string,
  content: MenuItem[],
}) {
  return (
    t('div', {
      className: 'flex items-center flex-col justify-center relative',
      onmouseleave: () => {
        document.querySelector(`#${title}-body`)?.classList.add('hidden')
        document.querySelector(`#${title}-tail`)?.classList.add('hidden')
        document.querySelector(`#${title}-trigger`)?.classList.remove('bg-sky-700')
      }
    }, [
        t('button', {
          className: 'text-lg flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl mr-4 sm:mr-0 transition-colors duration-300',
          id: `${title}-trigger`,
          onclick: () => {
            document.querySelector(`#${title}-body`)?.classList.toggle('hidden')
            document.querySelector(`#${title}-tail`)?.classList.toggle('hidden')
            document.querySelector(`#${title}-trigger`)?.classList.add('bg-sky-700')
          }
        }, [
            t('i', { className: `${icon} pointer-events-none` }),
            t('p', { textContent: title, className: 'pointer-events-none' }),
          ]),
        t('div', {
          className: 'hidden h-8 w-8 bg-sky-700 absolute top-14 rotate-45',
          id: `${title}-tail`
        }),
        t('div', { className: 'hidden bg-sky-700 absolute top-16 px-4 py-2 rounded-xl z-10 right-1 sm:right-auto',
          id: `${title}-body`
        }, content.map((key, i) => {
            return (
              t('div', { className: (key.name && contactMenuToggles.includes(key.name) ? 'lg:hidden' : '') }, [
                LinkTo({
                  content: key,
                  className: 'my-1 p-2 whitespace-nowrap flex justify-center items-center gap-4 hover:bg-sky-800 rounded-xl transition-colors duration-300',
                  textClassName: 'flex-1 flex justify-center',
                }),
                i < content.length - 1 ? t('hr') : undefined
              ])
            )
          })
        )
      ])
  )
}
