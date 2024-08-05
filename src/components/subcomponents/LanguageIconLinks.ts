import { devicons } from '@/contentConfig';
import type { Repo } from '@/types';
import t from '@/lib/getTag';

export default function LanguageIconLinks({ repo }: { repo: Repo }) {
  const { language, name } = repo;
  let langNames = [ language ];
  if (['HTML', 'CSS'].includes(language)) {
    langNames = ['HTML', 'CSS'];
  }
  if (language === 'Shell') {
    langNames = [ 'Bash' ];
  }
  return (
    langNames.map(lang => {
      return t('button', { onclick: () => {
        const langId = ['HTML', 'CSS'].includes(lang) ? 'HTML-CSS' : lang
        const element = document.querySelector(`#${langId}`);
        const isOpen = element?.parentNode?.lastElementChild?.classList.value.includes('max-h-[9999px]');
        if (element && !isOpen) {
          ['mousedown', 'click', 'mouseup'].forEach(event => {
            element.dispatchEvent(new MouseEvent(event, {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1
            }))
          })
        }
        setTimeout(() => {
          window.location.href = `#${langId}`
        }, 75)
      }}, [
          t('img', {
            className: 'h-12',
            src: devicons[lang],
            alt: lang,
          })
        ])
    })
  )
}
