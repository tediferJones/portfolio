import t from '@/lib/getTag'
import type { MenuItem } from '@/types'

export default function LinkTo({
  content,
  className,
  textClassName
}: {
  content: MenuItem,
  className?: string,
  textClassName?: string
}) {
  return (
    t('a', {
      className: `text-lg ${className}`,
      target: content.newTab ? '_blank' : '',
      rel: content.newTab ? 'noopener noreferrer' : '',
      href: content.href,
    }, [
        content.icon ? t('i', { className: content.icon }) : t('div'),
        t('p', { className: textClassName, textContent: content.name })
      ])
  )
}
