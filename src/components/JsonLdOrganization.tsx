import { useEffect } from 'react';

interface Props {
  name: string;
  url: string;
  description: string;
  location: string;
}

const JsonLdOrganization = ({ name, url, description, location }: Props): null => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url,
      description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [name, url, description, location]);

  return null;
};

export default JsonLdOrganization;
