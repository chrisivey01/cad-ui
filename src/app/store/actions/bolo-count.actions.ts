import { BoloList } from './../../models/bolo-list.model';
import { createAction, props } from '@ngrx/store';

export const getUsers = createAction(
  "[Obtain BoloList] fetch boloList",
  props<{boloList:BoloList}>()
);