import {Action, State, StateContext} from '@ngxs/store';


// action class
export class SetSearchTerm {
  static readonly type = 'SET_SEARCH_TERM';
  constructor(public payload: string) {}
}
export class SetUberonTerm {
  static readonly type = 'SET_UBERON_TERM';
  constructor(public payload: string) {}
}
export class SetUberonIri {
  static readonly type = 'SET_UBERON_IRI';
  constructor(public payload: string) {}
}
export class SetHoveredNode {
  static readonly type = 'SET_HOVERED_IRI';
  constructor(public payload: string) {}
}
// store related things
// 1.interface that describe the desire state
export interface TermsStateModel {
  searchTerm: string;
  uberonTerm: string;
  uberonIri: string;
  hoveredNode: string;
}
// 2.create the state
@State<TermsStateModel>({
  name: 'mystate',
  defaults: {
    searchTerm: '',
    uberonTerm: '',
    uberonIri: '',
    hoveredNode: ''
  }
})
// 3.class that groups all actions listeners
export class TermsState {
  @Action(SetSearchTerm)
  setSearchTerm({getState, setState}: StateContext<TermsStateModel>, action: SetSearchTerm) {
    const state = getState();
    setState({
      ...state,
      searchTerm: action.payload
    });
    console.log('//' + action.payload);
    console.log('// ' + state.searchTerm);
  }
  @Action(SetUberonTerm)
  setUberonTerm({getState, setState}: StateContext<TermsStateModel>, action: SetUberonTerm) {
    const state = getState();
    setState({
      ...state,
      uberonTerm: action.payload
    });
    console.log('//' + action.payload);
    console.log('// ' + state.uberonTerm);
  }
  @Action(SetUberonIri)
  setUberonIri({getState, setState}: StateContext<TermsStateModel>, action: SetUberonIri) {
    const state = getState();
    setState({
      ...state,
      uberonIri: action.payload
    });
    console.log('//' + action.payload);
  }
  @Action(SetHoveredNode)
  setHoveredNode({getState, setState}: StateContext<TermsStateModel>, action: SetHoveredNode) {
    const state = getState();
    setState({
      ...state,
      hoveredNode: action.payload
    });
    console.log('//' + action.payload);
    console.log('// ' + state.hoveredNode);
  }
}
