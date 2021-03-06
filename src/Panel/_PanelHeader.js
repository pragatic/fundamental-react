import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const PanelHeader = props => {
    const { children, className, ...rest } = props;

    const panelHeaderClasses = classnames(
        'fd-panel__header',
        className
    );

    return <div {...rest} className={panelHeaderClasses}>{children}</div>;
};

PanelHeader.displayName = 'PanelHeader';

PanelHeader.propTypes = {
    className: PropTypes.string
};

export default PanelHeader;
