'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache as antdCreateCache, extractStyle } from '@ant-design/cssinjs';

if (!process.browser) React.useLayoutEffect = React.useEffect;

const AntdStyleRegistry = ({ children }: { children: React.ReactNode }) => {
  const [antdCache] = useState(() => antdCreateCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
        <>
          <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(antdCache) }}/>
        </>
    );
  });

  return (
        <StyleProvider cache={antdCache}>
          {render}
        </StyleProvider>
  );
}

export default AntdStyleRegistry;