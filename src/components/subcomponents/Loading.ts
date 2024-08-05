import t from '@/lib/getTag'

export default function Loading({ loadingId }: { loadingId: string }) {
  return t('h1', {
    id: loadingId,
    className: 'p-4 my-12 text-xl bg-sky-600 w-4/5 text-center text-white rounded-xl',
    textContent: 'Loading...' 
  })
}
