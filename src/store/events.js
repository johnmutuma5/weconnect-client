// these will be store events that will have listeners subscribed. The events
// will be referenced by action types such that every component can subscribe
// to events that are triggered only by certain actions. This reduces the
// number of listeners in each event for performance.
import actionTypes from './actions/actionTypes';
import { registerEvent } from './utils';

export const events = {}

registerEvent(events, actionTypes.RENDER_FETCHED_BUSINESSES);
registerEvent(events, actionTypes.INIT_BUSINESSES_STATE);
registerEvent(events, actionTypes.LOGIN_USER);
