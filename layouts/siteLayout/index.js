import React from 'react';

const SiteLayout = ({ children }) => (
    <div className='test'>{children}</div>
);

export const layout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
