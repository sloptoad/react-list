import React from 'react';

const BackButton = React.forwardRef(({ children, ...props }, ref) => {
    const onClick = (e) => {
        e.preventDefault();
        window.history.back();
    };
    return (
        <div >
            <div {...props} ref={ref} onClick={onClick}>
                <div>{children}Back To List</div>
            </div>
        </div>
    );
});

export default BackButton;
