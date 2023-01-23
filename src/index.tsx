import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './components/Button/Button';

import { NesProvider } from './components/NesProvider/NesProvider';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <NesProvider>
    <Button>Hello</Button>
  </NesProvider>,
);
