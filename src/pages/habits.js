import styled from 'styled-components';
import { useState } from 'react';
import HabitItem from 'components/habitItem';
import HabitAddForm from 'components/habitAddForm';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    height: 105px;
    background-color: wheat;
    padding-left: 32px;
    .nav_title {
        font-size: 32px;
    }
    .nav_num {
        color: #ffffff;
        margin-left: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        background-color: green;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`;

const Habits = () => {
    const [list, setList] = useState([]);
    const [id, setId] = useState(0);

    const getId = () => {
        setId(id + 1);
    };
    const onAdd = (name) => {
        getId();
        const habit = {
            id: id,
            name,
            count: 0,
        };
        const habits = [...list, habit];
        setList(habits);
    };
    const onReset = () => {
        const habits = list.map((habit) => {
            habit.count = 0;
            return habit;
        });
        setList(habits);
    };
    return (
        <>
            <Nav>
                <p className={'nav_title'}>🐶 Habit Tracker</p>
                <p className={'nav_num'}>{list.length}</p>
            </Nav>
            <HabitAddForm onAdd={onAdd} />
            <button onClick={() => onReset()}>reset</button>
            {list.map((item) => {
                return <HabitItem setList={setList} list={list} item={item} key={item.id} />;
            })}
        </>
    );
};
export default Habits;
