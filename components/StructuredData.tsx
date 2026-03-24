import Script from 'next/script';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TAG08 - Infraestrutura Web',
    image: 'https://tag08.com.br/logo.png',
    '@id': 'https://tag08.com.br',
    url: 'https://tag08.com.br',
    telephone: '+5583999999999',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.11532,
      longitude: -34.861,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
    },
    sameAs: [
      'https://www.instagram.com/tag08.mkt',
      'https://www.google.com/search?q=TAG08+-+Marketing+e+Consultoria',
    ],
  };

  return (
    <Script
      id="local-business-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
