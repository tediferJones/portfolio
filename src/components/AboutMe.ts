import { portrait, bio } from '@/contentConfig';
import getLinkInfo from '@/lib/getLinkInfo';
import t from '@/lib/getTag';
import LinkTo from '@/components/subcomponents/LinkTo';

export default function AboutMe() {
  setTimeout(() => {
    document.querySelector('#portrait')?.classList.remove('top-[999px]')
    document.querySelector('#portrait')?.classList.remove('md:right-[999px]')
    document.querySelector('#portrait')?.classList.add('top-[0px]')
    document.querySelector('#portrait')?.classList.add('md:right-[0px]')

    document.querySelector('#title')?.classList.remove('bottom-[999px]')
    document.querySelector('#title')?.classList.add('bottom-[0px]')

    document.querySelector('#bio')?.classList.remove('left-[999px]')
    document.querySelector('#bio')?.classList.add('left-[0px]')

    document.querySelector('#aboutMeLinks')?.classList.remove('right-[999px]')
    document.querySelector('#aboutMeLinks')?.classList.remove('md:top-[999px]')
    document.querySelector('#aboutMeLinks')?.classList.add('right-[0px]')
    document.querySelector('#aboutMeLinks')?.classList.add('md:top-[0px]')
  }, 1)

  return (
    t('div',  { id: 'AboutMe', className: 'overflow-clip w-full flex justify-center items-center gap-8 flex-col-reverse md:flex-row rounded-xl scroll-mt-48 md:scroll-mt-32' }, [
      t('img', {
        // className: `-z-10 md:w-2/5 w-4/5 mb-12 md:my-12 rounded-xl relative transition-all duration-1000 md:top-0 top-[999px] md:right-[999px]`,
        className: `max-h-[720px] max-w-[720px] -z-10 md:w-2/5 w-4/5 mb-12 md:my-12 rounded-xl relative transition-all duration-1000 md:top-0 top-[999px] md:right-[999px]`,
        src: portrait,
        alt: 'Portrait',
        id: 'portrait'
      }),
      t('div', { className: 'md:w-2/5 w-4/5 pt-12 md:py-12 flex flex-col justify-between gap-8' }, [
        t('h1', { 
          className: `bg-sky-600 rounded-xl p-8 text-white text-center text-2xl relative transition-all duration-1000 bottom-[999px]`,
          textContent: 'Welcome to my portfolio!',
          id: 'title'
        }),
        t('p', {
          className: `bg-sky-600 rounded-xl p-8 text-white text-lg text-center relative transition-all duration-1000 left-[999px]`,
          id: 'bio'
        }, bio.reduce<HTMLElement[]>((children, str, i) => {
            children.push(t('span', { textContent: str }))
            if (i < bio.length - 1) {
              children.push(t('br'))
              children.push(t('br'))
            }
            return children
          }, [])
        ),
        t('div', {
          className: `flex flex-wrap gap-8 relative transition-all duration-1000 md:right-0 right-[999px] md:top-[999px]`,
          id: 'aboutMeLinks'
        },
          ['Email', 'Phone'].map(key => {
            return (
              LinkTo({
                className: 'flex-1 p-8 text-lg text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl transition-colors duration-300',
                content: getLinkInfo(key)
              })
            )
          })
        )
      ])
    ]) 
  )
}
