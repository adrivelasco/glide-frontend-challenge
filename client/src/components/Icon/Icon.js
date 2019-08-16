import React from 'react';
import { string } from 'prop-types'
import icons from './iconsBase64.json';

const Icon = ({ name }) => {
  return (
    <img className="img-responsive" alt="name" src={name ? icons[name] : null} />
  );
}

Icon.propTypes = {
  name: string.isRequired
};

export default Icon;