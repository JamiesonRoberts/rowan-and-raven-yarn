import React from 'react';

export default React.forwardRef(({
    onClick, href, children, classes,
} = {}, ref) => (
    <a href={href} onClick={onClick} ref={ref} className={classes}>
        {children}
    </a>
));
