import React from 'react';

const SiteLayout = ({ children }) => (
    <>{children}</>
);

export const layout = page => <SiteLayout>{page}</SiteLayout>;
