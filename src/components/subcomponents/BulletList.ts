import t from '@/lib/getTag'

export default function BulletList({
  heading,
  points
}: {
  heading: string,
  points: string[]
}) {
  return (
    !points.length ? t('h4', {
      className: 'text-xl p-4',
      textContent: 'Primary Language: TypeScript'
    }) : t('ul', { className: 'list-outside list-disc p-2 flex flex-col items-center' }, [
        t('h4', {
          className: 'text-xl p-2 self-start',
          textContent: heading,
        }),
        ...points.map(point => t('li', {
          className: 'w-4/5 text-lg', 
          textContent: point
        }))
      ])
  )
}
