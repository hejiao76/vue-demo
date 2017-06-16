import {
	RECORD_NAV
} from './mutation-types.js'

export default {
  [RECORD_NAV](state, {
    firstIndex,
    secondIndex
  }) {
    state.navInfo.firstIndex = firstIndex
    state.navInfo.secondIndex = secondIndex
  }
}
