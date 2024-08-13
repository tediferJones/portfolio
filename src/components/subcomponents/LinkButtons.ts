import LinkTo from '@/components/subcomponents/LinkTo';
import t from '@/lib/getTag';

export default function LinkButtons({
  codeUrl,
  pageUrl,
  addClasses
}: {
  codeUrl: string,
  pageUrl?: string,
  addClasses?: string
}) {
  // const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 text-white rounded-xl transition-colors duration-300';
  const sharedClasses = 'font-bold text-blue-600 border-4 border-blue-600 hover:bg-blue-600 hover:text-white hover:text-xl flex-1 text-center p-4 flex justify-center items-center gap-2 rounded-xl transition-all duration-500';
  return (
    t('div', { className: 'flex-1 flex flex-wrap p-2 gap-2 bg-white' + (addClasses ? ' ' + addClasses : '') }, [
      LinkTo({
        // className: `${sharedClasses} text-white bg-orange-500 font-bold`,
        className: sharedClasses,
        content: {
          href: codeUrl,
          name: 'View Code',
          icon: 'fa-regular fa-file-code',
          newTab: true,
        }
      }),
      !pageUrl ? undefined :
        LinkTo({
          // className: `${sharedClasses} text-white bg-rose-500 font-bold`,
          className: sharedClasses,
          content: {
            href: pageUrl,
            name: 'View Page',
            icon: 'fa-solid fa-link',
            newTab: true,
          }
        })
    ])
  )
}
