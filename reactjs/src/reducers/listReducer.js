import { CONSTANTS } from '../actions';

const initialState = [
    {
        title: "List One",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "This first card is in List One"
            },
            {
                id: `card-${1}`,
                text: "This second card is in List Two"
            }
        ]
    },
    {
        title: "List Two",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "This first card is in List Two"
            },
            {
                id: `card-${3}`,
                text: "This second card is in List Two"
            },
            {
                id: `card-${4}`,
                text: "This third card is in List Two"
            }
        ]
    }
]

let cardID = 4;

const listReducer = (state = initialState, action) => {
    switch(action.type) {

        case CONSTANTS.ADD_LIST: {
            const { title, id} = action.payload;
            const newList = {
                title: title,
                id: `list-${id}`,
                cards: []
            };

            const newState = { ...state, [`list-${id}`]: newList};

            return newState;
        }
            

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:
            const { 
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type
            } = action.payload;

            const newState2 = [...state];

            if(type === "list") {
                const list = newState2.splice(droppableIndexStart, 1);
                newState2.splice(droppableIndexEnd, 0, ...list);
                
                return newState2;
            }

            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            if(droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find(list => droppableIdEnd === list.id);

                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState2;

        default: 
            return state;
    }
}

export default listReducer;