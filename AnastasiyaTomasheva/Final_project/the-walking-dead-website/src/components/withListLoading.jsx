import React from 'react';

function WithListLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
            Подождите немного, и всё загрузится 
        </p>
        );
    };
}
export default WithListLoading;