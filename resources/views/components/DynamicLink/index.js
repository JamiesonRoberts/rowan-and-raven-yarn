import React from 'react';
import classNames from 'classnames';

export default React.forwardRef(({
    onClick, href, children, classes,
} = {}, ref) => (
    <a href={href} onClick={onClick} ref={ref} className={classNames(classes)}>
        {children}
    </a>
));
