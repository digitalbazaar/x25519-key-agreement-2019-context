/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, CONTEXT_URL_V1, CONTEXT_V1
} = require('..');

const contextUrl = constants.CONTEXT_URL_V1;

describe('X25519 2019 Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V1).to.exist;
    expect(CONTEXT_V1).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });
});
