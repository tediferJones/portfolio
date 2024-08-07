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
  // const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 text-gray-100 rounded-xl transition-colors duration-300';
  const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 text-white rounded-xl transition-colors duration-300';
  // const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 font-semibold text-blue-600 bg-white border-4 border-blue-600 rounded-xl transition-colors duration-300';
  // const sharedClasses = 'flex-1 text-center p-4 flex justify-center items-center gap-2 bg-blue-600 text-white rounded-xl transition-colors duration-300';
  return (
    t('div', { className: 'flex-1 flex flex-wrap p-2 gap-2 bg-white' + (addClasses ? ' ' + addClasses : '') }, [
      LinkTo({
        // className: `${sharedClasses} bg-blue-800 hover:bg-blue-950`,
        // className: `${sharedClasses} bg-fuchsia-600 hover:bg-fuchsia-700`,
        className: `${sharedClasses} bg-blue-700 hover:bg-blue-800`,
        // className: sharedClasses,
        content: {
          href: codeUrl,
          name: 'View Code',
          icon: 'fa-regular fa-file-code',
          newTab: true,
        }
      }),
      !pageUrl ? undefined :
        LinkTo({
          // className: `${sharedClasses} bg-teal-500 hover:bg-teal-600`,
          // className: `${sharedClasses} bg-pink-600 hover:bg-pink-700`,
          className: `${sharedClasses} bg-blue-700 hover:bg-blue-800`,
          // className: sharedClasses,
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
