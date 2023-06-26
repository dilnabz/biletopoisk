import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CounterState {
    values: Record<string, number>;
};

const initialState: CounterState = {
    values: {},
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.values[id] = (state.values[id] || 0) + 1;
        },
        decrement(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.values[id] = (state.values[id] || 0) - 1;
        },
        removeCounts(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.values[id] = 0;
        }
    },
})

export const {increment, decrement, removeCounts} = counterSlice.actions;
