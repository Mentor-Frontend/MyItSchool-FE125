import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            Кажется, здесь уже побывала банда Нигана и всё забрала. Попытай счастья <Link to='/'>снова</Link>.
        </div>
    )
}

export default NotFoundPage