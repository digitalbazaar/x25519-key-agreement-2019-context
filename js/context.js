/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,
    X25519KeyAgreementKey2019: {
      '@id': 'https://w3id.org/security#X25519KeyAgreementKey2019',
      '@context': {
        '@protected': true,
        id: '@id',
        type: '@type',
        controller: {
          '@id': 'https://w3id.org/security#controller',
          '@type': '@id'
        },
        revoked: {
          '@id': 'https://w3id.org/security#revoked',
          '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
        },
        publicKeyBase58: {
          '@id': 'https://w3id.org/security#publicKeyBase58'
        }
      }
    }
  }
};
