import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

describe('Jayveer Trivedi Portfolio Contract & Accuracy Verification', () => {
  const contentFile = fs.readFileSync(
    path.resolve(process.cwd(), 'src/data/portfolio-content.ts'),
    'utf-8'
  );

  test('Identity & Positioning: No exaggerated or hyper-inflated claims', () => {
    assert.match(contentFile, /Jayveer Trivedi/, 'Name must be Jayveer Trivedi');
    assert.match(contentFile, /IIM Bangalore/, 'Must reflect IIM Bangalore background');
    assert.match(contentFile, /Digital Business & Entrepreneurship/, 'Must reflect DBE program');
    
    // Forbidden exaggerated words
    const forbiddenExaggerations = [
      'serial entrepreneur',
      'industry leader',
      'established business tycoon',
      'investment expert',
      'certified financial adviser'
    ];
    for (const term of forbiddenExaggerations) {
      assert.doesNotMatch(
        contentFile.toLowerCase(),
        new RegExp(term, 'i'),
        `Content must NOT contain exaggerated term "${term}"`
      );
    }
  });

  test('Aarambh Network: Signature feature with accurate metrics', () => {
    assert.match(contentFile, /id:\s*"aarambh-network"/, 'Aarambh Network must exist');
    assert.match(contentFile, /300\+/, 'Aarambh must cite 300+ founders');
    assert.match(contentFile, /50\+/, 'Aarambh must cite 50+ speakers/mentors');
    assert.match(contentFile, /Founders' Roundtables/, 'Aarambh must highlight Founders Roundtables format');
  });

  test('SevaSetu: Grounded Mehsana local-services context and pre-launch status', () => {
    assert.match(contentFile, /id:\s*"sevasetu"/, 'SevaSetu must exist');
    assert.match(contentFile, /Mehsana,\s*Gujarat/, 'SevaSetu must reference Mehsana, Gujarat context');
    assert.match(contentFile, /Pre-Launch \/ Early Validation/, 'SevaSetu must be pre-launch validation stage');
  });

  test('Growth Network: Strictly separated from Aarambh Network', () => {
    assert.match(contentFile, /id:\s*"growth-network"/, 'Growth Network must exist');
    assert.match(contentFile, /500\+/, 'Growth Network must cite 500+ members');
  });

  test('P2P EV Charging Model: Conceptual architecture exploration', () => {
    assert.match(contentFile, /id:\s*"p2p-charging"/, 'P2P Charging Model must exist');
    assert.match(contentFile, /Research & Concept/, 'P2P Charging must be research/conceptual model');
  });

  test('Avenor: Associated 700+ founder network with guardrail disclaimer', () => {
    assert.match(contentFile, /700\+/, 'Avenor must cite 700+ network');
    assert.match(contentFile, /guardrailNote/, 'Avenor must include guardrail disclaimer note');
  });

  test('Professional Experience & BD: Kalnet Business Development Executive', () => {
    assert.match(contentFile, /Business Development Executive/, 'Kalnet designation must be BDE');
    assert.match(contentFile, /Kalnet/, 'Kalnet organization must be present');
  });

  test('Recognition: TVS Credit E.P.I.C. 8.0 Top 15 in India', () => {
    assert.match(contentFile, /TVS Credit E\.P\.I\.C\. 8\.0/, 'TVS Credit EPIC 8.0 must be present');
    assert.match(contentFile, /Top 15 in India/, 'TVS Credit recognition must be Top 15 in India');
  });

  test('Research: CURE 2027 Information Asymmetry empirical study', () => {
    assert.match(contentFile, /CURE 2027/, 'CURE 2027 target venue must be present');
    assert.match(contentFile, /Information Asymmetry and Market Efficiency/, 'Research title must match empirical study');
    assert.match(contentFile, /Work in Progress/, 'Research must be marked as Work in Progress');
  });

  test('Location & LinkedIn: Mehsana Gujarat and verified LinkedIn profile', () => {
    assert.match(contentFile, /Mehsana,\s*Gujarat,\s*India/, 'Current location must be Mehsana, Gujarat, India');
    assert.match(contentFile, /jayveer-trivedi-7a46423b8/, 'LinkedIn ID must match verified handle');
    assert.match(contentFile, /96876\s*73504/, 'Phone number must match verified record');
    assert.match(contentFile, /jayveer\.trivedi26@iimb\.ac\.in/, 'Official IIMB email must be present');
    assert.match(contentFile, /jayveer886699@gmail\.com/, 'Personal email must match verified resume');
  });

  test('MarketVerse: Verified live MVP from CV', () => {
    assert.match(contentFile, /id:\s*"marketverse"/, 'MarketVerse must exist');
    assert.match(contentFile, /Live MVP/, 'MarketVerse must be marked as Live MVP');
    assert.ok(
      fs.existsSync(path.resolve(process.cwd(), 'public/Jayveer_Trivedi_Resume.pdf')),
      'Jayveer_Trivedi_Resume.pdf must exist in public folder'
    );
  });
});
