'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
if (!process.browser) React.useLayoutEffect = React.useEffect;

const AntdStyleRegistry = ({ children }: { children: React.ReactNode }) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);

    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));


    return <StyleProvider cache={cache}>{children}</StyleProvider>;
}

export default AntdStyleRegistry;