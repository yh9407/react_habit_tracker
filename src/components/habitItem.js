import styled from 'styled-components';
import { useCallback } from 'react';
const RowList = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
    > p {
        font-size: 2.5em;
    }
    .text {
        min-width: 5em;
        max-width: 5em;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .count {
        color: white;
        margin: 0 0.4em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #61dafb;
        border-radius: 100%;
        width: 1em;
        height: 1em;
    }
    > button {
        border: 0;
        outline: none;
        cursor: pointer;
    }
    .habit-button {
        font-size: 2.5em;
        margin: 0 0.1em;
        background-color: transparent;
        &:hover {
            opacity: 0.8;
        }
    }
    .increase-button,
    .decrease-button {
        color: goldenrod;
    }
    .remove-button {
        color: darkred;
    }
`;
const HabitItem = ({ list, setList, item }) => {
    // const index = list.findIndex((listItem) => listItem === item);
    const index = list.indexOf(item);
    let newArr = [...list];
    const handleRemove = (index) => {
        setList(newArr.filter((r) => r.id !== item.id));
        // const newList = removeItemAtIndex(list, index);
        // setList(newList);
    };

    const handleIncrease = useCallback(
        (index) => {
            newArr[index].count++;
            setList(newArr);
        },
        [newArr[index].count]
    );
    const handleDecrease = (index) => {
        const count = newArr[index].count - 1;
        newArr[index].count = count < 0 ? 0 : count;
        setList(newArr);
    };
    return (
        <RowList>
            <p className={'text'}>{item.name}</p>
            <p className={'count'}>{item.count}</p>
            <button className={'habit-button increase-button'} onClick={() => handleIncrease(index)}>
                <i className="fas fa-plus-square" />
            </button>
            <button className={'habit-button decrease-button'} onClick={() => handleDecrease(index)}>
                <i className="fas fa-minus-square" />
            </button>
            <button className={'habit-button remove-button'} onClick={() => handleRemove(index)}>
                <i className="fas fa-trash" />
            </button>
        </RowList>
    );
};
export default HabitItem;
