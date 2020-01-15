import { TOGGLE_TABS } from '../constant';

export const tabToggle = (key, bus) => ({
  type: TOGGLE_TABS,
  payload: key,
  bus: bus
});

