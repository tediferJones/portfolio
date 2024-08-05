import { linkOptions } from '@/contentConfig';

export default function getLinkInfo(key: string) {
  return {
    name: key,
    ...linkOptions[key]
  }
}
