import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Header/index';

const NotFoundPage = () => (
  <div>
    <Heading/>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
