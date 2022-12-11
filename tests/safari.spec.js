// @ts-check
import { test, expect } from '@playwright/test';

import isSafari from '../lib/index.js'

test('is safari', async ({ page, browserName }) => {
    // Blank Page
    await page.goto('about:blank');

    // Evaluate module code in the browser
    const browserIsSafari = await page.evaluate(isSafari);

    // Playwright knows what browser it's running
    expect(browserIsSafari).toBe(browserName === 'webkit');
});