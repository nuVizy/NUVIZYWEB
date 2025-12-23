import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: MetaOptions): void {
  useEffect(() => {
    document.title = title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', description);
    } else {
      const newDesc = document.createElement('meta');
      newDesc.name = 'description';
      newDesc.content = description;
      document.head.appendChild(newDesc);
    }
  }, [title, description]);
}
