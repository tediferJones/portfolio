import {
  linkOptions,
  contactMenu,
  contactMenuToggles,
  subsectionMenu
} from '@/contentConfig';
import t from '@/lib/getTag'
import getLinkInfo from '@/lib/getLinkInfo';
import LinkTo from '@/components/subcomponents/LinkTo';
import Menu from '@/components/subcomponents/Menu';

export default function Header() {
  return (
    t('div', { className: 'bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-20 scroll-mb-0' }, [
      t('div',{ className: 'w-full sm:w-4/5 flex flex-col sm:flex-row justify-between items-center' }, [
        t('h1', { className: 'text-2xl pb-2 p-8 sm:pb-8 font-bold', textContent: 'Theo Drzewinski' }),
        t('div', { className: 'flex gap-1 sm:gap-6 p-2' }, [
          ...contactMenuToggles.map(key => {
            return LinkTo({
              className: 'hidden lg:flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl transition-colors duration-300',
              content: { ...linkOptions[key], name: key }
            })
          }),
          Menu({
            icon: 'fa-solid fa-at',
            title: 'Contact',
            content: contactMenu.map(key => getLinkInfo(key)),
          }),
          Menu({
            icon: 'fa-solid fa-bars',
            title: 'Menu',
            content: subsectionMenu.map(key => getLinkInfo(key)),
          })
        ])
      ])
    ])
  )
}
