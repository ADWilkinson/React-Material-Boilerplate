import { useState } from 'react';
import createContainer from 'constate';

const GlobalStore = createContainer(props => useState(props.globalStore));

export default GlobalStore;
