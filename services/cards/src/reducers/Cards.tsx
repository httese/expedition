import Redux from 'redux';
import {CardsFilterAction, CardsUpdateAction, filterAndFormatCards, TranslationsUpdateAction} from '../actions/Cards';
import {CardsState} from './StateTypes';

export const initialState: CardsState = {
  data: null,
  filtered: null,
  loading: true,
  translations: null,
};

export default function Cards(state: CardsState = initialState, action: Redux.Action): CardsState {
  switch (action.type) {
    case 'CARDS_LOADING':
      return {...state,
        loading: true,
      };
    case 'CARDS_UPDATE':
      return {...state,
        data: (action as CardsUpdateAction).cards,
        loading: false,
      };
    case 'TRANSLATIONS_UPDATE':
      return {...state,
        translations: (action as TranslationsUpdateAction).translations,
      };
    case 'CARDS_FILTER':
      const cardsFilterAction = (action as CardsFilterAction);
      return {...state,
        filtered: filterAndFormatCards(cardsFilterAction.cards, cardsFilterAction.filters),
      };
    default:
      return state;
  }
}
